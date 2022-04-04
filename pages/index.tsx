import type { NextPage } from "next"
import Head from "next/head"
import Navbar from "../components/Navbar"
import Image from "next/image"
import React, { useEffect } from "react"

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>RPS</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Image
        alt="Background Picture"
        src="/fingers.png"
        layout="responsive"
        width={700}
        height={350}
      />
    </div>
  )
}

export default Home
