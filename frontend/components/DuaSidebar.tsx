"use client"
import React from 'react'
import { useEffect, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from './ui/input';
import Image from 'next/image';
import Link from 'next/link';


interface Category {
  cat_icon: string;
  cat_id: number;
  cat_name_bn: string;
  cat_name_en: string;
  id: number;
  no_of_dua: number;
  no_of_subcat: number;
}
interface SubCategory {
  id: number;
  cat_id: number;
  subcat_id: number;
  subcat_name_bn: string;
  subcat_name_en: string;
  no_of_dua: number;
}

const DuaSidebar = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [subCategories, setSubCategories] = useState<SubCategory[]>([]);
    useEffect(() => {
      const fetchCategories = async () => {
        try {
          const res = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/api/categories`
          );
          const data: Category[] = await res.json();
          setCategories(data);
        } catch (error) {
          console.error("Error fetching categories:", error);
        }
      };
  
      fetchCategories(); // Call the async function
    }, []);
    useEffect(() => {
      const fetchSubCategories = async () => {
        try {
          const res = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/api/subcategories`
          );
          const data: SubCategory[] = await res.json();
          setSubCategories(data);
        } catch (error) {
          console.error("Error fetching categories:", error);
        }
      };
  
      fetchSubCategories(); // Call the async function
    }, []);
    // console.log(categories);
    // console.log(subCategories);
  return (
    <div className="w-[310px] h-[680px] bg-white overflow-y-auto rounded-3xl text-left ">
      <div className="sticky top-0 bg-white z-20">
        <h2 className="text-lg font-semibold text-center bg-primary text-white py-3 rounded-md mb-4">
          Categories
        </h2>
        <div className="relative mx-2 ">
          <Image
            src="/search.svg"
            alt="search"
            width={18}
            height={18}
            className="absolute left-2 top-3.5 h-4 w-4 text-muted-foreground"
          />
          <Input
            placeholder="Search Categories"
            // value={search}
            // onChange={(e) => setSearch(e.target.value)}
            className="pl-8 py-5"
          />
        </div>
      </div>
      {categories.map((category) => (
        <Accordion
          type="single"
          collapsible
          className="mx-2 p-1"
          key={category.id}
        >
          <AccordionItem value={`item-${category.id}`}>
            <AccordionTrigger className="text-left rounded-md flex hover:bg-text_bg justify-between items-center gap-1 p-3">
              <div className="flex gap-3 items-center">
                <div className="bg-gray-300 rounded-md w-10 h-10 flex items-center justify-center">
                  <Image src="/dua.png" alt="icon" width={30} height={30} />
                </div>
                <div>
                  <p>{category.cat_name_en}</p>
                  <p className="text-xs text-gray-700">
                    Subcategory: {category.no_of_subcat}
                  </p>
                </div>
              </div>
              <div>
                <p>{category.no_of_dua}</p>
                <p className="text-xs text-gray-700">duas</p>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="flex justify-between items-start flex-col ml-4 ">
                {subCategories
                  .filter(
                    (subCategory) => subCategory.cat_id === category.cat_id
                  )
                  .map((subCategory) => (
                    <Link
                      href={`/#dua-${subCategory.subcat_id}`}
                      key={subCategory.id}
                    >
                      <div
                        key={subCategory.id}
                        className="cursor-pointer py-3 flex items-center justify-center border-l-2 border-dotted border-primary"
                      >
                        <div className="w-2 h-2 rounded-full bg-primary -ml-1"></div>
                        <p className="text-gray-600 pl-2">
                          {subCategory.subcat_name_en}
                        </p>
                      </div>
                    </Link>
                  ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      ))}
    </div>
  );
}

export default DuaSidebar