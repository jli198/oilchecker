import { createServerSupabase } from "@/utils/supabase/server";
import { cookies } from "next/headers";

export default async function Home() {
	const supabase = createServerSupabase(cookies());
	return (
		<main className="flex min-h-screen flex-col items-center justify-between bg-gray-200 p-24"></main>
	);
}
