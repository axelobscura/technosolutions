import Head from 'next/head'

export default function Layout({children}){
  return(
    <>
      <Head>
        <title>TECHNO SOLUTIONS MÉXICO</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@100;600;900&display=swap" rel="stylesheet" />
      </Head>

      {children}

      <footer className="footer">
        <h4>TECHNO SOLUTION MÉXICO</h4>
      </footer>
    </>
  )
}