import Image from 'next/image'
import foto from '../public/foto.jpg'
import { CalendarDays, ChartNoAxesColumn, ImageIcon, Video } from 'lucide-react'

const AddPost = () => {
  return (
    <div className='p-4 bg-white shadow-md rounded-lg flex gap-4 justify-between text-sm'>
      <Image src = {foto} alt = "" width = {48} height={48} className='w-12 h-12 rounded-full object-cover' />

      <div className='flex-1'>
        <div className='flex gap-4'>
          <textarea placeholder='whats on your mind?' className='bg-slate-100 flex-1 p-2 outline-none'></textarea>
        </div>


        <div className='flex items-center gap-4 mt-4 text-gray-400 flex-wrap'>
          <div className='flex items-center gap-2 cursor-pointer' >
            <ImageIcon size={20} />
            Photo
          </div>

          <div className='flex items-center gap-2 cursor-pointer' >
            <Video size={20} />
            Video
          </div>

          <div className='flex items-center gap-2 cursor-pointer' >
            <ChartNoAxesColumn size={20} />
            Poll
          </div>

          <div className='flex items-center gap-2 cursor-pointer' >
            <CalendarDays size={20} />
            Events
          </div>

        </div>
      </div>
    </div>
  )
}

export default AddPost
