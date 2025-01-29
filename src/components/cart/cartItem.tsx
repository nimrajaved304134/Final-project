import React from "react";
import { useCart } from "@/data/useCartStore";
import { Trash2 } from "lucide-react";
import { urlFor } from "@/sanity/lib/image";
import { product } from "../../../types/products";

interface CartItemProps {
  item: product & { amount: number };
}

const CartItem = ({ item }: CartItemProps) => {
  const { deleteFromCart } = useCart();

  // Log the full item to inspect the image structure
  console.log('Full item:', item);
  
  // Try different ways of generating the image URL
  const imageUrl = item.image 
    ? urlFor(item.image).width(100).height(100).url()
    : "/api/placeholder/100/100";

  const handleDelete = () => {
    const productToDelete: product & { amount: number } = {
      _id: item._id,
      name: item.name,
      price: item.price,
      _type: "product",
      image: item.image,
      amount: item.amount,
      description: item.description
    };
    deleteFromCart(productToDelete);
  };

  return (
    <div className="flex items-center justify-between p-4 border-b border-gray-200">
      <div className="flex items-center space-x-4">
        <div className="w-16 h-16 relative overflow-hidden rounded-md bg-gray-100">
          {item.image ? (
            <img
              src={imageUrl}
              alt={item.name}
              className="object-cover w-full h-full"
              onError={(e) => {
                console.log('Image load error');
                const target = e.target as HTMLImageElement;
                target.src = "/api/placeholder/100/100";
              }}
            />
          ) : (
            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
              <span className="text-gray-400 text-sm">No image</span>
            </div>
          )}
        </div>
        
        <div className="flex flex-col">
          <h3 className="font-medium text-gray-900">{item.name}</h3>
          <p className="text-gray-500">Price: ${item.price}</p>
          <p className="text-gray-500">Quantity: {item.amount}</p>
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <p className="font-medium text-gray-900">
          Total: ${(item.price * item.amount).toFixed(2)}
        </p>
        <button
          onClick={handleDelete}
          className="p-2 text-red-500 hover:text-red-700 transition-colors"
          aria-label="Remove item"
        >
          <Trash2 className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default CartItem;