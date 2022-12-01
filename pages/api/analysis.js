// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { PythonShell } from "python-shell";

export default function handler(req, res) {
  let pyRes;
  let options = {
    mode: "text",
    pythonPath: "/usr/local/bin/python3",
    pythonOptions: ["-u"],
    scriptPath: "pages/api/python",
    args: [req.body.search_value, req.body.sources, req.body.time],
  };

  PythonShell.run("analysis.py", options, function (err, results) {
    if (err) throw err;

    console.log("results: %j", results);
    res.status(200).json({
      scores: { positive: 0.8752, neutral: 0.0879, negative: 0.0369 },
      key_words: [
        { sentiment: "positive", word: "hospitable" },
        { sentiment: "negative", word: "dirty" },
        { sentiment: "neutral", word: "hotel" },
      ],
      test: results,
    });
  });

  // setTimeout(() => {
  // res.status(200).json({
  //   scores: { positive: 0.8752, neutral: 0.0879, negative: 0.0369 },
  //   key_words: [
  //     { sentiment: "positive", word: "hospitable" },
  //     { sentiment: "negative", word: "dirty" },
  //     { sentiment: "neutral", word: "hotel" },
  //   ],
  // });
  // }, 6000);
}
