import { useRouter } from "next/dist/client/router";
import Project from "../compoments/project";

export default function ProjectDynamic({ project }) {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <Project data={project} />
    </>
  );
}
const pages = [
  {
    id: "0",
    type: "webpages",
    header: {
      headerText: "Высокоэффективные солнечные станции для каждого",
      smallText: "Разработка сайта для компании 'ION Solar'",
      img: "../img/ion1.png",
      imgMob: "../img/ion_mob1.png",
      button: "Хочу так же",
    },
  },
  {
    id: "1",
    type: "webpages",
    header: {
      headerText: "Высокоэффективные солнечные станции для каждого",
      smallText: "Разработка сайта для компании 'ION Solar'",
      img: "../img/ion1.png",
      imgMob: "../img/ion_mob1.png",
      button: "Хочу так же",
    },
  },
  {
    id: "2",
    type: "webpages",
    header: {
      headerText: "Высокоэффективные солнечные станции для каждого",
      smallText: "Разработка сайта для компании 'ION Solar'",
      img: "../img/ion1.png",
      imgMob: "../img/ion_mob1.png",
      button: "Хочу так же",
    },
  },
  {
    id: "5",
    type: "webpages",
    header: {
      headerText: "1111Высокоэффективные солнечные станции для каждого",
      smallText: "Разработка сайта для компании 'ION Solar'",
      img: "../img/ion1.png",
      imgMob: "../img/ion_mob1.png",
      button: "Хочу так же",
    },
  },
  {
    id: "4",
    type: "brandings",
    header: {
      headerText: "Брендинг мульти автосервиса в Вроцлаве",
      smallText: "Реклама в Google Adwords, Facebook, Instagram для ION Solar",
      img: "../img/ion10.png",
      imgMob: "../img/brandings_main_mob.png",
      button: "Смотреть проекты",
    },
  },
  {
    id: "3",
    type: "design",
    header: {
      headerText: "Брендинг мульти автосервиса в Вроцлаве",
      smallText: "Разработка сайта для компании 'ION Solar'",
      img: "../img/ion10.png",
      imgMob: "../img/brandings_main_mob.png",
      button: "Смотреть проекты",
    },
  },
];
export async function getStaticProps({ params }) {
  const req = pages[params.id];
  console.log(req);
  const data = req;
  return {
    props: { project: data },
  };
}

export async function getStaticPaths() {
  const req = ["0", "1", "2", "3", "4", "5"];
  const data = req;

  const paths = data.map((project) => {
    return { params: { id: project } };
  });

  return {
    paths,
    fallback: false,
  };
}
