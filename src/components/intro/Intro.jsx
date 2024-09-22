import { Image } from 'cloudinary-react'
import React from 'react'

const Intro = () => {
  return (
    <div className='relative h-[316px] flex items-center justify-center flex-col  ' >
        <Image className='absolute top-0 left-0 h-[316px] ' cloudName='dlifiojbx' publicId="https://res.cloudinary.com/dlifiojbx/image/upload/v1718948706/our%20products/Rectangle_1_v3bb0t.png" loading='lazy' />
        <div className="flex items-center justify-center flex-col gap-2 ">
            <span>One</span>
            <span>two</span>
            <span>Three</span>
        </div>
    </div>
  )
}

export default Intro