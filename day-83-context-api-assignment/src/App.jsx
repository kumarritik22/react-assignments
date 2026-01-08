import { Outlet } from "react-router-dom";

const App = () => {

  return (
    <div className="bg-black min-h-screen text-white">
      <Outlet />
    </div>
  )
}

export default App
