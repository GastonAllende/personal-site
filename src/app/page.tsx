import Image from 'next/image'
import Layout from './components/Layout';

import profilePic from '../../public/images/developer-pic-1.png'

export default function Home() {
  return (
      <main>
        <Layout className='pt-0'>
          <div className="flex items-center justify-between w-full">
            <div>
              <Image src={profilePic} alt='Frontend developer' className='w-full h-auto' />
            </div>
          </div>
        </Layout>
      </main>
  )
}