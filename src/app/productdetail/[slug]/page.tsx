

import { Metadata } from "next";
import { productdetail } from "../../../../types/products";
import  client  from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { groq } from "next-sanity";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { notFound } from "next/navigation";

// Types for generateMetadata and page props
type Props = {
  params: {
    slug: string;
  };
};

// Query to fetch a single product by slug
const query = groq`*[_type == "product" && slug.current == $slug][0]`;

// Generate metadata for SEO
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product: productdetail = await client.fetch(query, { slug: params.slug });
  
  if (!product) {
    return {
      title: 'Product Not Found',
    };
  }

  return {
    title: product.name,
    description: product.description,
  };
}

// Generate static params for all products
export async function generateStaticParams() {
  const query = groq`*[_type == "product"]{
    slug {
      current
    }
  }`;
  
  const slugs = await client.fetch(query);
  
  return slugs.map((slug: any) => ({
    slug: slug.slug.current,
  }));
}

// Page component
export default async function ProductDetailPage({ params: { slug } }: Props) {
  const product: productdetail = await client.fetch(query, { slug });

  if (!product) {
    notFound();
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Product Image */}
        <div className="relative aspect-square">
          {product.image && (
            <Image
              src={urlFor(product.image).url()}
              alt={product.name}
              fill
              className="object-cover rounded-lg"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          )}
        </div>

        {/* Product Details */}
        <div className="flex flex-col gap-6">
          <div>
            <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
            <p className="text-2xl font-semibold">${product.price}</p>
          </div>
          
          {product.description && (
            <div>
              <h2 className="text-xl font-semibold mb-2">Description</h2>
              <p className="text-gray-600">{product.description}</p>
            </div>
          )}

          {product.dimensions && (
            <div>
              <h2 className="text-xl font-semibold mb-2">Dimensions</h2>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <p className="font-medium">Height</p>
                  <p className="text-gray-600">{product.dimensions.height}</p>
                </div>
                <div>
                  <p className="font-medium">Width</p>
                  <p className="text-gray-600">{product.dimensions.width}</p>
                </div>
                <div>
                  <p className="font-medium">Depth</p>
                  <p className="text-gray-600">{product.dimensions.depth}</p>
                </div>
              </div>
            </div>
          )}

          <Button size="lg" className="w-full mt-4">
            Add to Cart
          </Button>
        </div>
      </div>
    </main>
  );
}