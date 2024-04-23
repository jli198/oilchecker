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
			<h1 className="font-sans font-semibold text-center text-3xl transform hover:scale-110">Create Recipe Page!</h1>
			<p className="font-sans font-medium text-center text-lg">
				Below, please type the title and instructions for your recipe. When you are
				finished, press the blue button to submit.
			</p>
			<br></br>
			<form>
				<div className="flex justify-center items-center mb-4">
    				<label htmlFor="recipeTitle" className="font-sans font-normal mr-2">Title</label>
    				<Input type="text" id="recipeTitle" name="title" className="w-full md:w-1/4" />
  				</div>
				<div className="flex justify-center items-center mb-4">
					<label id="recipeInstructions" className="font-sans font-normal mr-2">Instructions</label>
					<textarea id="recipeInstructions" name="instructions" className="w-full md:w-3/4 border-gray-300 rounded-md"/>
				</div>
				<div className="flex justify-center">
					<Button type="submit" value="Submit" className="center">Submit here</Button>
				</div>
			</form>
		</div>
	);
}
