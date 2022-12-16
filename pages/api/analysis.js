// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { PythonShell } from "python-shell";

export default function handler(req, res) {
  let options = {
    mode: "text",
    pythonPath: "/opt/homebrew/bin/python3",
    pythonOptions: ["-u"],
    scriptPath: "pages/api/python",
    args: [req.body.search_value, req.body.sources, req.body.time],
  };

  PythonShell.run("analysis.py", options, function (err, results) {
    if (err) return res.status(500).json(err?.stack);
    if (results?.[0] === "no results") {
      res.status(200).json({ res: results[0] });
    } else {
      let result = results?.[0].replace(/'/g, '"');
      result = JSON.parse(result);

      res.status(200).json({
        average_scores: {
          positive: result["pos_tot"],
          neutral: result["neu_tot"],
          negative: result["neg_tot"],
        },
        key_words: [
          {
            sentiment: result["com_words"][0][2],
            word: result["com_words"][0][0],
          },
          {
            sentiment: result["com_words"][1][2],
            word: result["com_words"][1][0],
          },
          {
            sentiment: result["com_words"][2][2],
            word: result["com_words"][2][0],
          },
        ],
        all_scores: result["all_scores"],
        all_word_counts: result["all_word_counts"]
      });
    }
  });
}
