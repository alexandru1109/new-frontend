import Layout from "@/components/Layout";
import Products from "@/components/Products";
import data from '@/utils/data.js'

export default function Home() {
  return <Layout title="Home Page">
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
      {data?.products?.map((product) => (
        <Products product={product} key={product.slug}></Products> 
      ))}
    </div>
  </Layout>;
}
