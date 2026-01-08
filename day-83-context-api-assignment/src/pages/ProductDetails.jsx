import { useContext } from "react"
import { ProductDataContext } from "../context/ProductContext"
import { useParams } from "react-router-dom";


const ProductDetails = () => {

  const productData =  useContext(ProductDataContext);

  const { productId } = useParams()

  let selectedProduct = "";
  if (productData.length > 0) {
    selectedProduct = productData.find((elem)=>elem.id == productId)
  }

  return (
    <div className="absolute top-[50%] left-[50%] text-center -translate-x-1/2 -translate-y-1/2 flex
     items-center justify-center flex-col" >
      <img src={selectedProduct.image} className="h-80 mb-2" />
      <h2 className=" text-blue-400 mb-2">{selectedProduct.title}</h2>
      <h5 className="mb-5">${selectedProduct.price}</h5>

      <div className="flex gap-10">
        <button className="px-4 py-2 bg-amber-500 rounded-lg font-medium text-lg
         active:scale-95 cursor-pointer">Add to Cart</button>
        <button className="px-6 py-3 text-lg bg-emerald-700 rounded-lg font-medium 
        active:scale-95 cursor-pointer">Buy Now</button>
      </div>
    </div>
  )
}

export default ProductDetails
