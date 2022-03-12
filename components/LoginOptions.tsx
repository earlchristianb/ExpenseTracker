/** @format */

import React, { FC, ReactText } from "react";
import { signIn } from "next-auth/react";
import facebook_icon from "../public/facebook_icon.png";
import google_icon from "../public/google_icon.png";
import github_icon from "../public/github_icon.png";
import Image from "next/image";
const LoginOptions: FC = () => {
	const handleFacebookSignin = (e: React.FormEvent) => {
		signIn("facebook");
	};
	const handleGithubSignin = (e: React.FormEvent) => {
		signIn("github");
	};
	const handleGoogleSignin = (e: React.FormEvent) => {
		signIn("google");
	};
	return (
		<div className='p-6 rounded-3xl space-y-3 shadow-xl bg-rose-300'>
			<div className=' w-5/6 h-5/6 flex flex-col justify-center items-center m-auto p-2 space-y-3 '>
				<p className='font-mono sm:text-sm md:text-lg  text-white'>
					Login with any of the following:
				</p>
				<button
					className=' border-y-2 shadow-sm border-white p-3 w-36 rounded-2xl flex items-center space-x-2'
					onClick={handleGithubSignin}>
					<div className='w-10 h-10 relative items-center'>
						<Image alt='github icon' src={github_icon} layout='fill' />
					</div>
					<p>Github</p>
				</button>
				<button
					className=' border-y-2 shadow-sm border-white p-3 w-36 rounded-2xl flex items-center   space-x-2'
					onClick={handleGoogleSignin}>
					<div className='w-10 h-10 relative'>
						<Image alt='google icon' src={google_icon} layout='fill' />
					</div>
					<p>Google</p>
				</button>
				<button
					className=' border-y-2 shadow-sm border-white p-3 w-36 rounded-2xl flex items-center   space-x-2'
					onClick={handleFacebookSignin}>
					<div className='w-10 h-10 relative'>
						<Image alt='facebook icon' src={facebook_icon} layout='fill' />
					</div>
					<p>Facebook</p>
				</button>
			</div>
		</div>
	);
};

export default LoginOptions;
