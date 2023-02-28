// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import axios from "axios";

export default async function handler(req, res) {
  try {
    const payloadHeader = {
      headers: {
        Authorization:
          "Bearer oTinSoXsJQomrnrKs6Qb6jmXOHTpac2Sx8OI400e1VVn4v8dg9LphWQus9U",
          "X-Spreadsheet-Id": "1nPs1ZBfhC6gA1355_cRx0-UVLWnj2f71VM59rcLcpZw",
      },
    };
    const response = await axios.get(
      "https://api.sheetson.com/v2/sheets/Personas",
      payloadHeader
    );
    const data = response.data.results;
    res.status(200).json(data);
  } catch (err) {
    console.log("ERROR ->>>" + err);
    res.status(500).send("Server error");
  }
}
