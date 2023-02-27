// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import axios from "axios";

export default function handler(req, res) {
  try {
    const response = axios.get("https://api.sheetson.com/v2/sheets/Personas");
    res.status(200).json(response.results);
  } catch (err) {
    console.log("ERROR" + err);
  }
}
