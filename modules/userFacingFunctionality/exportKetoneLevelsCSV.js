// TODO - missing implementation
import { levelDatesToCSV } from "../levelDatesToCSV"
export const exportKetoneLevelsCSV = (levels) => {
    console.log("Exporting ketone levels as CSV")
    const csv = levelDatesToCSV(levels)
    console.log("new csv\n", csv)
}