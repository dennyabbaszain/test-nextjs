import Head from 'next/head';
import Image from 'next/image';
import Layout from '../components/Layout';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <Layout nameTitle='Home'>
      <h1 className={styles['title-homepage']}>Welcome Denny Abbas Zain</h1>
    </Layout>
  );
}
