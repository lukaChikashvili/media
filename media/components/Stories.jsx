import Image from 'next/image'
import foto from '../public/foto.jpg'

const Stories = () => {
  return (
    <div className='p-4 bg-white rounded-lg shadow-md overflow-x-scroll  text-sm scrollbar max-w-full'>
       <div className='flex gap-8 w-max'>
         <div className='flex flex-col items-center gap-2 cursor-pointer'>
            <Image src={foto}
              alt = "" width = {80} height={80} className='w-20 h-20 rounded-full ring-2'/>
              <span className='font-medium'>Thomas</span>
         </div>

         <div className='flex flex-col items-center gap-2 cursor-pointer'>
            <Image src={foto}
              alt = "" width = {80} height={80} className='w-20 h-20 rounded-full ring-2'/>
              <span className='font-medium'>Thomas</span>
         </div>


         <div className='flex flex-col items-center gap-2 cursor-pointer'>
            <Image src={foto}
              alt = "" width = {80} height={80} className='w-20 h-20 rounded-full ring-2'/>
              <span className='font-medium'>Thomas</span>
         </div>


         <div className='flex flex-col items-center gap-2 cursor-pointer'>
            <Image src={foto}
              alt = "" width = {80} height={80} className='w-20 h-20 rounded-full ring-2'/>
              <span className='font-medium'>Thomas</span>
         </div>

         <div className='flex flex-col items-center gap-2 cursor-pointer'>
            <Image src={foto}
              alt = "" width = {80} height={80} className='w-20 h-20 rounded-full ring-2'/>
              <span className='font-medium'>Thomas</span>
         </div>


         
         <div className='flex flex-col items-center gap-2 cursor-pointer'>
            <Image src={foto}
              alt = "" width = {80} height={80} className='w-20 h-20 rounded-full ring-2'/>
              <span className='font-medium'>Thomas</span>
         </div>


         
         <div className='flex flex-col items-center gap-2 cursor-pointer'>
            <Image src={foto}
              alt = "" width = {80} height={80} className='w-20 h-20 rounded-full ring-2'/>
              <span className='font-medium'>Thomas</span>
         </div>


         
         <div className='flex flex-col items-center gap-2 cursor-pointer'>
            <Image src={foto}
              alt = "" width = {80} height={80} className='w-20 h-20 rounded-full ring-2'/>
              <span className='font-medium'>Thomas</span>
         </div>
       </div>
    </div>
  )
}

export default Stories
