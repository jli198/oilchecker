export const getAllRecipes = async (supabase: any) => {
	const { data, error } = await supabase.from("Recipe").select("*");
	if (error) {
		throw new Error(error.message);
	}
	return data;
};

export const getRecipeById = async (supabase: any, id: string) => {
	const { data, error } = await supabase
		.from("Recipe")
		.select("*")
		.eq("id", id);
	if (error) {
		throw new Error(error.message);
	}
	return data;
};

interface Recipe {
	id: string;
	created_at: string;
	name: string;
	directions: string[];
}

export const insertRecipe = async (supabase: any, recipe: Recipe) => {
	const { data, error } = await supabase.from("Recipe").insert([recipe]);
	if (error) {
		throw new Error(error.message);
	}
	return data;
};

export const updateRecipe = async (supabase: any, recipe: Recipe) => {
	const { data, error } = await supabase
		.from("Recipe")
		.update(recipe)
		.eq("id", recipe.id);
	if (error) {
		throw new Error(error.message);
	}
	return data;
};

export const deleteRecipe = async (supabase: any, id: string) => {
	const { data, error } = await supabase.from("Recipe").delete().eq("id", id);
	if (error) {
		throw new Error(error.message);
	}
	return data;
};
