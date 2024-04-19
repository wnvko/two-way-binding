import { CategoriesType } from '../models/Northwind/categories-type';

export async function getCategories(): Promise<CategoriesType[]> {
	const response = await fetch('../../static-data/northwind-categories-type.json');
	if (!response.ok) {
		return Promise.resolve([]);
	}
	return response.json();
}
