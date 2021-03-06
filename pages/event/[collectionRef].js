import { useRouter } from "next/router";
import connectDB from "utils/connectDB";
import Event from "models/Event";
import dataOS2023 from "lib/en/pages/onlinesanta-2023";
import dataRuOS2023 from "lib/ru/pages/onlinesanta-2023";
import Layout from "@/layout";
import HeroEvent from "@/sections/HeroEvent";
import FormEvent from "@/sections/FormEvent";

const EventPage = ({ event }) => {
  const router = useRouter();
  const { locale } = router;

  const getData = () => {
    if (event.collectionRef === "onlinesanta-2023") {
      switch (locale) {
        case "en":
          return dataOS2023;
        case "ru":
          return dataRuOS2023;
      }
    }
  };

  const { page, hero, form } = getData();

  return (
    <>
      <Layout data={page}>
        <HeroEvent data={hero} />
        <FormEvent data={form} />
      </Layout>
    </>
  );
};

export const getServerSideProps = async (context) => {
  try {
    const { res, query } = context;

    res.setHeader("Cache-Control", "s-maxage=10, stale-while-revalidate=59");

    connectDB();

    const event = await Event.findOne({
      collectionRef: query.collectionRef,
    }).exec();

    if (!event) {
      return {
        notFound: true,
      };
    }

    return {
      props: {
        event: JSON.parse(JSON.stringify(event)),
      },
    };
  } catch (err) {
    console.error("Error:", err);

    return {
      notFound: true,
    };
  }
};

export default EventPage;
