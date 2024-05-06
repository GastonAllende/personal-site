import Image from 'next/image';
import Link from 'next/link';
import Layout from './components/Layout';

import { ArrowIcon } from './components/Icons';
import HireMe from './components/HireMe';

import profilePic from '../../public/images/gaston-me.png';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Gaston Allende - Frontend Developer</title>
        <meta name="description" content="Main page of my personal page" />
      </Head>

      <main className='flex items-center w-full min-h-screen'>
        <Layout className='pt-0'>
          <div className="flex items-center justify-between w-full">
            <div className='w-1/2'>
              <Image src={profilePic} alt='Frontend developer' className='w-full h-auto' />
            </div>
            <div className='w-1/2'>
              <h1 className='capitalize text-6xl font-bold'>
                Turning Vision Into Reality With Code And Design.
              </h1>
              <p className='my-4 font-medium text-base'>
                I an a passionate Frontend developer with a touch of backend and design skills. I have been working in the industry for over 10 years and I love what I do.
                Navigate the page and get to know me a little better.
              </p>
              <div className='flex items-center self-start mt-2'>
                <Link
                  className='flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold
                  hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark
                  '
                  href="/dummt.pdf" target='_blank'
                  download={true}
                >Resume
                  <ArrowIcon className='w-6 ml-1'></ArrowIcon>
                </Link>
                <Link className='ml-4 text-lg font-medium capitalize text-dark underline' href="mailto:gaston.saavedra@me.com" target='_blank'>Contact</Link>
              </div>
            </div>
          </div>
        </Layout>
        <HireMe />
      </main>
    </>
  );
}