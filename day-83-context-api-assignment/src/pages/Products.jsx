import React, { useContext } from 'react'
import { ProductDataContext } from '../context/ProductContext'
import { Link } from 'react-router-dom';

const Products = () => {

  const productData = useContext(ProductDataContext);

  let renderData = "Loading..."

  if (productData.length > 0) {
    renderData = <div className="flex flex-wrap gap-5 bg-black p-10">
      {productData.map(function(elem, idx){

        return <Link key={idx} to={`/products/${elem.id}`} className="block bg-[#222] text-center 
        w-70 p-5 rounded-xl">
          <div className="flex items-center justify-center flex-col gap-5 ">
            <img src={elem.image} className="h-60" />
            <h2 className=" text-blue-400">{elem.title}</h2>
          </div>
        </Link>
      })}
    </div>
  }

  return (
    <div>
      {renderData}
    </div>
  )
}

export default Products
