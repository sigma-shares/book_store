import { IFooterNavTypes } from "../types";
import youtube from "../assets/icons/youtube.svg";
import twitter from "../assets/icons/twitter.svg";
import telegram from "../assets/icons/telegram.svg";
import vk from "../assets/icons/vk.svg";
import classmates from "../assets/icons/classmates.svg";
import mastercard from "../assets/icons/mastercard.svg";
import visa from "../assets/icons/visa.svg";
import mir from "../assets/icons/mir.svg";
import sbp from "../assets/icons/sbp.svg";

export const CONTENT_FOOTER_NAVIGATION: IFooterNavTypes[] = [
  {
    header: "О нас",
    array: ["Вопросы и ответы", "Дерево знаний", "Условия доставки"],
  },
  {
    header: "Партнерам",
    array: [
      "Стать автором",
      "Партнерская программа",
      "Дистрибуция",
      "Для бизнеса",
    ],
  },
  {
    header: "Правовая информация",
    array: [
      "Сведения об организации",
      "Пользовательское обучение",
      "Политика Конфиденциальности",
    ],
  },
];

export const CONTENT_FOOTER_SOCIALS: string[] = [
  youtube,
  vk,
  twitter,
  telegram,
  classmates,
];
export const CONTENT_FOOTER_PAYMENTS: string[] = [mastercard, visa, mir, sbp];