import Head from "next/head";

const Helmet = () => {
  return (
    <Head>
      <title>HealthRelay</title>
      <meta
        name="description"
        content="Automating radiologist to physician communication."
      />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      {/* <link rel="icon" href="/favicon.ico" /> */}
    </Head>
  );
};

export default Helmet;
