"use client";

import OilCard from "./OilCard";

interface Oil {
	id: string;
	create_at: string;
	name: string;
	description: string;
	type: string;
}

export default function HomeClientPage({ oilData }: { oilData: any }) {
	return (
		<div className="flex w-full flex-col items-center text-black">
			<div className="m-10 mb-10 flex flex-wrap justify-between space-y-5">
				{oilData.map((oil: Oil) => (
					<OilCard key={oil.id} {...oil} />
				))}
			</div>
		</div>
	);
}
