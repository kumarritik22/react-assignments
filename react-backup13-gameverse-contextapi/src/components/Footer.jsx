import React from 'react';
import { Copyright } from 'lucide-react';
import { RiGamepadFill, RiGithubFill } from "react-icons/ri";

const Footer = () => {
  return (
      <div className='footer mt-15 border-t border-zinc-700'>
        <div className='mt-10 px-5 flex items-center justify-between mb-5'>
          <div className='logo flex items-center gap-2'>
              <RiGamepadFill size={23} className='text-[#1381f0]' />
              <h4 className='font-bold text-md text-white'>GameVerse</h4>
          </div>
          <div className='copyright flex gap-1 items-center'>
            <Copyright size={12} className='font-medium text-[#9aaac0]' />
            <h6 className='text-xs font-medium text-[#9aaac0]'>2026 GameVerse Inc. Engineered for enthusiasts worldwide.</h6>
          </div>
          <div className='flex items-center gap-1'>
            <RiGithubFill size={20} className='text-[#9aaac0]' />
            <p className='text-[#9aaac0] text-sm font-medium'>GitHub</p>
          </div>
        </div>
      </div>
    )
}

export default Footer
