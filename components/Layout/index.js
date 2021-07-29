import Head from 'next/head';
import Footer from '../Footer';
import Header from '../Header';
import styles from './Layout.module.css';

export default function Layout({ children, nameTitle }) {
  return (
    <>
      <Head>
        <title> belajar NextJS | {nameTitle}</title>
        <meta name='description' content='Belajar Website Dengan Nextjs' />
      </Head>
      <div className={styles.container}>
        <Header />
        <div className={styles.content}>{children}</div>
        <Footer />
      </div>
    </>
  );
}
