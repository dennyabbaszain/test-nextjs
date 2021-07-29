import Image from 'next/image';
import Layout from '../../components/Layout';
import styles from '../../styles/Login.module.css';

export default function Login() {
  return (
    <Layout nameTitle='Login'>
      <div className={styles['auth-container']}>
        <div className={styles['auth-form']}>
          <Image
            className='img'
            src='/2.jpg'
            width={100}
            height={150}
            alt='profile'
          />
          <p>Login Page</p>
          <input type='text' placeholder='Email' />
          <input type='password' placeholder='Password' />
          <button className='btn'>Hallo</button>
        </div>
      </div>
    </Layout>
  );
}
