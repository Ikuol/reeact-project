import { getRandomValues } from "utils/utils";

export const dataAlertes = Array.from({ length: 40 }, (_, i) => {
  return {
    id: i + 1,
    title: "Support client exceptionnel chez Reeact",
    date: "June 1,2020, 08:22 AM",
    site: "Lefigaro.com",
    type: getRandomValues(["NORMAL", "SUCCESS", "DANGER"]),
  };
});
