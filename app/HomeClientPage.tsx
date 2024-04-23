"use client";

import { Input } from "@/components/ui/input";
import { createClientSupabase } from "@/utils/supabase/client";
import { useState } from "react";
import OilCard from "./OilCard";

interface Oil {
	id: string;
	create_at: string;
	name: string;
	description: string;
	type: string;
}

export default function HomeClientPage({ oilData }: { oilData: any }) {
	const supabase = createClientSupabase();
	const [oilSearchTerm, setOilSearchTerm] = useState<string>("");

	return (
		<div className="flex w-full flex-col items-center text-black">
			<Input placeholder="Search for oils" className="my-10 w-3/5" />
			<div className="mx-10 mb-10 flex flex-wrap justify-between space-y-5">
				{oilData.map((oil: Oil) => (
					<OilCard key={oil.id} {...oil} />
				))}
			</div>
		</div>
	);
}
