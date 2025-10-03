import ProductsInner from '@/components/ProductsInner';
import React from 'react'

const page = async ({ searchParams }: { searchParams: Promise<{ categoryId: any }> }) => {
  const { categoryId } = await searchParams;

  const reqUrl = categoryId ? `https://mystore.alaqmar.dev/api/nr-industrial/products?categoryId=${categoryId}` : "https://mystore.alaqmar.dev/api/nr-industrial/products"

  const products = await fetch(reqUrl, { cache: 'no-store' }).then(res => res.json());


  return (
    <div>
      <ProductsInner products={products} />
    </div>
  )
}

export default page
