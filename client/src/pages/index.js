import Head from 'next/head'
import Image from 'next/image'
import HomeScreen from "../components/screens/HomeScreen";


export default function Home() {
  return (
      <>
        <Head>
          <title>Rafid&apos;s Solution</title>
        </Head>
        <HomeScreen/>
      </>
  )
}