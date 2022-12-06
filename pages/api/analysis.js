// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { PythonShell } from "python-shell";

export default function handler(req, res) {
  let options = {
    mode: "text",
    pythonPath: "/usr/local/bin/python3",
    pythonOptions: ["-u"],
    scriptPath: "pages/api/python",
    args: [req.body.search_value, req.body.sources, req.body.time],
  };

  PythonShell.run("analysis.py", options, function (err, results) {
    if (err) return res.status(500).json(err);
    if (results?.[0] === "no results") {
      res.status(200).json({ res: results[0] });
    } else {
      let result = results?.[0].replace(/'/g, '"');
      result = JSON.parse(result);
      // TODO: Connect keywords

      res.status(200).json({
        scores: {
          positive: result["pos_tot"],
          neutral: result["neu_tot"],
          negative: result["neg_tot"],
        },
        key_words: [
          { sentiment: "positive", word: "hospitable" },
          { sentiment: "negative", word: "dirty" },
          { sentiment: "neutral", word: "hotel" },
        ],
      });
    }
  });
}
