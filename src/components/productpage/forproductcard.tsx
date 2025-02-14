"use client";
import React, { useEffect, useState } from "react";
import client from "../../sanity/lib/client";
import { urlFor } from "../../sanity/lib/image";
import { productdetail } from "../../../types/products";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import { useCart } from "@/data/useCartStore";
import CartPopup from "../cart/cartPopUp";
import { four } from "@/sanity/lib/queries";

const FourProductCard: React.FC = () => {
  const [products, setProducts] = useState<productdetail[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { addToCart } = useCart();

  const itemsPerPage = 8; // Adjust this number as needed

  // Calculate pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);

  // Change page
  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    // Scroll to top when page changes
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };


  useEffect(() => {
    async function fetchProducts() {
      const fetchedProducts: productdetail[] = await client.fetch(four);
      setProducts(fetchedProducts);
    }
    fetchProducts();
  }, []);

  const handleAddToCart = (product: productdetail) => {
    const amount = 1;
    addToCart(product, amount);
    setIsCartOpen(true); // Open the cart popup after adding a product
  };

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[48px] mx-[86px] mt-20">
        {currentItems.map((product) => (
          <div
            key={product._id}
            className="flex flex-col justify-center place-items-start mb-4 gap-[16px] w-[270px]"
          >
            <Link href={`/productdetail/${product.slug.current}`}>
              <div className="flex flex-col justify-center place-items-start mb-4 gap-[16px] w-[270px]">
                {product.image && (
                  <Image
                    src={urlFor(product.image).url() || ""}
                    alt={product.name}
                    width={270}
                    height={270}
                    className="w-[270px] h-[270px]"
                  />
                )}
                <div>
                  <h3 className="font-bold text-lg">{product.name}</h3>
                  <p className="text-gray-600">${product.price}</p>
                </div>
              </div>
            </Link>
            <Button
              onClick={() => handleAddToCart(product)}
              className="py-2 px-4 rounded-lg text-white bg-darkprimary hover:text-darkprimary hover:bg-whitetransition-colors"
            >
              Add to Cart
            </Button>
          </div>
        ))}
      </div>

    <div className="justify-center items-center m-4 text-center">
      <Link href={'/productpage'}>
      <Button className="h-[50px] w-[200px] text-white bg-darkprimary hover:text-darkprimary hover:bg-white" > view collection</Button>
      </Link>
    </div>

      {isCartOpen && (
        <CartPopup 
          closeFunction={() => setIsCartOpen(false)} 
        />
      )}
    </div>
  );
};

export default FourProductCard;