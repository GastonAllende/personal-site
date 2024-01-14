import Image from 'next/image'
import Link from 'next/link';
import Layout from './components/Layout';

import profilePic from '../../public/images/developer-pic-1.png'

export default function Home() {
  return (
      <main className='flex items-center w-full min-h-screen'>
        <Layout className='pt-0'>
          <div className="flex items-center justify-between w-full">
            <div className='w-1/2'>
              <Image src={profilePic} alt='Frontend developer' className='w-full h-auto' />
            </div>
            <div className='w-1/2'>
              <h1 className='capitalize text-5xl font-bold'>
                Turning Vision Into Reality With Code And Design. 
              </h1>
              <p className='my-4 font-medium text-base'>
              As a skilled full-stack developer, I am dedicated to turning ideas into innovative web applications. 
Explore my latest projects and articles, showcasing my expertise in React.js and web development.
              </p>
              <div>
                <Link href="/dummt.pdf" target='_blank'>Resume</Link>
                <Link href="/dummt.pdf" target='_blank'>Contact</Link>
              </div>
            </div>
          </div>
        </Layout>
      </main>
  )
}