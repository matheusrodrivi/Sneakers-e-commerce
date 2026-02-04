"use client";

import { ShoppingBasket } from "lucide-react";
import { useSearchParams } from "next/navigation";

const catogories = [
  {
    name: "All",
    icon: <ShoppingBasket className="w-4 h-4" />,
    slug: "all",
  },
  {
    name: "Nike",
    slug: "nike",
  },
  {
    name: "Adidas",
    slug: "nike",
  },
  {
    name: "Versace",
    slug: "nike",
  },
  {
    name: "Armani",
    slug: "nike",
  },
  {
    name: "LV",
    slug: "nike",
  },
];

const Categories = () => {
  const searchParams = useSearchParams();
  const selectedCategory = searchParams.get("category");

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-2 bg:gray-100 p-2 rounded-lg mb-4 text-sm">
      {catogories.map((category) => (
        <div
          className={`flex items-center justify-center gap-2 cursor-pointer px-2 py-1 rounded-md ${category.slug === selectedCategory ? "bg-white" : "text-gray-500"}`}
          key={category.name}
        >
          {category.icon}
          {category.name}
        </div>
      ))}
    </div>
  );
};

export default Categories;
