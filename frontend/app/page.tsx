"use client";
import DuaCard from "@/components/DuaCard";
import { useEffect, useState, useRef } from "react";

interface Dua {
  id: number;
  dua_id: number;
  cat_id: number;
  subcat_id: number;
  audio?: string;
  bottom_bn?: string;
  bottom_en?: string;
  clean_arabic?: string;
  dua_arabic?: string;
  dua_indopak?: string;
  dua_name_bn?: string;
  dua_name_en?: string;
  refference_bn?: string;
  refference_en?: string;
  top_bn?: string;
  top_en?: string;
  translation_bn?: string;
  translation_en?: string;
  transliteration_bn?: string;
  transliteration_en?: string;
}

interface SubCategory {
  id: number;
  cat_id: number;
  subcat_id: number;
  subcat_name_bn: string;
  subcat_name_en: string;
  no_of_dua: number;
}

export default function Home() {
  const [duas, setDuas] = useState<Dua[]>([]);
  const [subCategories, setSubCategories] = useState<SubCategory[]>([]);

  const previousSubcategoryIdRef = useRef<number | null>(0);
  useEffect(() => {
    const fetchSubCategories = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/duas`);
        const data: Dua[] = await res.json();
        setDuas(data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchSubCategories(); // Call the async function
  }, []);
  useEffect(() => {
    const fetchSubCategories = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/subcategories`);
        const data: SubCategory[] = await res.json();
        setSubCategories(data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchSubCategories(); 
  }, []);

  // console.log(duas);

  return (
    <div className="flex flex-col gap-4 h-[77vh] overflow-y-auto">
      {duas.map((dua, index) => (
        <DuaCard
          key={`${dua.dua_id}_${index}`}
          dua={dua}
          subCategories={subCategories}
          previousSubcategoryIdRef={previousSubcategoryIdRef}
        />
      ))}
    </div>
  );
}
