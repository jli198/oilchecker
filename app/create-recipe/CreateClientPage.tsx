"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { createClientSupabase } from "@/utils/supabase/client";
import { use, useState } from "react";

interface Oil {
	id: string;
	create_at: string;
	name: string;
	description: string;
	type: string;
}

export default function CreateRecipe({ oilData }: { oilData: Oil[] }) {
	const supabase = createClientSupabase();
	const [recipeName, setRecipeName] = useState<string>("");
	const [recipeDescription, setRecipeDescription] = useState<string>("");
	const [recipeInstructions, setRecipeInstructions] = useState<string>("");
	const [recipeOil, setRecipeOil] = useState<string>("");
	const [recipePreparation, setRecipePreparation] = useState<string>("");

	const submitRecipe = (
		name: string,
		description: string,
		directions: string,
		main_oil: string,
		preparation: string,
	) => {
		const { error } = use(
			supabase.from("Recipe").insert({
				name,
				description,
				directions,
				main_oil,
				preparation,
			}),
		);
		if (error) {
			console.error("error", error);
		}
	};

	return (
		<div>
			<h1 className="transform text-center font-sans text-3xl font-semibold hover:scale-110">
				Create Recipe Page!
			</h1>
			<p className="text-center font-sans text-lg font-medium">
				Below, please type the title and instructions for your recipe.
				When you are finished, press the button to submit.
			</p>
			<br></br>
			<form>
				<div className="mb-4 flex items-center justify-center">
					<label
						htmlFor="recipeTitle"
						className="mr-2 font-sans font-normal"
					>
						Title
					</label>
					<Input
						type="text"
						id="recipeTitle"
						name="title"
						className="w-full md:w-1/4"
						value={recipeName}
						onChange={(e) => {
							setRecipeName(e.target.value);
						}}
					/>
				</div>
				<div className="mb-4 flex items-center justify-center">
					<label
						htmlFor="recipeDescription"
						className="mr-2 font-sans font-normal"
					>
						Description
					</label>
					<Input
						type="text"
						id="recipeTitle"
						name="title"
						className="w-full md:w-3/4"
						value={recipeDescription}
						onChange={(e) => {
							setRecipeDescription(e.target.value);
						}}
					/>
				</div>
				<div className="mb-4 flex items-center justify-center">
					<label
						id="recipeInstructions"
						className="mr-2 font-sans font-normal"
					>
						Instructions
					</label>
					<textarea
						id="recipeInstructions"
						name="instructions"
						className="w-full rounded-md border-gray-300 md:w-3/4"
						value={recipeInstructions}
						onChange={(e) => {
							setRecipeInstructions(e.target.value);
						}}
					/>
				</div>
				<div className="mb-4 flex items-center justify-center">
					<label
						htmlFor="oilType"
						className="mr-2 font-sans font-normal"
					>
						Main Cooking Oil
					</label>
					<select
						id="oilType"
						name="oilType"
						className="w-full rounded-md border-gray-300 md:w-1/2"
						value={recipeOil}
						onChange={(e) => {
							setRecipeOil(e.target.value);
						}}
					>
						{oilData?.map((oil: Oil) => (
							<option key={oil.id}>{oil.name}</option>
						))}
					</select>
				</div>
				<div className="mb-4 flex items-center justify-center">
					<label
						htmlFor="oilType"
						className="mr-2 font-sans font-normal"
					>
						Main Preparation
					</label>
					<select
						id="oilPrep"
						name="oilPrep"
						className="w-full rounded-md border-gray-300 md:w-1/2"
						value={recipePreparation}
						onChange={(e) => {
							setRecipePreparation(e.target.value);
						}}
					>
						<option key="sf">Shallow fry</option>
						<option key="af">Air fry</option>
						<option key="df">Deep fry</option>
						<option key="st">Saute</option>
						<option key="se">Sear</option>
					</select>
				</div>
				<div className="flex justify-center">
					<Button
						type="submit"
						value="Submit"
						className="center"
						onClick={() => {
							submitRecipe(
								recipeName,
								recipeDescription,
								recipeInstructions,
								recipeOil,
								recipePreparation,
							);
						}}
					>
						Submit here
					</Button>
				</div>
			</form>
		</div>
	);
}
