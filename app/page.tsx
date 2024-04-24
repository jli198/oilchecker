import { createServerSupabase } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import HomeClientPage from "./HomeClientPage";

export default async function Home() {
	const supabase = createServerSupabase(cookies());
	const { data: oilData, error } = await supabase.from("Oil").select("*");

	console.log("oilData", oilData);
	return (
		<main className="flex min-h-screen flex-col items-center bg-gray-200">
			<HomeClientPage
				oilData={oilData?.sort((a, b) => a.name.localeCompare(b.name))}
			/>
		</main>
	);
}
