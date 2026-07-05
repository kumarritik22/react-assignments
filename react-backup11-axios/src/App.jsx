import axios from 'axios'
import { useEffect, useState } from 'react';

const App = () => {

  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")
  const [page, setPage] = useState(1)

  const getData = async () => {
    try {
      const response = await axios.get("https://picsum.photos/v2/list", {
        params: {
          page: page,
          limit: 10
        }
      });
      setData(response.data);
    } catch (error) {
      console.log(error)
      setError("Failed to fetch data");
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getData()
  }, [page])

  if (loading) {
    return <h2 className='text-5xl font-semibold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>Loading...</h2>
  }

  if (error) {
    return <h3 className='text-5xl font-semibold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>{error}</h3>
  }
  
  return (
    <div className='p-15 flex items-center justify-center flex-col'>
      <div className='flex items-center gap-10 flex-wrap'>
        {data.map((item) => {
          return <div key={item.id} className='card h-80 w-80 rounded-md flex items-center flex-col gap-6'>
                    <img src={item.download_url} className='h-60 w-full object-cover rounded-md'/>
                    <h1 className='text-2xl font-semibold'>{item.author}</h1>
                  </div>
        })}
      </div>
      {/* <button onClick={getData} className='bg-blue-300 py-8 px-16 rounded-md font-semibold text-4xl active:scale-95 cursor-pointer mt-15 transition-transform duration-200'>Get Data</button> */}
      <div className='mt-15 flex gap-20 items-center'>
        <button 
          onClick={() => {
            if (page > 1) {
              setPage(page - 1)
            }
          }} 
          className='bg-amber-600 py-4 px-8 text-3xl font-semibold rounded-md active:scale-95 cursor-pointer transition-transform duration-200'>
          Prev
        </button>
        <p className='text-3xl font-semibold'>Page - {page}</p>
        <button 
          onClick={() => setPage(page + 1)} 
          className='bg-amber-600 py-4 px-8 text-3xl font-semibold rounded-md active:scale-95 cursor-pointer transition-transform duration-200'>
          Next
        </button>
      </div>
    </div>
  )
}

export default App
