// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res
    .status(200)
    .json({
      scores: { positive: 0.8752, neutral: 0.0879, negative: 0.0369 },
      key_words: ["hospitable", "clean", "breathtaking"],
    });
}
