import type { NextPage } from "next";
import Head from "next/head";
import Navbar from "../../components/Navbar";
// import useStyles from "./styles";
import Image from "next/image";

const About: NextPage = () => {
  // const classes = useStyles();
  return (
    <div>
      <Head>
        <title>About</title>
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
  );
};

export default About;