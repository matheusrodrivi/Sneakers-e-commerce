// JSON

import { ProductsType } from "../types";
import Categories from "./Categories";
import ProductCard from "./ProductCard";
import Link from "next/link";

const products: ProductsType = [
  {
    id: 1,
    name: "Jordan",
    shortDescription: "lorem lorem lorem lorem lorem lorem lorem lorem",
    description:
      "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem",
    price: 39.9,
    sizes: ["38", "39", "40", "42"],
    colors: ["gray", "purple", "green"],
    images: {
      gray: "/products/6g.png",
      purple: "/products/6w.png",
    },
  },
  {
    id: 2,
    name: "Jordan",
    shortDescription: "lorem lorem lorem lorem lorem lorem lorem lorem",
    description:
      "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem",
    price: 39.9,
    sizes: ["38", "39", "40", "42"],
    colors: ["gray", "purple", "green"],
    images: {
      gray: "/products/6g.png",
      purple: "/products/6w.png",
    },
  },
  {
    id: 3,
    name: "Jordan",
    shortDescription: "lorem lorem lorem lorem lorem lorem lorem lorem",
    description:
      "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem",
    price: 39.9,
    sizes: ["38", "39", "40", "42"],
    colors: ["gray", "purple", "green"],
    images: {
      gray: "/products/6g.png",
      purple: "/products/6w.png",
    },
  },
  {
    id: 4,
    name: "Jordan",
    shortDescription: "lorem lorem lorem lorem lorem lorem lorem lorem",
    description:
      "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem",
    price: 39.9,
    sizes: ["38", "39", "40", "42"],
    colors: ["gray", "purple", "green"],
    images: {
      gray: "/products/6g.png",
      purple: "/products/6w.png",
    },
  },
  {
    id: 5,
    name: "Jordan",
    shortDescription: "lorem lorem lorem lorem lorem lorem lorem lorem",
    description:
      "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem",
    price: 39.9,
    sizes: ["38", "39", "40", "42"],
    colors: ["gray", "purple", "green"],
    images: {
      gray: "/products/6g.png",
      purple: "/products/6w.png",
    },
  },
  {
    id: 6,
    name: "Jordan",
    shortDescription: "lorem lorem lorem lorem lorem lorem lorem lorem",
    description:
      "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem",
    price: 39.9,
    sizes: ["38", "39", "40", "42"],
    colors: ["gray", "purple", "green"],
    images: {
      gray: "/products/6g.png",
      purple: "/products/6w.png",
    },
  },
];

const ProductList = ({ category }: { category: string }) => {
  return (
    <div className="w-full">
      <Categories />
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-12">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <Link
        href={category ? `/products/?category=${category}` : "/products"}
        className="flex justify-end mt-4 underline text-sm text-gray-500"
      >
        View all products
      </Link>
    </div>
  );
};

export default ProductList;
