"use client";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
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
				<label id="recipeDescription">Enter a recipe here</label>
				<br />
				<Input type="text" id="recipeDescription" name="recipe" />
				<br />
				<Button type="submit" value="Submit">
					Submit here
				</Button>
			</form>
			<Calendar
				mode="single"
				selected={date}
				onSelect={setDate}
				className="rounded-md border"
			/>
		</div>
	);
}
