"use client";
import { useEffect, useState } from "react";

interface Category {
  cat_icon: string;
  cat_id: number;
  cat_name_bn: string;
  cat_name_en: string;
  id: number;
  no_of_dua: number;
  no_of_subcat: number;
}
export default function Home() {
  const [categories, setCategories] = useState<Category[]>();
  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/categories`)
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  console.log(categories);

  return (
    <div>
      <h1>Categories</h1>
      <ul>
        {categories?.map((category) => (
          <li key={category.id}>
            {category.cat_name_en} ({category.no_of_dua})
          </li>
        ))}
      </ul>
    </div>
  );
}
