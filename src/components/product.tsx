import axios from 'axios'
import { useEffect, useState } from 'react'
import ProductCard from './ProductCard'
import Loading from './Loading'

interface proType {
  id: number,
  title: string,
  price: number,
  description: string,
  category: string,
  image: string,
  rating: {
    rate: number,
    count: number
  }
}

export default function Product() {
  const [products, setProducts] = useState<proType[] | null>(null)
  const [loading , setLoading] = useState<boolean>(false)

  function run() {
    setLoading(true)
    axios.get<proType[]>('https://fakestoreapi.com/products')
      .then((res) => {
        setLoading(false)
        setProducts(res.data)
      })
      .catch((err) => {
        console.log(err, "there is problem");
      })
  }

  
  useEffect(() => {
    run()
  }, [])
  
  if (loading) return <Loading/>
  
  return (
    <>
    <div className="grid grid-cols-2 gap-4 p-4 box-border md:grid-cols-3">
      {products?.map((product: proType) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
</>
  )
}