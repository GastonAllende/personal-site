import Head from 'next/head';
import React from 'react';
import Layout from '../components/Layout';

const About : React.FC = () => {
		return (
				<>
					<Head>
						<title>About</title>
						<meta name="description" content="About me page" />
					</Head>
					<main className='flex items-center w-full flex-col justify-center'>
						<Layout className='pt-16'>
							<h1 className='mb-16 text-7xl font-bold text-center'>About me and more</h1>
							<div className='grid w-full grid-cols-8 gap-16'>
								<div className='col-span-4 flex flex-col items-start justify-start'>
									<h2 className='mb-2 text-lg font-bold uppercase text-dark/75'>Biography</h2>
								</div>
								<div className='col-span-4 flex flex-col items-start justify-start'>
									<h2 className='mb-2 text-lg font-bold uppercase text-dark/75'>Image</h2>
								</div>
							</div>
						</Layout>
					</main>
				</>
		)
}

export default About;