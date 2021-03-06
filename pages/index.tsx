/** @format */

import type { NextPage } from "next";
import Head from "next/head";
import { useSession, signOut, signIn } from "next-auth/react";
import { useRouter } from "next/router";
import React from "react";
import LoginOptions from "../components/LoginOptions";
import UserCard from "../components/UserCard";

export const deleteCookie = () => {
	document.cookie =
		"next-auth.csrf-token=; Max-Age=-999 path=/; domain=" + location.hostname;
};

const Home: NextPage = () => {
	const router = useRouter();

	const { data: session } = useSession();
	const handleSignIn = (e: React.FormEvent) => {
		e.preventDefault();
		signIn();
	};
	const handleSignOut = (e: React.FormEvent) => {
		e.preventDefault();

		deleteCookie();
		signOut();
	};
	return (
		<>
			<Head>
				<title>Create Next App</title>
				<meta name='description' content='Generated by create next app' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<nav>{session && <button onClick={handleSignOut}>Sign Out</button>}</nav>
			<main className='w-5/6 flex flex-col h-screen m-auto justify-center items-center'>
				{session ? <UserCard /> : <LoginOptions />}
			</main>
		</>
	);
};

export default Home;
