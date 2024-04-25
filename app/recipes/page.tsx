import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { createServerSupabase } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import Link from "next/link";

export default async function Recipes() {
	const supabase = createServerSupabase(cookies());
	const { data: recipes, error } = await supabase.from("Recipe").select("*");

	return (
		<div className="flex min-h-screen flex-col items-center bg-gray-200 text-black">
			<h1 className="my-10 text-4xl font-bold">All Recipes</h1>
			<Button
				className="bg-green-500 text-black shadow-2xl hover:bg-green-500"
				asChild
			>
				<Link href="/create-recipe">Create a New Recipe</Link>
			</Button>
			<div className="m-10 space-y-5">
				{recipes?.map((recipe) => (
					<Card key={recipe.id} className="mx-auto w-1/2">
						<CardHeader className="text-center">
							<CardTitle>{recipe.name}</CardTitle>
							<CardDescription>
								{recipe.description}
							</CardDescription>
							<CardContent>
								<p>{recipe.directions}</p>
							</CardContent>
							<CardFooter>
								<Badge className="mx-auto bg-green-500">
									{recipe.main_oil}
								</Badge>
								<Badge className="mx-auto bg-yellow-500">
									{recipe.preparation}
								</Badge>
							</CardFooter>
						</CardHeader>
					</Card>
				))}
			</div>
		</div>
	);
}
