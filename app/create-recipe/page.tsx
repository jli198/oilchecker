import { createServerSupabase } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import CreateClientPage from "./CreateClientPage";

export default async function CreateRecipe() {
	const supabase = createServerSupabase(cookies());

	const { data: oilData } = await supabase
		.from("Oil")
		.select("*")
		.eq("type", "cooking");

	return <CreateClientPage oilData={oilData ? oilData : []} />;
}
