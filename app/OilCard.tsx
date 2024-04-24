"use client";

import { Badge } from "@/components/ui/badge";
import {
	Card,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

interface Oil {
	id: string;
	create_at: string;
	name: string;
	description: string;
	type: string;
}

export default async function OilCard(oil: Oil) {
	return (
		<Card className="w-2/5 transform text-center drop-shadow-lg transition-transform duration-500 ease-in-out hover:scale-105">
			<CardHeader>
				<CardTitle>{oil.name}</CardTitle>
				<CardDescription>{oil.description}</CardDescription>
			</CardHeader>
			<CardFooter>
				<Badge
					className={`mx-auto ${oil.type === "cooking" ? "bg-blue-500" : "bg-red-500"}`}
				>
					{oil.type}
				</Badge>
			</CardFooter>
		</Card>
	);
}
