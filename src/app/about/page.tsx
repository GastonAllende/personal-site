import Head from 'next/head';
import Image from 'next/image';
import React from 'react';
import Layout from '../components/Layout';
import profilePic from "../../../public/images/gaston-me.png";
import Experience from '../components/Experience';
import Education from '../components/Education';

const About: React.FC = () => {
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
							<p className='my-3'>
								Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur accusantium aut provident at facilis, architecto, voluptatibus labore dolorum ullam illo soluta, dolor magnam aliquam. Aliquam aut impedit corrupti dolore eius?
							</p>
							<p className='my-3'>
								Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur accusantium aut provident at facilis, architecto, voluptatibus labore dolorum ullam illo soluta, dolor magnam aliquam. Aliquam aut impedit corrupti dolore eius?
								Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur accusantium aut provident at facilis, architecto, voluptatibus labore dolorum ullam illo soluta, dolor magnam aliquam. Aliquam aut impedit corrupti dolore eius?
								Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur accusantium aut provident at facilis, architecto, voluptatibus labore dolorum ullam illo soluta, dolor magnam aliquam. Aliquam aut impedit corrupti dolore eius?
							</p>
						</div>
						<div className='col-span-4 flex flex-col items-start justify-start'>
							<Image src={profilePic} width={500}
								height={500} alt='Frontend developer' className='w-full h-auto' />
						</div>
					</div>
					<Experience />
					<Education />
				</Layout>
			</main>
		</>
	);
};

export default About;