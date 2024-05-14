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
					<form>
						<div className="space-y-12">
							<div className="border-b border-gray-900/10 pb-12">
								<h2 className="text-base font-semibold leading-7 text-gray-900">Personal Information</h2>
								<p className="mt-1 text-sm leading-6 text-gray-600">Use a permanent address where you can receive mail.</p>

								<div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
									<div className="sm:col-span-3">
										<label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">First name</label>
										<div className="mt-2">
											<input type="text" name="first-name" id="first-name" autoComplete="given-name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
										</div>
									</div>

									<div className="sm:col-span-3">
										<label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">E-mail</label>
										<div className="mt-2">
											<input type="email" name="email" id="email" autoComplete="email" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
										</div>
									</div>
								</div>
							</div>

							<div className="border-b border-gray-900/10 pb-12">
								<h2 className="text-base font-semibold leading-7 text-gray-900">Message</h2>
								<p className="mt-1 text-sm leading-6 text-gray-600">This information will be displayed publicly so be careful what you share.</p>

								<div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">


									<div className="col-span-full">
										<label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">Message</label>
										<div className="mt-2">
											<textarea id="about" name="about" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea>
										</div>
										<p className="mt-3 text-sm leading-6 text-gray-600">Write a few sentences about yourself.</p>
									</div>
								</div>
							</div>



						</div>

						<div className="mt-6 flex items-center justify-end gap-x-6">
							<button type="button" className="text-sm font-semibold leading-6 text-gray-900">Cancel</button>
							<button type="submit" className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Save</button>
						</div>
					</form>






				</Layout>
			</main>

		</>
	);
};

export default Contact;