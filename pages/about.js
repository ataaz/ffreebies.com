import Head from 'next/head';
import Layout from '../components/Layout/Layout';

export default function About() {
  return (
    <>
    <Layout>
    <div>
      <Head>
        <title>About | ffreebies.com</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      </div>
      <div className='container mt-5 pt-5'>
        <h1>This is about page</h1>
      </div>
    </Layout>
    </>
  )
}
