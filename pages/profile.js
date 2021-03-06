import { useRouter } from "next/router";
import data from "lib/en/pages/profile";
import dataRu from "lib/ru/pages/profile";
import Layout from "@/layout";
import TelegramLoginWidget from "@/modules/TelegramLoginWidget";

const User = () => {
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
        <h1 className="font-serif text-6xl text-neutral-content">{title}</h1>
        <div className="text-center">
          <TelegramLoginWidget />
        </div>
      </Layout>
    </>
  );
};

export default User;
