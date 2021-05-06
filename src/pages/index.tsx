import Head from 'next/head'
import Header from '../components/Header'



export default function Home() {
  return (
    <div className=''>
      <Head>
        <title>Blog da Bia</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className=''>
        <Header/>

        <h1>Bia Sabia que ti amo </h1>
      </main>


    </div>
  )
}
