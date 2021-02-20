import Head from "next/head";
import styles from "../styles/Home.module.scss";
import MainLayout from "../layouts";
import { GetStaticProps } from "next";
import Article from "../components/article";
import Nav from "../components/nav";

export default function Home(props) {
  return (
    <MainLayout>
      <Head>
        <title>News</title>
      </Head>
      <div className={styles.contents}>
        <div className={styles.nav}>
          <nav>
            <Nav />
          </nav>
        </div>
        <div className={styles.blank} />
        <div className={styles.main}>
          <Article title="headline" articles={props.topArticles} />
        </div>
      </div>
    </MainLayout>
  );
}

export const getStaticProps = async () => {
  const pageSize = 10;
  const topRes = await fetch(
    `https://newsapi.org/v2/top-headlines?country=ca&pageSize=${pageSize}&apiKey=f941d1c7cef6412e9a3c8d39f6aa3688`
  );
  const topJson = await topRes.json();
  const topArticles = topJson?.articles;

  return {
    props: {
      topArticles,
    },
    revalidate: 60 * 10,
  };
};
