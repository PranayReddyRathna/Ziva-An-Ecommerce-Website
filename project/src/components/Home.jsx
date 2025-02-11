import { useEffect, useState } from "react";
import axios from "axios";
import "./Home.css"

const Home = () => {
  const [products,setProducts] =useState([])
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios("https://api.escuelajs.co/api/v1/products");
      setProducts(res.data);
      console.log(res.data)
    }
    fetchData();
  },[])
  return (
    <div>
      {products && products.map((item) => {
        return <ul className="products" key={item.id}>
          <li><img src={item.images[0]} alt={item.title} /></li>  
      </ul>
      })}
    </div>
  )
}

export default Home
