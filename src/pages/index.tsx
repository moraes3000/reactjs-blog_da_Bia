import Head from 'next/head'
import Conteudo from '../components/Conteudo'
import Header from '../components/Header'



export default function Home() {
  return (
    <div className=''>
      <Head>
        <title>Blog da Bia</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className=''>
        <Header />
        <Conteudo />


      </main>


    </div>
  )
}
