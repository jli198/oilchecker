"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { createClientSupabase } from "@/utils/supabase/client";
import React from "react";

export default function CreateRecipe() {
	const supabase = createClientSupabase();
	const [date, setDate] = React.useState<Date | undefined>(new Date());

	return (
		<div>
			<h1>Create a recipe here!</h1>
			<p className="font-serif text-4xl">
				Below, please type the directions for your recipe. When you are
				finished, press the blue button to submit.
			</p>
			<form>
				<label id="recipeTitle">Recipe Title</label>
				<br />
				<Input type="text" id="recipeTitle" name="title" />
				<br />
				<label id="recipeDescription">Recipe Description</label>
				<Input type="text" id="recipeDescription" name="description" />
				<Button type="submit" value="Submit">
					Submit here
				</Button>
			</form>
		</div>
	);
}
