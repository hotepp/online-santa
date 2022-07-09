import { useRouter } from "next/router";
import data from "lib/en/pages";
import dataRu from "lib/ru/pages";
import Layout from "@/layout";

const Home = () => {
  const router = useRouter();
  const { locale } = router;

  const getData = () => {
    switch (locale) {
      case "en":
        return data;
      case "ru":
        return dataRu;
    }
  };

  const { page, title } = getData();

  return (
    <>
      <Layout data={page}>
        <h1 className="font-serif text-6xl">{title}</h1>
      </Layout>
    </>
  );
};

export default Home;
