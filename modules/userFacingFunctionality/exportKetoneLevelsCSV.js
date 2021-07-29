// TODO - missing implementation for the download
import { levelDatesToCSV } from "../levelDatesToCSV"
export const exportKetoneLevelsCSV = (levels) => {
    console.log("Exporting ketone levels as CSV")
    const csv = levelDatesToCSV(levels)
    console.log("csv\n", csv)
}