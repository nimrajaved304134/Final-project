import React from "react";
import { useCart } from "@/data/useCartStore";
import { XCircle } from "lucide-react";
import { product } from "../../../types/products"; // Import your product type

interface CartItemProps {
  product: product & { amount: number }; // Use the product type and add 'amount' to it
}

const CartItem = ({ product }: CartItemProps) => {
  const { deleteFromCart } = useCart();

  // If product is not provided, return null
  if (!product) return null;

  return (
    <div className="flex items-center w-full justify-between mt-4">
      {/* Display product image */}
      <img
        src={product.image?._ref || ""} // Check if product image exists, otherwise use an empty string
        alt={product.name}
        width={100}
        height={100}
        className="rounded-xl"
      />
      
      <div>
        {/* Display product title */}
        <p className="text-black text-base font-normal">{product.name}</p>

        {/* Display product quantity and price */}
        <div className="flex items-center gap-4 justify-start">
          <p className="text-black text-base font-light">{product.amount}</p>
          <p className="text-black text-base font-light">x</p>
          <p className="text-[#B88E2F] text-xs font-medium">
            Rs. {product.price}.00
          </p>
        </div>
      </div>

      {/* Remove item button */}
      <XCircle color="black" onClick={() => deleteFromCart(product)} />
    </div>
  );
};

export default CartItem;
