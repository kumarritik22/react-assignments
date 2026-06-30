import { useState } from 'react'
import Card from './components/Card'

const App = () => {

  const [warriorsData, setWarriorsData] = useState([
    {
      id: 1,
      name: "Abhimanyu",
      url: "https://i.pinimg.com/736x/de/8e/e9/de8ee96bbb39b045bee103741322abd1.jpg",
      description: "Abhimanyu was a brave warrior from the Mahabharata and the son of Arjuna and Subhadra. He was known for his courage, determination, and exceptional fighting skills. He entered the Chakravyuha fearlessly during the Kurukshetra war and sacrificed his life while fighting bravely, becoming a symbol of valor and sacrifice.",
      likeCount: 10
    },
    {
      id: 2,
      name: "Arjun",
      url:  "https://i.pinimg.com/736x/11/4d/40/114d400d3ee376560cccfedcd47e9053.jpg",
      description: "Arjun was one of the greatest warriors in the Mahabharata and a skilled archer. He was the son of Pandu and a devoted disciple of Guru Dronacharya. Guided by Lord Krishna, Arjun fought bravely in the Kurukshetra war and stood for righteousness, courage, and discipline throughout his life.",
      likeCount: 8
    },
    {
      id: 3,
      name: "Karn",
      url: "https://i.pinimg.com/736x/1f/21/7a/1f217a77633998f557f18aa6e0dcac99.jpg",
      description: "Karn was a legendary warrior in the Mahabharata, known for his generosity, loyalty, and unmatched archery skills. He was the son of Kunti and Surya but was raised by a charioteer's family. Despite facing hardships, Karn remained loyal to Duryodhana and fought courageously until his death.",
      likeCount: 9
    },
  ])

  const like = (id) => {
    setWarriorsData((prev) => prev.map((item) => item.id === id ? {...item, likeCount: item.likeCount+1} : item))
  }

  const dislike = (id) => {
    setWarriorsData((prev) => prev.map((item) => item.id === id && item.likeCount > 0 ? {...item, likeCount: item.likeCount-1} : item))
  }

  return (
    <div className='p-10'>
      <Card data={warriorsData} like={like} dislike={dislike} />
    </div>
  )
}

export default App
