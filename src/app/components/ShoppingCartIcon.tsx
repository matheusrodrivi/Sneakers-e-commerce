"use client"

import { ShoppingCart } from "lucide-react"
import Link from "next/link"

const ShoppingCartIcon = () => {
	return (
		<Link href="/cart" className="relative"> 
            <ShoppingCart className="w-4 h-4 text-gray-600"/>
            <span className="absolute -top-3 -right-3 bg-[#5886E8] text-gray-800 rounded-full w-4 h-4 flex items-center justify-center text-xs font-medium">0</span>
        </Link>
	)
}

export default ShoppingCartIcon