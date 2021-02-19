import Head from "next/head";
import styles from "../styles/Home.module.scss";
import MainLayout from "../layouts";
import { GetStaticProps } from "next";
import Article from "../components/article";

export default function Home(props) {
  props.topArticles.map((article) => {
    console.log(article.title);
  });
  return (
    <MainLayout>
      <Head>
        <title>News</title>
      </Head>
      <div className={styles.main}>
        <Article title="headlines" articles={props.topArticles} />
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
