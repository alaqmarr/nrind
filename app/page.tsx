import HomeInner from '@/components/HomeInner';
import React from 'react'

const page = async () => {
  const products = await fetch("https://mystore.alaqmar.dev/api/nr-industrial/products", { cache: 'no-store' }).then(res => res.json());
  return (
    <div>
      <HomeInner products={products} />
    </div>
  )
}

export default page
