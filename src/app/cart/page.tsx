"use client"

import { ArrowRight } from "lucide-react"
import { useSearchParams } from "next/navigation"
import { useRouter } from "next/navigation"

const steps = [
    {
        id:1,
        title:"Shopping Cart",
    },
    {   
        id:2,
        title:"Shipping Address",
    },
    {
        id:3,
        title:"Payment Method"
    }
]

const cartItems = [
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
    quantity:1,
    selectedSize:"m",
    selectedColor:"gray"
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
    quantity:1,
    selectedSize:"m",
    selectedColor:"gray"
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
    quantity:1,
    selectedSize:"m",
    selectedColor:"gray"
  },
]

const CartPage = () => {

    const searchParams = useSearchParams()
    const router = useRouter()
    const activeStep = parseInt(searchParams.get("step") || "1")
    
	return (
		<div className="flex flex-col gap-8 items-center justify-center mt-12"> 
            <h1 className="text-2xl font-medium"> Your Shopping Cart </h1>
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
                {steps.map(step=>(
                    <div className={`flex items-center gap-2 border-b-2 pb-4 ${step.id===activeStep ? "border-gray-800" : "border-gray-200"}`} key={step.id}>
                        <div className={`w-6 h-6 rounded-full text-white p-4 flex items-center justify-center ${step.id===activeStep ? "bg-gray-800" : "bg-gray-400"}`}>
                            {step.id}
                        </div>
                        <p className={`text-sm font-medium ${step.id === activeStep ? "text-gray-800" : "text-gray-400"}`}> {step.title} </p>
                    </div>
                ))}
            </div>
            <div className="w-full flex flex-col lg:flex-row gap-16">
                <div className="w-full lg:w-7/12 shadow-lg border-1 border-gray-100 p-8 rounded-lg flex flex-col gap-8">
                    1
                </div>

                <div className="w-full lg:w-5/12 shadow-lg border-1 border-gray-100 p-8 rounded-lg flex flex-col gap-8">
                    <h2 className="font-semibold"> Cart Details </h2>
                    <div className="flex flex-col gap-4">
                        <div className="flex justify-between text-sm">
                            <p className="text-gray-500"> Subtotal </p>
                            <p className="font-medium"> ${cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)} </p>
                        </div>
                        <div className="flex justify-between text-sm">
                            <p className="text-gray-500"> Discount </p>
                            <p className="font-medium"> $10 </p>
                        </div>
                        <div className="flex justify-between text-sm">
                            <p className="text-gray-500"> Shipping Fee </p>
                            <p className="font-medium"> $10 </p>
                        </div>
                        <hr className="border-gray-200"/>

                        <div className="flex justify-between">
                            <p className="text-gray-800 font-semibold"> Total </p>
                            <p className="font-medium"> ${cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)} </p>
                        </div>
                        {activeStep===1 && (
                            <button onClick={() => router.push("/cart?step=2", { scroll: false })} className="w-full bg-gray-800 hover:bg-gray-900 transition-all duration-300 text-white p-2 rounded-lg cursor-pointer flex items-center justify-center gap-2"> 
                                Continue 
                                <ArrowRight className="w-3 h-3"/>
                            </button>
                        )
                        }
                    </div>
                </div>
            </div>
        </div>
	)
}

export default CartPage