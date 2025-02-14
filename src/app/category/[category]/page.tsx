import client from "../../../sanity/lib/client";
import { groq } from "next-sanity";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { productdetail } from "../../../../types/products";
import { notFound } from "next/navigation";
import Whatmakesbranddifferent from "../../../components/othercomponents/whatmakesbranddifferent";
import Joinclub from "../../../components/othercomponents/joinclub";




// Query to fetch products by category
const categoryQuery = groq`*[_type == "product" && category->name == $category]{
    _id,
    name,
    price,
    description,
    image,
    slug,
    "categoryName": category->name
  }`;

// Query to fetch all categories for static params

type Props = {
  params: { category: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata({ params }: Props) {
  return {
    title: `${params.category} Products`,
    description: `Browse our collection of ${params.category}`,
  };
}

export default async function CategoryPage({ params }: Props) {
  const category = params.category;
  const products: productdetail[] = await client.fetch(categoryQuery, { category });

  if (!products.length) {
    notFound();
  }

  return (
    <main className="w-screen justify-center items-center overflow-hidden">
      <h1 className="text-3xl font-bold mb-8 text-center capitalize">
        {category}
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mx-6">
        {products.map((product) => (
          <div key={product._id} className="flex flex-col gap-4">
            <Link href={`/productdetail/${product.slug.current}`}>
              <div className="group relative aspect-square overflow-hidden rounded-lg">
                {product.image && (
                  <Image
                    src={urlFor(product.image).url()}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                )}
              </div>
              <div>
                <h2 className="font-semibold text-lg">{product.name}</h2>
                <p className="text-gray-600">${product.price}</p>
              </div>
            </Link>
                     <Button>
                        
                         Add to Cart
                      </Button>
          </div>
        ))}
      </div>
      <Whatmakesbranddifferent/>
      <Joinclub/>
    
    </main>
  );
}