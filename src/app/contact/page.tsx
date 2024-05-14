import Head from 'next/head';
import React from 'react';
import Layout from '../components/Layout';

const Contact: React.FC = () => {
	return (
		<>
			<Head>
				<title>Contact</title>
				<meta name="description" content="Contact page" />
			</Head>
			<main className='flex items-center w-full flex-col justify-center'>
				<Layout className='pt-16'>
					<h1 className='mb-16 text-7xl font-bold text-center'>Contact</h1>
					<form action="/send-data-here" method="post">
						<label htmlFor="first">First name:</label>
						<input type="text" id="first" name="first" />
						<label htmlFor="email">E-mail:</label>
						<input type="text" id="email" name="email" />
						<label htmlFor="message">Message:</label>
						<textarea id="message" name="message" />
						<button type="submit">Submit</button>
					</form>
				</Layout>
			</main>

		</>
	);
};

export default Contact;