import Header from "../../organisms/header";
import styles from "./index.module.scss";

type LayoutProps = {
  children: React.ReactNode;
};

const MainLayout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <>
      <Header />
      <main className={styles.main}>{children}</main>
      <div></div>
    </>
  );
};

export default MainLayout;
