import Head from "next/head";
import Header from "../components/Header";
import Feed from "../components/Feed";
import Sidebar from "../components/Sidebar";
import SidebarRight from "../components/SidebarRight";
import NewSidebarLeft from "../components/NewSidebar/NewSidebarLeft";
import BottomNav from "../components/BottomNav";
import Guest from "../components/Guest";
import { useState } from "react";
import { getSession, useSession, signIn, signOut } from "next-auth/react";
import Header_new from "../components/ui-v2/Header_new";

export default function Home() {
  const { data: session } = useSession();

  return (
    <div>
      <Head>
        <title>gems</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {session ? User({ session }) : Guest()}
    </div>
  );
}

function User({ session }) {
  return (
    <div>
      {/* <Header /> */}
      <Header_new/>
      <main className="flex ">
        <Sidebar />
        {/* <NewSidebarLeft />  */}
        <Feed />
        {/* <Dropdown /> */}
        <SidebarRight />
      </main>
      <BottomNav />
    </div>
  );
}

export async function getServerSideProps({ req }) {
  const session = await getSession({ req });
  if (!session) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }
  return {
    props: { session },
  };
}
