import { IBook } from "../types";
import obyknovennaya_istoriya from "../assets/images/obyknovennaya_istoriya.jpg";
import o_detyah_koscheevyh from "../assets/images/o_detyah_koscheevyh.jpg";
import spasenie_dikogo_robota from "../assets/images/spasenie_dikogo_robota.jpg";
import temnaya_storona_srednevekovoy_yaponii from "../assets/images/temnaya_storona_srednevekovoy_yaponii.jpg";
import snezhnaya_koroleva from "../assets/images/snezhnaya_koroleva.jpg";
import Nyryaa_v_sinevy_nebes from "../assets/images/Nyryaa_v_sinevy_nebes.jpg";

export const BOOKS: IBook[] = [
  {
    title: "Обыкновенная история",
    author: "И.Гончаров",
    description: "Захватывающий и остроумный дебютный роман Ивана Гончарова",
    audio: false,
    ebook: true,
    paperbook: true,
    price: "387 Р",
    new: true,
    availability: true,
    image: obyknovennaya_istoriya,
    genre: "Проза",
  },
  {
    title: "О детях кощеевых",
    author: "А.Селютина",
    description:
      "Продолжение фэнтези на основе русских народных сказок 'И жили они долго и счастливо'",
    audio: true,
    ebook: true,
    paperbook: true,
    price: "809 Р",
    new: true,
    availability: true,
    image: o_detyah_koscheevyh,
    genre: "Детство",
  },
  {
    title: "Спасение дикого робота",
    author: "П.Браун",
    description: "Продолжение приключений робота по имени Роз",
    audio: true,
    ebook: true,
    paperbook: true,
    price: "463 Р",
    new: false,
    availability: true,
    image: spasenie_dikogo_robota,
    genre: "Проза",
  },
  {
    title: "Темная сторона средневековой Японии",
    author: "Д.Кикнадзе",
    description:
      "Японская повседневность эпохи Хэйан, самураи, потусторонний мир и буддийский ад",
    audio: true,
    ebook: true,
    paperbook: true,
    price: "548 Р",
    new: false,
    availability: true,
    image: temnaya_storona_srednevekovoy_yaponii,
    genre: "Культура",
  },
  {
    title: "Снежная королева",
    author: "Г.Х.Андерсон",
    description:
      "Самая популярная сказка Андерсена в нежных акварельных иллюстрациях Оксаны Викторовой",
    audio: false,
    ebook: true,
    paperbook: true,
    price: "747 Р",
    new: true,
    availability: true,
    image: snezhnaya_koroleva,
    genre: "Детство",
  },
  {
    title: "Ныряя в синеву небес",
    author: "Ринга Ли",
    description: "Популярная новелла в оформлении Eornheit и huaepiphany",
    audio: true,
    ebook: true,
    paperbook: true,
    price: "1297 Р",
    new: true,
    availability: true,
    image: Nyryaa_v_sinevy_nebes,
    genre: "Культура",
  },
  //   {
  //     title: "",
  //     author: "",
  //     description: "",
  //     audio: true,
  //     ebook: true,
  //     paperbook: true,
  //     price: "",
  //     new: true,
  //     availability: true,
  //     image: '../assets/images/',
    // genre: "",
  //   },
  //   {
  //     title: "",
  //     author: "",
  //     description: "",
  //     audio: true,
  //     ebook: true,
  //     paperbook: true,
  //     price: "",
  //     new: true,
  //     availability: true,
  //     image: '../assets/images/',
    // genre: "",
  //   },
  {
    title: "Обыкновенная история",
    author: "И.Гончаров",
    description: "Захватывающий и остроумный дебютный роман Ивана Гончарова",
    audio: false,
    ebook: true,
    paperbook: true,
    price: "387 Р",
    new: true,
    availability: true,
    image: obyknovennaya_istoriya,
    genre: "Проза",
  },
  {
    title: "О детях кощеевых",
    author: "А.Селютина",
    description:
      "Продолжение фэнтези на основе русских народных сказок 'И жили они долго и счастливо'",
    audio: true,
    ebook: true,
    paperbook: true,
    price: "809 Р",
    new: true,
    availability: true,
    image: o_detyah_koscheevyh,
    genre: "Детство",
  },
  {
    title: "Спасение дикого робота",
    author: "П.Браун",
    description: "Продолжение приключений робота по имени Роз",
    audio: true,
    ebook: true,
    paperbook: true,
    price: "463 Р",
    new: false,
    availability: true,
    image: spasenie_dikogo_robota,
    genre: "Проза",
  },
  {
    title: "Темная сторона средневековой Японии",
    author: "Д.Кикнадзе",
    description:
      "Японская повседневность эпохи Хэйан, самураи, потусторонний мир и буддийский ад",
    audio: true,
    ebook: true,
    paperbook: true,
    price: "548 Р",
    new: false,
    availability: true,
    image: temnaya_storona_srednevekovoy_yaponii,
    genre: "Культура",
  },
  {
    title: "Снежная королева",
    author: "Г.Х.Андерсон",
    description:
      "Самая популярная сказка Андерсена в нежных акварельных иллюстрациях Оксаны Викторовой",
    audio: false,
    ebook: true,
    paperbook: true,
    price: "747 Р",
    new: true,
    availability: true,
    image: snezhnaya_koroleva,
    genre: "Детство",
  },
  {
    title: "Ныряя в синеву небес",
    author: "Ринга Ли",
    description: "Популярная новелла в оформлении Eornheit и huaepiphany",
    audio: true,
    ebook: true,
    paperbook: true,
    price: "1297 Р",
    new: true,
    availability: true,
    image: Nyryaa_v_sinevy_nebes,
    genre: "Культура",
  },
  {
    title: "Обыкновенная история",
    author: "И.Гончаров",
    description: "Захватывающий и остроумный дебютный роман Ивана Гончарова",
    audio: false,
    ebook: true,
    paperbook: true,
    price: "387 Р",
    new: true,
    availability: true,
    image: obyknovennaya_istoriya,
    genre: "Проза",
  },
  {
    title: "О детях кощеевых",
    author: "А.Селютина",
    description:
      "Продолжение фэнтези на основе русских народных сказок 'И жили они долго и счастливо'",
    audio: true,
    ebook: true,
    paperbook: true,
    price: "809 Р",
    new: true,
    availability: true,
    image: o_detyah_koscheevyh,
    genre: "Детство",
  },
  {
    title: "Спасение дикого робота",
    author: "П.Браун",
    description: "Продолжение приключений робота по имени Роз",
    audio: true,
    ebook: true,
    paperbook: true,
    price: "463 Р",
    new: false,
    availability: true,
    image: spasenie_dikogo_robota,
    genre: "Проза",
  },
  {
    title: "Темная сторона средневековой Японии",
    author: "Д.Кикнадзе",
    description:
      "Японская повседневность эпохи Хэйан, самураи, потусторонний мир и буддийский ад",
    audio: true,
    ebook: true,
    paperbook: true,
    price: "548 Р",
    new: false,
    availability: true,
    image: temnaya_storona_srednevekovoy_yaponii,
    genre: "Культура",
  },
  {
    title: "Снежная королева",
    author: "Г.Х.Андерсон",
    description:
      "Самая популярная сказка Андерсена в нежных акварельных иллюстрациях Оксаны Викторовой",
    audio: false,
    ebook: true,
    paperbook: true,
    price: "747 Р",
    new: true,
    availability: true,
    image: snezhnaya_koroleva,
    genre: "Детство",
  },
  {
    title: "Ныряя в синеву небес",
    author: "Ринга Ли",
    description: "Популярная новелла в оформлении Eornheit и huaepiphany",
    audio: true,
    ebook: true,
    paperbook: true,
    price: "1297 Р",
    new: true,
    availability: true,
    image: Nyryaa_v_sinevy_nebes,
    genre: "Культура",
  },
  {
    title: "Обыкновенная история",
    author: "И.Гончаров",
    description: "Захватывающий и остроумный дебютный роман Ивана Гончарова",
    audio: false,
    ebook: true,
    paperbook: true,
    price: "387 Р",
    new: true,
    availability: true,
    image: obyknovennaya_istoriya,
    genre: "Проза",
  },
  {
    title: "О детях кощеевых",
    author: "А.Селютина",
    description:
      "Продолжение фэнтези на основе русских народных сказок 'И жили они долго и счастливо'",
    audio: true,
    ebook: true,
    paperbook: true,
    price: "809 Р",
    new: true,
    availability: true,
    image: o_detyah_koscheevyh,
    genre: "Детство",
  },
  {
    title: "Спасение дикого робота",
    author: "П.Браун",
    description: "Продолжение приключений робота по имени Роз",
    audio: true,
    ebook: true,
    paperbook: true,
    price: "463 Р",
    new: false,
    availability: true,
    image: spasenie_dikogo_robota,
    genre: "Проза",
  },
  {
    title: "Темная сторона средневековой Японии",
    author: "Д.Кикнадзе",
    description:
      "Японская повседневность эпохи Хэйан, самураи, потусторонний мир и буддийский ад",
    audio: true,
    ebook: true,
    paperbook: true,
    price: "548 Р",
    new: false,
    availability: true,
    image: temnaya_storona_srednevekovoy_yaponii,
    genre: "Культура",
  },
  {
    title: "Снежная королева",
    author: "Г.Х.Андерсон",
    description:
      "Самая популярная сказка Андерсена в нежных акварельных иллюстрациях Оксаны Викторовой",
    audio: false,
    ebook: true,
    paperbook: true,
    price: "747 Р",
    new: true,
    availability: true,
    image: snezhnaya_koroleva,
    genre: "Детство",
  },
  {
    title: "Ныряя в синеву небес",
    author: "Ринга Ли",
    description: "Популярная новелла в оформлении Eornheit и huaepiphany",
    audio: true,
    ebook: true,
    paperbook: true,
    price: "1297 Р",
    new: true,
    availability: true,
    image: Nyryaa_v_sinevy_nebes,
    genre: "Культура",
  },
];