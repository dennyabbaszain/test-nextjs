import { useRouter } from 'next/dist/client/router';
import Image from 'next/image'; // kelebihan Image dari next bisa mengkompres image itu sendiri dan load gambar disaat dibutuhkan dan itu sangat menghemat bandwith
import Layout from '../../components/Layout';
import styles from './../../styles/Users.module.css';

export default function Users({ users }) {
  const router = useRouter();
  return (
    <Layout nameTitle='Users'>
      <div className={styles['auth-container']}>
        <div className={styles['auth-form']}>
          <Image
            className='img'
            src='/4.jpg'
            width={100}
            height={100}
            alt='profile'
          />
          <p>Users Page</p>
          {users.map((user) => {
            return (
              <div
                className={styles.card}
                key={user.id}
                onClick={() => {
                  router.push(`/users/${user.id}`);
                }}
              >
                <p>Name : {user.name}</p>
                <p>Phone : {user.phone}</p>
                <p>Email : {user.email}</p>
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await res.json();
  return {
    props: { users },
  };
}
