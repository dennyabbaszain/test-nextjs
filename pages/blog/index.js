import Layout from '../../components/Layout';
import styles from '../../styles/Blog.module.css';

export default function Blog({ posts }) {
  return (
    <>
      <Layout nameTitle='Blog'>
        {posts.map((post) => {
          return (
            <div className={styles.card} key={post.id}>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </div>
          );
        })}
      </Layout>
    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await res.json();
  return {
    props: { posts },
  };
}
