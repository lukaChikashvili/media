import Image from 'next/image'
import foto from '../public/foto.jpg'
import { Ellipsis, MessageSquareMore, Share2, ThumbsUp } from 'lucide-react'

const Post = () => {
  return (
    <div className='flex flex-col gap-4'>
         <div className='flex items-center justify-between'>
            <div className='flex items-center gap-4'>
                <Image src = {foto} alt = "" className='w-10 h-10 rounded-full' width={40} height={40} />
                <span className='font-medium'>luka chikashvili</span>
            </div>
            <Ellipsis className='cursor-pointer' />
         </div>

         <div className='flex flex-col gap-4'>
           <div className='w-full min-h-96 relative'>
              <Image src = "data:image/jpeg;base64,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" fill
              alt = "" className='object-cover rounded-md'/>
              </div>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa blanditiis laboriosam ducimus repudiandae 
                quis libero maiores nemo voluptas
                 fuga animi nisi quam tempora magni molestias est, omnis numquam reiciendis explicabo!
              </p>
         </div>

         <div className='flex items-center justify-between text-sm mt-4'>
            <div className='flex gap-8'>
                <div className='flex items-center gap-4 bg-slate-100 p-2 rounded-xl'>
                    <ThumbsUp size={20}/>
                    <span className='text-gray-300'>|</span>
                    <span className='text-gray-500'> 123
                    <span className='hidden md:inline'> likes </span>
                    </span>

                </div>

                <div className='flex items-center gap-4 bg-slate-100 p-2 rounded-xl'>
                    <MessageSquareMore size={20}/>
                    <span className='text-gray-300'>|</span>
                    <span className='text-gray-500'> 123
                    <span className='hidden md:inline'> comments </span>
                    </span>

                </div>

                
                <div className='flex items-center gap-4 bg-slate-100 p-2 rounded-xl'>
                    <Share2 size={20}/>
                    <span className='text-gray-300'>|</span>
                    <span className='text-gray-500'> 123
                    <span className='hidden md:inline'> shares </span>
                    </span>

                </div>

            </div>
            <div></div>
         </div>
    </div>
  )
}

export default Post
