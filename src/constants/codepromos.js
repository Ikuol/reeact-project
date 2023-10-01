import { getRandomValues } from "utils/utils";

export const dataPromos = Array.from({ length: 5 }, (_, i) => {
  return {
    id: i + 1,
    titre: getRandomValues(["NIC010", "SUMMER20", "DISCOUNT", "GILLES10"]),
    debut: "June 1,2020, 08:22 AM",
    fin: "June 1,2020, 08:22 AM",
    methode: getRandomValues(["Poucentage", "Montant"]),
    montant: getRandomValues(["10%", "20€", "10€", "20%"]),
    statut: getRandomValues(["FINISHED", "ACCEPTED"]),
  };
});
