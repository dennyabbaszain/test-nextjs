import { useRouter } from 'next/dist/client/router';
import { useEffect } from 'react';

export default function Custom404() {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 3000);
  }, []);
  return (
    <div className='title'>
      <p>Ooops...</p>
      <p>Halaman yang anda cari tidak ditemukan</p>
    </div>
  );
}
