// import { useRouter } from 'next/dist/client/router';
import Layout from '../../components/Layout';

export default function UserDetail({ user }) {
  // const router = useRouter();
  // const { id } = router.query;
  return (
    <>
      <Layout nameTitle='users'>
        {
          <div>
            <p>username : {user.username}</p>
            <p>name : {user.name}</p>
            <p>email : {user.email}</p>
            <p>phone : {user.phone}</p>
            <p>street : {user.address.street}</p>
            <p>suite : {user.address.suite}</p>
          </div>
        }
      </Layout>
    </>
  );
}

export async function getStaticPaths() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();
  const paths = data.map((user) => ({
    params: {
      id: `${user.id}`,
    },
  }));
  return { paths, fallback: false };
}
export async function getStaticProps(context) {
  const { id } = context.params;
  const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
  const user = await res.json();

  return {
    props: {
      user,
    },
  };
}
