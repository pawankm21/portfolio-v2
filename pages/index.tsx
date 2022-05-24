import type { NextPage } from 'next'
import Head from 'next/head'
import Navbar from '../components/navbar';
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className="bg-red-500" >
      <Head>
        <title></title>
        <meta name="description" content="" />
        <link rel="icon" href="" />
      </Head>
      <Navbar/>
      <main className={styles.main}>
      
      </main>

      <footer className={`${styles.footer} bg-black`}>
        <div className='text-white'>
          <a href="">github</a>
          <a href="">linkedin</a>
          <a href="">dev.to</a>
          <a href="">twitter</a>
          <a href="">pawan994567@gmail.com</a>
      </div>
      </footer>
    </div>
  );
}

export default Home
