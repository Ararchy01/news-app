import Head from "next/head";
import styles from "../styles/Home.module.scss";
import MainLayout from "../layouts";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainLayout>
        <p></p>
      </MainLayout>
    </div>
  );
}
