import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='bg-[#12a0ec90] flex items-center justify-between min-h-15 p-5 mb-10'>
      
        <h2 className='text-2xl font-semibold'>LOUIS VUITTON</h2>
        
        <div className='flex items-center gap-10 font-medium '>
            <NavLink 
              to='/' 
              style={({isActive}) => ({
                color: isActive? "red" : "white"
              })}
              >Home
            </NavLink>

            <NavLink 
              to='/products' 
              style={({isActive}) => ({
                color: isActive? "red" : "white"
              })}
              >Products
            </NavLink>

            <NavLink
              to='/about'
              style={({isActive}) => ({
                  color: isActive? "red" : "white"
                })}
              >About Us
             </NavLink>

            <NavLink 
              to='/contact'
              style={({isActive}) => ({
                  color: isActive? "red" : "white"
                })}
              >Contact Us
            </NavLink>
            
        </div>
      
    </div>
  )
}

export default Navbar
