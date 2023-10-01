import { getRandomValues } from "utils/utils";

export const dataHistoriques = Array.from({ length: 40 }, (_, i) => {
  return {
    id: i + 123412451,
    date: "June 1,2020, 08:22 AM",
    montant: "79.98",
    site: "Lefigaro.com",
    statut: getRandomValues(["PENDING", "ACCEPTED", "REJECTED"]),
    details: "Service 1 - Service 2 - Service 3",
  };
});
