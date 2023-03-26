import axios from "axios";

const token = process.env.API_KEY;
const sheetID = process.env.SHEET_ID;

export default async function handler(req, res) {
  try {
    const response = await axios.get("https://api.sheetson.com/v2/sheets/EQUIPO",{ headers: {
          Authorization: `Bearer ${token}`,
          "X-Spreadsheet-Id": sheetID,
        },
      });
    const data = response.data.results;
    res.status(200).json(data);
  } catch (err) {
    console.log("ERROR ->>>" + err);
    res.status(500).send("Server error");
  }
}
