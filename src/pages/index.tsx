import Head from "next/head";
import styles from "../styles/Home.module.scss";
import MainLayout from "../components/templates/layouts";
import Article from "../components/organisms/article";
import Nav from "../components/organisms/nav";
import WeatherNews from "../components/weather";
import PickupArticle from "../components/organisms/pickup";

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
        <div className={styles.main}>
          <Article title="headlines" articles={props.topArticles} />
        </div>
        <div className={styles.aside}>
          <WeatherNews weatherNews={props.weatherNews} />
          <PickupArticle articles={props.pickupArticles} />
        </div>
        <div></div>
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

  const lat = 49.28;
  const lon = -123.12;
  const exclude = "hourly,minutely";
  const weatherRes = await fetch(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&exclude=${exclude}&appid=eb25271bc29c0b35d4dfaf63a3772e72`
  );
  const weatherJson = await weatherRes.json();
  const weatherNews = weatherJson;

  const keyword = "software";
  const sortBy = "popularity";
  const pickupPageSize = 5;
  const pickupRes = await fetch(
    `https://newsapi.org/v2/everything?q=${keyword}&language=ca&sortBy=${sortBy}&pageSize=${pickupPageSize}&apiKey=f941d1c7cef6412e9a3c8d39f6aa3688`
  );
  const pickupJson = await pickupRes.json();
  const pickupArticles = pickupJson?.articles;

  return {
    props: {
      topArticles,
      weatherNews,
      pickupArticles,
    },
    revalidate: 60,
  };
};
