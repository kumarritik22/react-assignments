import React from 'react'
import Card from './components/Card'

const App = () => {

  const warriors = [
    {
      id: 1,
      name: "Abhimanyu",
      age: 18,
      url: "https://i.pinimg.com/736x/de/8e/e9/de8ee96bbb39b045bee103741322abd1.jpg",
      description: "Abhimanyu was a brave warrior from the Mahabharata and the son of Arjuna and Subhadra. He was known for his courage, determination, and exceptional fighting skills. He entered the Chakravyuha fearlessly during the Kurukshetra war and sacrificed his life while fighting bravely, becoming a symbol of valor and sacrifice."
    },
    {
      id: 2,
      name: "Arjun",
      age: 100,
      url: "https://i.pinimg.com/736x/11/4d/40/114d400d3ee376560cccfedcd47e9053.jpg",
      description: "Arjun was one of the greatest warriors in the Mahabharata and a skilled archer. He was the son of Pandu and a devoted disciple of Guru Dronacharya. Guided by Lord Krishna, Arjun fought bravely in the Kurukshetra war and stood for righteousness, courage, and discipline throughout his life."
    },
    {
      id: 3,
      name: "Karn",
      age: 130,
      url: "https://i.pinimg.com/736x/1f/21/7a/1f217a77633998f557f18aa6e0dcac99.jpg",
      description: "Karn was a legendary warrior in the Mahabharata, known for his generosity, loyalty, and unmatched archery skills. He was the son of Kunti and Surya but was raised by a charioteer's family. Despite facing hardships, Karn remained loyal to Duryodhana and fought courageously until his death."
    },
  ]


  return (
    <div>
      <Card data={warriors} />
    </div>
  )
}

export default App
