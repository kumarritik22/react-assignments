import { useState } from 'react'

function App() {

  const [profilePic, setProfilePic] = useState('')
  const [name, setName] = useState('')
  const [occupation, setOccupation] = useState('')
  const [email, setEmail] = useState('')
  const [description, setDescription] = useState('')

  const localStg = JSON.parse(localStorage.getItem("allUsers")) || []
  
  const [allUsers, setAllUsers] = useState(localStg)



  const submitHandler = (e) => {
    e.preventDefault()

    const oldData = [...allUsers];

    oldData.push({ profilePic, name, occupation, email, description })

    setAllUsers(oldData)
    localStorage.setItem("allUsers", JSON.stringify(oldData))

    setProfilePic ('')
    setName ('')
    setOccupation ('')
    setEmail ('')
    setDescription ('')
  }

const deleteHandler = (idx)=> {
  const copyUsers = [...allUsers]
  copyUsers.splice(idx,1)
  setAllUsers(copyUsers);

  localStorage.setItem("allUsers", JSON.stringify(copyUsers))
}

  return (
    <div className='bg-slate-900 p-5 min-h-screen'>
        <div className="flex flex-col items-center gap-6 text-white bg-[]">
          <h1 className="text-4xl font-semibold text-slate-100">Registration Form</h1>
          <form className='flex flex-col bg-slate-800 border border-slate-700 rounded-xl shadow-lg transition-all duration-200 p-5' onSubmit={(e) => {
            submitHandler(e);
          } }>
            
              <input
                type="url"
                placeholder='Profile pic'
                
                required
                value={profilePic}
                onChange={(e)=> {
                  setProfilePic(e.target.value)
                }}  
              />
            
                <input type="text"
                placeholder='Enter Your Name'
                required
                value={name}
                onChange={(e)=> {
                  setName(e.target.value)
                }}  
                />
              
              <input type="text"
                placeholder='Occupation'
                required
                value={occupation}
                onChange={(e)=> {
                  setOccupation(e.target.value)
                }}  
              />
            
              <input type="email"
                placeholder='Enter Your email'
                required
                value={email}
                onChange={(e)=> {
                  setEmail(e.target.value)
                }}  
              />
              
              <input type="text"
                placeholder='Description'
                required
                value={description}
                onChange={(e)=> {
                  setDescription(e.target.value)
                }}  
              />

            <button className="mt-4 self-center bg-sky-500 hover:bg-sky-600 text-white rounded-lg shadow-lg transition-all duration-200 px-4 py-1 border border-[#334155] font-medium cursor-pointer active:scale-95">Submit</button>
          </form>
        </div>

        {allUsers.map((elem, idx) => {
          return <div key={idx} className='max-w-75 p-5 rounded-[10px] border border-[#555] mt-10 text-[aliceblue] ml-5 inline-block'>
                <div className='h-13 w-13 rounded-full overflow-hidden '>
                  <img src={elem.profilePic} className='h-full w-full object-cover' />
                </div>  
                <h1 className='mt-3.5 text-[20px] font-semibold '>{elem.name}</h1>
                <h3 className='mt-0.75 text-[15px] font-semibold '>{elem.occupation}</h3>
                <h4 className='mt-0.75 text-[12px] font-semibold '>{elem.email}</h4>
                <p className='mt-2.5 text-[10px]'>{elem.description}</p>
                <button className=' mt-4 px-4 py-2 bg-red-700 font-medium rounded-lg text-sm text-[#ffffffe8] cursor-pointer active:scale-95' onClick={() => {
                  deleteHandler(idx)
                }}>Remove</button>
            </div>
        })}
      </div>
  )
}

export default App