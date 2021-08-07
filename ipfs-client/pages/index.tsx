import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Nathan Thomas</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <img
          alt="Ethereum wallet address QR code"
          draggable={false}
          src="./wallet-address.png"
        />
      </main>
    </div>
  );
}
