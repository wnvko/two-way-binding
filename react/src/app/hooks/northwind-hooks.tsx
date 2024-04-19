import { useEffect, useState } from 'react';
import { getCategories } from '../services/northwind';
import { CategoriesType } from '../models/Northwind/categories-type';

export const useGetCategories = () => {
	const [categories, setCategories] = useState<CategoriesType[]>([]);

	function requestCategories() {
		let ignore = false;
		getCategories()
			.then((data) => {
				if (!ignore) {
					setCategories(data);
				}
			})
		return () => {
			ignore = true;
		}
	}

	useEffect(() => {
		requestCategories();
	}, []);

	return { requestNorthwindCategories: requestCategories, northwindCategories: categories};
}
