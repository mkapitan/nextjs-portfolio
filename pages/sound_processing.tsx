import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import projectImage from '../public/3.jpg'

const SoundProcessing: NextPage = () => {
  return (
    <div>
      <h1 className='text-xl text-indigo-600 mb-4 font-bold'>Sound Processing</h1>
      <Image src={projectImage} />
      <div className='mt-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum quidem officia ratione fugit modi itaque voluptatum, earum obcaecati nobis labore cupiditate iste dolorum nostrum sequi minus dicta error perferendis animi.</div>
      <div className='mt-6'>
        <Link href='/'>
          <a className="font-bold underline hover:text-indigo-600">Back</a>
        </Link></div>
      </div>
  )
}

export default SoundProcessing
