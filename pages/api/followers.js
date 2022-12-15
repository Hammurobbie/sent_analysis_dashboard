import axios from "axios";

export default function handler(req, res) {
    console.log(req.body)
    const token = "AAAAAAAAAAAAAAAAAAAAAMJGjQEAAAAAUjd4N5ZP7gd9Mmeim5xqGNbpwEk%3DOHZjuDck5SYVT3W6iwwcVVNKsfPM5CdnitjlP7dkJLWV1VEELV"; 
    const followersFetches = req.body?.users.map(user => {
      const userId = user.id;
      const url = `https://api.twitter.com/2/users/${userId}/followers`;
      const config = {headers: {
        "User-Agent": "v2UserLookupJS",
        "authorization": `Bearer ${token}`
    }}
      return axios({
        method: "get",
        url: url,
        config: config
      })
    })

    // Promise.all(followersFetches)
    const userId = user.id;
      const url = `https://api.twitter.com/2/users/${userId}/followers`;
      const config = {headers: {
        "User-Agent": "v2UserLookupJS",
        "authorization": `Bearer ${token}`
    }}
    axios({
    method: "get",
    url: url,
    config: config
    })
    .then((resp) => {
      res.status(200).json({res: resp});
    })
    .catch((err) => {
        res.status(500).json({err: err});
    });

};