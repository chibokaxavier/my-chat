import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Chats from "./chats";
import Sidebar from "./components/sidebar";
import OneChat from "./chats/[id]";
import { getProviders, getSession, useSession } from 'next-auth/react'
import { GetServerSideProps } from "next";
import Login from "./login";
import { useRouter } from 'next/router'
import { useEffect, useContext } from 'react';
import { ServiceContext } from '../context/service.provider'


const Home = ({ providers }) => {

  const { data: session } = useSession()
  const router = useRouter()
  const serviceContext = useContext(ServiceContext)
  if (!session) router.push('/login')
  useEffect(() => {
    // save or get user from firebase
    (async () => {
      await serviceContext.authService.saveUser(session.user)
    })();

  })
  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>MyChat</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
      </div>
      <div className="">
        <Sidebar />
      </div>
    </>
  );
};
export default Home;

export async function getServerSideProps(context) {
  const providers = await getProviders()
  const session = await getSession(context)
  if (!session) {
    return {
      redirect: {
        permanent: false,
        destination: "/login"
      }
    }
  }
  return {
    props: {
      providers,
      session,
    },
  }
}