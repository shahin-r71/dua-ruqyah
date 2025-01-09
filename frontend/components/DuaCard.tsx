// import { BookOpen, Copy, Bookmark, Share2, Info } from "lucide-react";
"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";

// import { Button } from "@/components/ui/button";
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
interface Props {
  dua: Dua;
  previousSubcategoryIdRef: React.RefObject<number | null>;
  subCategories: SubCategory[];
}
export default function DuaCard({
  dua,
  previousSubcategoryIdRef,
  subCategories,
}: Props) {
  const [isShowSectionHeader, setShowSectionHeader] = useState<boolean>(false);
  useEffect(() => {
    if (previousSubcategoryIdRef.current === 0) {
      setShowSectionHeader(true);
      previousSubcategoryIdRef.current = dua.subcat_id;
    } else if (dua.subcat_id !== previousSubcategoryIdRef.current) {
      setShowSectionHeader(true);
      previousSubcategoryIdRef.current = dua.subcat_id;
    } else {
      setShowSectionHeader(false);
    }
  }, []);

  return (
    <div className="p-3 max-w-4xl">
      {isShowSectionHeader && (
        <div
          className="mb-6 bg-white rounded-lg shadow-sm border p-4"
          id={`dua-${dua.subcat_id}`}
          // subCategories.find(
          //   (subCategory) => subCategory.subcat_id === dua.subcat_id
          // )?.subcat_id.toString()
          // }
        >
          <h1 className="text-lg  mb-2">
            <span className="text-emerald-600">Section:</span>{" "}
            {
              subCategories.find(
                (subCategory) => subCategory.subcat_id === dua.subcat_id
              )?.subcat_name_en
            }
          </h1>
        </div>
      )}
      {/* Dua Card */}
      <div className="bg-white rounded-lg shadow-sm border p-6 mb-6">
        <div className="flex gap-3 mb-4 text-primary items-center">
          <div className="w-10 h-10 rounded-full flex items-center justify-center text-emerald-600">
            <Image src="/allah1.svg" alt="icon" width={40} height={40} />
          </div>
          <h2 className="text-lg font-medium">{dua.dua_name_en}</h2>
        </div>

        <div className="space-y-4 text-gray-800 text-xl">
          <p className=" leading-relaxed ">{dua.top_en}</p>
          {dua.dua_arabic && (
            <p className="eading-relaxed text-3xl py-3" dir="rtl">
              {dua.dua_arabic}
            </p>
          )}
          {dua.transliteration_en && (
            <p>
              <span className="font-semibold">Transliteration:</span>{" "}
              {dua.transliteration_en}
            </p>
          )}
          {dua.translation_en && (
            <p >
              <span className="font-semibold">Translation:</span>{" "}
              {dua.translation_en}
            </p>
          )}
          <div className="pt-4 border-t">
            <h3 className="text-primary font-medium mb-2">Reference:</h3>
            <p>{dua.refference_en}</p>
          </div>

          <div className="flex gap-2 pt-4 justify-between">
            <div className="rounded-full cursor-pointer">
              <Image src="/audio1.svg" alt="icon" width={50} height={50} />
            </div>
            <div className="flex gap-2">
              <Button className="bg-white" size="sm">
                <Image src="/copy.svg" alt="icon" width={20} height={20} />
              </Button>
              <Button className="bg-white" size="sm">
                <Image src="/bookmark1.svg" alt="icon" width={20} height={20} />
              </Button>
              <Button className="bg-white" size="sm">
                <Image src="/Frame.svg" alt="icon" width={20} height={20} />
              </Button>
              <Button className="bg-white" size="sm">
                <Image src="/share1.svg" alt="icon" width={20} height={20} />
              </Button>
              <Button className="bg-white" size="sm">
                <Image src="/report1.svg" alt="icon" width={20} height={20} />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
