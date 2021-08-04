import * as Sharing from "expo-sharing";
import * as FileSystem from "expo-file-system";
import { levelDatesToCSV } from "../levelDatesToCSV";

export const exportKetoneLevelsCSV = (levels) => {
  const csv = levelDatesToCSV(levels);
  const now = new Date();
  const fileName = `csv-ketone-levels-export-${now.getFullYear()}-${now.getMonth() +1}-${now.getDate()}.csv`;
  const uri = FileSystem.cacheDirectory + fileName;
  FileSystem.writeAsStringAsync(uri, csv, {
    encoding: FileSystem.EncodingType.UTF8,
  }).then(() => {
    Sharing.shareAsync(uri, {
      UTI: "text/csv",
      mimeType: "text/csv",
    });
  });
};
