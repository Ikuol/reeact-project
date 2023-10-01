import { getRandomValues } from "utils/utils";

export const dataAnalyses = Array.from({ length: 40 }, (_, i) => {
  return {
    id: i + 1,
    title: "Support client exceptionnel chez Reeact",
    date: "June 1,2020, 08:22 AM",
    site: "Lefigaro.com",
    extrait: "Extrait",
    text: " Loren ipsum Loren ipsum Loren ipsum Loren ipsum Loren ipsum Loren ipsum Loren ipsum Loren ipsum Loren ipsum Loren ipsum Loren ipsum Loren ipsum Loren ipsum Loren ipsum Loren ipsum Loren ipsum Loren ipsum Loren ipsum Loren ipsum Loren ipsum Loren ipsum Loren ipsum Loren ipsum Loren ipsum...",

    //tenir compte des annotations, ils ont été utilisés dans le fichier DraggableTableRow
    type: getRandomValues(["NORMAL", "SUCCESS", "DANGER"]),
  };
});
