import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { getRecipeById } from "@/utils/data/recipes";
import { createServerSupabase } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import Link from "next/link";
import CopyButton from "./CopyButton";

export default async function Page({ params }: { params: { id: string } }) {
	const supabase = createServerSupabase(cookies());
	let recipe = null;
	try {
		recipe = await getRecipeById(supabase, params.id);
	} catch (error) {
		console.error(error);
	}

	return (
		<Card className="m-20 mx-auto flex w-1/2 flex-col items-center">
			<CardHeader className="text-center">
				<CardTitle>
					{recipe ? recipe.name : "Recipe not found"}
				</CardTitle>
				<CardDescription>
					<p>
						{recipe
							? recipe.description
							: "Please try your search again"}
					</p>
				</CardDescription>
			</CardHeader>
			<CardContent>
				<h1>{recipe ? "Directions:" : null}</h1>
				<p>{recipe ? recipe.directions : null}</p>
			</CardContent>
			<CardFooter>
				{recipe ? (
					<CopyButton
						url={`http://localhost:3000/recipe/${params.id}`}
					/>
				) : (
					<Button variant="outline" asChild>
						<Link href="/">Go Home</Link>
					</Button>
				)}
			</CardFooter>
		</Card>
	);
}
