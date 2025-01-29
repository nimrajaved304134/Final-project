"use client";
import React, { useState } from "react";
import { useCart } from "@/data/useCartStore";
import CartItem from "./cartItem";
import { MdClose } from "react-icons/md";
import { Button } from "../ui/button";

const CartPopup = ({ closeFunction }: { closeFunction: () => void }) => {
  const { cart } = useCart();

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg w-[400px]">
        <div className="flex justify-between items-center mb-4">
          <h2 className="font-bold text-lg">Shopping Cart</h2>
          <button onClick={closeFunction} className="hover:bg-gray-100 rounded-full p-1">
            <MdClose size={24} />
          </button>
        </div>

        {/* Cart Items */}
        <div className="mt-4 max-h-[300px] overflow-y-auto">
          {cart.length === 0 ? (
            <p className="text-center text-gray-500">Your cart is empty.</p>
          ) : (
            cart.map((item) => (
              <CartItem key={item._id} item={item} />
            ))
          )}
        </div>

        {/* Subtotal */}
        <div className="mt-4 border-t pt-4">
          <div className="flex justify-between">
            <h3 className="font-semibold">Subtotal</h3>
            <p className="font-bold">
              ${cart.reduce((acc, item) => acc + item.amount * item.price, 0).toFixed(2)}
            </p>
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-4 flex gap-4">
          <Button 
            onClick={closeFunction} 
            className="flex-1 bg-gray-300 text-black hover:bg-gray-400"
          >
            View Cart
          </Button>
          <Button 
            className="flex-1 bg-green-500 text-white hover:bg-green-600"
          >
            Checkout
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CartPopup;
