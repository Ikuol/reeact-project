import { getRandomValues } from "utils/utils";

export const dataInterventions = Array.from({ length: 40 }, (_, i) => {
  return {
    id: i + 1,
    title: "Support client exceptionnel chez Reeact",
    date: "June 1,2020",
    heure: "05:34:45 AM",
    site: "LeFigaro.com",
    price: "3000€",
    question:
      "Pourquoi un commentaire apparait-il sur ce site alors que tous les autres commentaires sont positifs ?",
    statut: getRandomValues(["PENDING", "ACCEPTED", "REJECTED"]),
  };
});

export const statInterventions = Array.from({ length: 40 }, (_, i) => {
  return {
    id: i + 1,
    name: "Nicolas Brissaud",
    title: "Support client exceptionnel chez Reeact",
    date: "June 1,2020",
    site: "LeFigaro.com",
    question:
      "Pourquoi un commentaire apparait-il sur ce site alors que tous les autres commentaires sont positifs ?",
    statut: getRandomValues(["PENDING", "ACCEPTED", "REJECTED"]),
  };
});

export const backInterventions = Array.from({ length: 40 }, (_, i) => {
  return {
    id: i + 1,
    name: "Nicolas Brissaud",
    title: "Support client exceptionnel chez Reeact",
    date: "June 1,2020",
    site: "LeFigaro.com",
    intervention:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ",
    question:
      "Pourquoi un commentaire apparait-il sur ce site alors que tous les autres commentaires sont positifs ?",
    statut: getRandomValues(["PENDING", "ACCEPTED", "REJECTED"]),
  };
});
