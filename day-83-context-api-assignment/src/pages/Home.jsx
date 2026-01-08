import { useNavigate } from "react-router-dom";

const Home = () => {

  const navigate = useNavigate();

  return (
    <div className="absolute top-[50%] left-[50%] text-center -translate-x-1/2 -translate-y-1/2">
      <h1 className="text-8xl mb-10 font-medium">Home Page</h1>
      <button className="px-8 py-4 bg-amber-700 rounded-lg font-semibold text-xl active:scale-95
       cursor-pointer" onClick={()=> {
        navigate("/products");
      }}>Explore Products</button>
    </div>
  )
}

export default Home
