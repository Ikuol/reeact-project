import { getRandomValues } from "utils/utils";

export const dataDemandes = Array.from({ length: 5 }, (_, i) => {
  return {
    id: i + 1,
    objet: "Expérience décevante\nLefigaro.com",
    date: "June 4,2020\n05:34:45 AM",
    price: "3000€",
    statut: getRandomValues(["PENDING", "ACCEPTED", "REJECTED"]),
  };
});
