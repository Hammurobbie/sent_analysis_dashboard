import React, { useState } from 'react'
import { TagCloud } from 'react-tagcloud'
import {
  Controls,
  WordCloud
} from "../styles/dashBoard.module.scss";

const defaultData = [
  {
      "value": "save",
      "count": 1
  },
  {
      "value": "date",
      "count": 1
  },
  {
      "value": "plan",
      "count": 1
  },
  {
      "value": "attend",
      "count": 1
  },
  {
      "value": "netcocanada",
      "count": 1
  },
  {
      "value": "annual",
      "count": 5
  },
  {
      "value": "conference",
      "count": 2
  },
  {
      "value": "august",
      "count": 1
  },
  {
      "value": "13th",
      "count": 1
  },
  {
      "value": "toronto",
      "count": 2
  },
  {
      "value": "sponsorship",
      "count": 1
  },
  {
      "value": "opportunities",
      "count": 1
  },
  {
      "value": "now",
      "count": 3
  },
  {
      "value": "available",
      "count": 2
  },
  {
      "value": "virtualisthenewreality",
      "count": 1
  },
  {
      "value": "httpstcoc9lu6lagep",
      "count": 1
  },
  {
      "value": "groupon",
      "count": 1
  },
  {
      "value": "ice",
      "count": 2
  },
  {
      "value": "gaylord",
      "count": 2
  },
  {
      "value": "properties",
      "count": 2
  },
  {
      "value": "get",
      "count": 2
  },
  {
      "value": "httpstcow8pvjzmpuv",
      "count": 1
  },
  {
      "value": "marriott",
      "count": 1
  },
  {
      "value": "marriottbonvoy",
      "count": 1
  },
  {
      "value": "travel",
      "count": 5
  },
  {
      "value": "marriotthotel",
      "count": 1
  },
  {
      "value": "food",
      "count": 4
  },
  {
      "value": "sheraton",
      "count": 1
  },
  {
      "value": "jwmarriott",
      "count": 1
  },
  {
      "value": "anal",
      "count": 1
  },
  {
      "value": "slut",
      "count": 1
  },
  {
      "value": "kaylee",
      "count": 2
  },
  {
      "value": "loves",
      "count": 1
  },
  {
      "value": "interracial",
      "count": 1
  },
  {
      "value": "sex",
      "count": 1
  },
  {
      "value": "bbc",
      "count": 1
  },
  {
      "value": "also",
      "count": 1
  },
  {
      "value": "day",
      "count": 3
  },
  {
      "value": "exciting",
      "count": 1
  },
  {
      "value": "advent",
      "count": 1
  },
  {
      "value": "calendar",
      "count": 1
  },
  {
      "value": "christmas",
      "count": 9
  },
  {
      "value": "countdown",
      "count": 1
  },
  {
      "value": "bring",
      "count": 3
  },
  {
      "value": "craft",
      "count": 1
  },
  {
      "value": "activity",
      "count": 1
  },
  {
      "value": "each",
      "count": 1
  },
  {
      "value": "today",
      "count": 1
  },
  {
      "value": "amy",
      "count": 1
  },
  {
      "value": "charlie",
      "count": 1
  },
  {
      "value": "creation",
      "count": 1
  },
  {
      "value": "station",
      "count": 1
  },
  {
      "value": "ashby",
      "count": 1
  },
  {
      "value": "melbourne",
      "count": 1
  },
  {
      "value": "showing",
      "count": 1
  },
  {
      "value": "make",
      "count": 2
  },
  {
      "value": "hat",
      "count": 1
  },
  {
      "value": "forwearachristmashatday",
      "count": 1
  },
  {
      "value": "located",
      "count": 1
  },
  {
      "value": "along",
      "count": 2
  },
  {
      "value": "scenic",
      "count": 1
  },
  {
      "value": "atlantic",
      "count": 1
  },
  {
      "value": "coastline",
      "count": 1
  },
  {
      "value": "breathtaking",
      "count": 1
  },
  {
      "value": "ocean",
      "count": 1
  },
  {
      "value": "views",
      "count": 1
  },
  {
      "value": "lush",
      "count": 1
  },
  {
      "value": "greenery",
      "count": 1
  },
  {
      "value": "landmark",
      "count": 2
  },
  {
      "value": "introduce",
      "count": 1
  },
  {
      "value": "new",
      "count": 5
  },
  {
      "value": "era",
      "count": 1
  },
  {
      "value": "modern",
      "count": 1
  },
  {
      "value": "luxury",
      "count": 3
  },
  {
      "value": "historic",
      "count": 1
  },
  {
      "value": "city",
      "count": 2
  },
  {
      "value": "rabat",
      "count": 7
  },
  {
      "value": "morocco",
      "count": 7
  },
  {
      "value": "yall",
      "count": 1
  },
  {
      "value": "clothes",
      "count": 1
  },
  {
      "value": "items",
      "count": 1
  },
  {
      "value": "hardly",
      "count": 1
  },
  {
      "value": "use",
      "count": 1
  },
  {
      "value": "etc",
      "count": 1
  },
  {
      "value": "hiltons",
      "count": 1
  },
  {
      "value": "stars",
      "count": 4
  },
  {
      "value": "donations",
      "count": 3
  },
  {
      "value": "happening",
      "count": 1
  },
  {
      "value": "sunday",
      "count": 2
  },
  {
      "value": "18th",
      "count": 1
  },
  {
      "value": "december",
      "count": 6
  },
  {
      "value": "christmascarols",
      "count": 1
  },
  {
      "value": "iptp",
      "count": 1
  },
  {
      "value": "networks",
      "count": 1
  },
  {
      "value": "attending",
      "count": 2
  },
  {
      "value": "ptc23",
      "count": 1
  },
  {
      "value": "event",
      "count": 1
  },
  {
      "value": "january",
      "count": 1
  },
  {
      "value": "hawaiian",
      "count": 1
  },
  {
      "value": "village",
      "count": 1
  },
  {
      "value": "waikiki",
      "count": 1
  },
  {
      "value": "beach",
      "count": 2
  },
  {
      "value": "let",
      "count": 1
  },
  {
      "value": "know",
      "count": 1
  },
  {
      "value": "📝contact",
      "count": 1
  },
  {
      "value": "arrange",
      "count": 1
  },
  {
      "value": "meeting",
      "count": 1
  },
  {
      "value": "marketingiptpnet",
      "count": 1
  },
  {
      "value": "more",
      "count": 4
  },
  {
      "value": "info",
      "count": 1
  },
  {
      "value": "ptc",
      "count": 1
  },
  {
      "value": "announced",
      "count": 2
  },
  {
      "value": "franchise",
      "count": 1
  },
  {
      "value": "agreement",
      "count": 1
  },
  {
      "value": "munich",
      "count": 1
  },
  {
      "value": "partners",
      "count": 1
  },
  {
      "value": "mhp",
      "count": 1
  },
  {
      "value": "open",
      "count": 2
  },
  {
      "value": "conrad",
      "count": 7
  },
  {
      "value": "hamburg",
      "count": 1
  },
  {
      "value": "set",
      "count": 1
  },
  {
      "value": "become",
      "count": 2
  },
  {
      "value": "first",
      "count": 2
  },
  {
      "value": "germany",
      "count": 1
  },
  {
      "value": "operate",
      "count": 1
  },
  {
      "value": "hilton’s",
      "count": 3
  },
  {
      "value": "brand",
      "count": 2
  },
  {
      "value": "conradhotels",
      "count": 4
  },
  {
      "value": "sunrise",
      "count": 2
  },
  {
      "value": "aberdeen",
      "count": 2
  },
  {
      "value": "after",
      "count": 1
  },
  {
      "value": "days",
      "count": 1
  },
  {
      "value": "time",
      "count": 2
  },
  {
      "value": "head",
      "count": 3
  },
  {
      "value": "home",
      "count": 1
  },
  {
      "value": "well",
      "count": 2
  },
  {
      "value": "earned",
      "count": 1
  },
  {
      "value": "break",
      "count": 1
  },
  {
      "value": "dxcgeological",
      "count": 1
  },
  {
      "value": "hiltonteca",
      "count": 1
  },
  {
      "value": "snow",
      "count": 1
  },
  {
      "value": "drag",
      "count": 1
  },
  {
      "value": "show",
      "count": 1
  },
  {
      "value": "hiltonbrightonmet",
      "count": 2
  },
  {
      "value": "saturgay",
      "count": 1
  },
  {
      "value": "book",
      "count": 1
  },
  {
      "value": "yourself",
      "count": 1
  },
  {
      "value": "table",
      "count": 1
  },
  {
      "value": "drink",
      "count": 1
  },
  {
      "value": "metropolebar",
      "count": 1
  },
  {
      "value": "lookoftheday",
      "count": 1
  },
  {
      "value": "brunch",
      "count": 1
  },
  {
      "value": "brighton",
      "count": 3
  },
  {
      "value": "hiltonhead",
      "count": 1
  },
  {
      "value": "brunchtime",
      "count": 1
  },
  {
      "value": "bottomlessbrunch",
      "count": 1
  },
  {
      "value": "brightonandhove",
      "count": 1
  },
  {
      "value": "bottomlessbrunching",
      "count": 1
  },
  {
      "value": "dragshow",
      "count": 1
  },
  {
      "value": "hot",
      "count": 1
  },
  {
      "value": "love",
      "count": 1
  },
  {
      "value": "lashes",
      "count": 1
  },
  {
      "value": "lipstick",
      "count": 1
  },
  {
      "value": "lgbt",
      "count": 1
  },
  {
      "value": "beauty",
      "count": 1
  },
  {
      "value": "ewendcameron",
      "count": 1
  },
  {
      "value": "hope",
      "count": 1
  },
  {
      "value": "yer",
      "count": 1
  },
  {
      "value": "room",
      "count": 2
  },
  {
      "value": "duvet",
      "count": 1
  },
  {
      "value": "seen",
      "count": 1
  },
  {
      "value": "some",
      "count": 1
  },
  {
      "value": "action",
      "count": 1
  },
  {
      "value": "association",
      "count": 3
  },
  {
      "value": "summit",
      "count": 3
  },
  {
      "value": "orlando",
      "count": 3
  },
  {
      "value": "doubletree",
      "count": 4
  },
  {
      "value": "seaworld",
      "count": 3
  },
  {
      "value": "come",
      "count": 3
  },
  {
      "value": "join",
      "count": 2
  },
  {
      "value": "hear",
      "count": 2
  },
  {
      "value": "czar",
      "count": 2
  },
  {
      "value": "husband",
      "count": 1
  },
  {
      "value": "dogs",
      "count": 1
  },
  {
      "value": "rescue",
      "count": 1
  },
  {
      "value": "hoomans",
      "count": 1
  },
  {
      "value": "category",
      "count": 1
  },
  {
      "value": "five",
      "count": 1
  },
  {
      "value": "hurricane",
      "count": 1
  },
  {
      "value": "grateful",
      "count": 2
  },
  {
      "value": "rewarded",
      "count": 1
  },
  {
      "value": "calling",
      "count": 1
  },
  {
      "value": "myself",
      "count": 1
  },
  {
      "value": "her",
      "count": 2
  },
  {
      "value": "dad",
      "count": 2
  },
  {
      "value": "daughter",
      "count": 1
  },
  {
      "value": "crossfit",
      "count": 1
  },
  {
      "value": "beaufort",
      "count": 1
  },
  {
      "value": "realestate",
      "count": 1
  },
  {
      "value": "forsale",
      "count": 1
  },
  {
      "value": "kellerwilliams",
      "count": 1
  },
  {
      "value": "humidity",
      "count": 1
  },
  {
      "value": "fitness",
      "count": 1
  },
  {
      "value": "fripp",
      "count": 1
  },
  {
      "value": "island",
      "count": 1
  },
  {
      "value": "hanna",
      "count": 3
  },
  {
      "value": "bouncing",
      "count": 2
  },
  {
      "value": "cock",
      "count": 1
  },
  {
      "value": "hannah",
      "count": 1
  },
  {
      "value": "hiltonriyadh",
      "count": 1
  },
  {
      "value": "amazing",
      "count": 1
  },
  {
      "value": "5star",
      "count": 1
  },
  {
      "value": "property",
      "count": 2
  },
  {
      "value": "truly",
      "count": 1
  },
  {
      "value": "artistic",
      "count": 1
  },
  {
      "value": "beautiful",
      "count": 1
  },
  {
      "value": "within",
      "count": 1
  },
  {
      "value": "capital",
      "count": 1
  },
  {
      "value": "saudiarabia",
      "count": 1
  },
  {
      "value": "singhlions",
      "count": 1
  },
  {
      "value": "loved",
      "count": 1
  },
  {
      "value": "rooms",
      "count": 1
  },
  {
      "value": "furnished",
      "count": 1
  },
  {
      "value": "apartments",
      "count": 1
  },
  {
      "value": "visitsaudi",
      "count": 2
  },
  {
      "value": "kathy",
      "count": 1
  },
  {
      "value": "glittering",
      "count": 1
  },
  {
      "value": "house",
      "count": 1
  },
  {
      "value": "hunkydoriest",
      "count": 1
  },
  {
      "value": "matriarch",
      "count": 1
  },
  {
      "value": "household",
      "count": 1
  },
  {
      "value": "going",
      "count": 1
  },
  {
      "value": "out",
      "count": 2
  },
  {
      "value": "decorations",
      "count": 1
  },
  {
      "value": "decoration",
      "count": 1
  },
  {
      "value": "httpstco6gzxtcxkmc",
      "count": 1
  },
  {
      "value": "things",
      "count": 1
  },
  {
      "value": "fast",
      "count": 1
  },
  {
      "value": "easy",
      "count": 1
  },
  {
      "value": "delivered",
      "count": 1
  },
  {
      "value": "work",
      "count": 1
  },
  {
      "value": "teams",
      "count": 1
  },
  {
      "value": "streamline",
      "count": 1
  },
  {
      "value": "travelers’",
      "count": 1
  },
  {
      "value": "experiences",
      "count": 1
  },
  {
      "value": "paying",
      "count": 1
  },
  {
      "value": "form",
      "count": 1
  },
  {
      "value": "happy",
      "count": 2
  },
  {
      "value": "hiltonforthestay",
      "count": 1
  },
  {
      "value": "saw",
      "count": 1
  },
  {
      "value": "through",
      "count": 1
  },
  {
      "value": "megaphonenews",
      "count": 1
  },
  {
      "value": "saad",
      "count": 1
  },
  {
      "value": "moujarad",
      "count": 1
  },
  {
      "value": "hosting",
      "count": 1
  },
  {
      "value": "year’s",
      "count": 1
  },
  {
      "value": "party",
      "count": 2
  },
  {
      "value": "beirut",
      "count": 2
  },
  {
      "value": "wonder",
      "count": 1
  },
  {
      "value": "normalize",
      "count": 1
  },
  {
      "value": "rapists",
      "count": 1
  },
  {
      "value": "management",
      "count": 1
  },
  {
      "value": "habtoor",
      "count": 1
  },
  {
      "value": "grand",
      "count": 2
  },
  {
      "value": "ushering",
      "count": 1
  },
  {
      "value": "presence",
      "count": 1
  },
  {
      "value": "organizing",
      "count": 1
  },
  {
      "value": "brings",
      "count": 1
  },
  {
      "value": "together",
      "count": 1
  },
  {
      "value": "saadlamjarred",
      "count": 1
  },
  {
      "value": "singers",
      "count": 1
  },
  {
      "value": "haifawehbe",
      "count": 1
  },
  {
      "value": "nader",
      "count": 1
  },
  {
      "value": "alatat",
      "count": 1
  },
  {
      "value": "kenya",
      "count": 1
  },
  {
      "value": "embassy",
      "count": 1
  },
  {
      "value": "ireland",
      "count": 1
  },
  {
      "value": "presents",
      "count": 1
  },
  {
      "value": "jamhuri",
      "count": 1
  },
  {
      "value": "airport",
      "count": 1
  },
  {
      "value": "dublin",
      "count": 1
  },
  {
      "value": "thursday",
      "count": 1
  },
  {
      "value": "15th",
      "count": 1
  },
  {
      "value": "dec",
      "count": 1
  },
  {
      "value": "6pm",
      "count": 1
  },
  {
      "value": "late",
      "count": 1
  },
  {
      "value": "music",
      "count": 1
  },
  {
      "value": "spaqz",
      "count": 2
  },
  {
      "value": "entertainment",
      "count": 3
  },
  {
      "value": "drinks",
      "count": 1
  },
  {
      "value": "djspaqz",
      "count": 1
  },
  {
      "value": "jamhuriday",
      "count": 1
  },
  {
      "value": "derby",
      "count": 1
  },
  {
      "value": "looking",
      "count": 1
  },
  {
      "value": "casual",
      "count": 1
  },
  {
      "value": "beverage",
      "count": 1
  },
  {
      "value": "assistant",
      "count": 1
  },
  {
      "value": "full",
      "count": 1
  },
  {
      "value": "job",
      "count": 1
  },
  {
      "value": "details",
      "count": 1
  },
  {
      "value": "here",
      "count": 1
  },
  {
      "value": "hospitalityjobs",
      "count": 1
  },
  {
      "value": "jobs",
      "count": 1
  },
  {
      "value": "gala",
      "count": 1
  },
  {
      "value": "dinner",
      "count": 3
  },
  {
      "value": "patronage",
      "count": 1
  },
  {
      "value": "deputy",
      "count": 1
  },
  {
      "value": "gebran",
      "count": 1
  },
  {
      "value": "bassil",
      "count": 1
  },
  {
      "value": "london",
      "count": 1
  },
  {
      "value": "double",
      "count": 3
  },
  {
      "value": "tree",
      "count": 1
  },
  {
      "value": "🇬🇧🇬🇧",
      "count": 1
  },
  {
      "value": "don’t",
      "count": 1
  },
  {
      "value": "miss",
      "count": 1
  },
  {
      "value": "التيارالوطنيالحر",
      "count": 1
  },
  {
      "value": "انتشار",
      "count": 1
  },
  {
      "value": "tayyarintishar",
      "count": 1
  },
  {
      "value": "amineelkhoury",
      "count": 1
  },
  {
      "value": "good",
      "count": 1
  },
  {
      "value": "morning",
      "count": 1
  },
  {
      "value": "breakfastclub",
      "count": 1
  },
  {
      "value": "did",
      "count": 1
  },
  {
      "value": "someone",
      "count": 1
  },
  {
      "value": "order",
      "count": 1
  },
  {
      "value": "service",
      "count": 2
  },
  {
      "value": "sneaky",
      "count": 1
  },
  {
      "value": "peaky",
      "count": 1
  },
  {
      "value": "got…",
      "count": 1
  },
  {
      "value": "roomservice",
      "count": 1
  },
  {
      "value": "gaymelb",
      "count": 1
  },
  {
      "value": "hungdaddy",
      "count": 1
  },
  {
      "value": "topbunk",
      "count": 1
  },
  {
      "value": "muscleguys",
      "count": 1
  },
  {
      "value": "breedhishole",
      "count": 1
  },
  {
      "value": "rawislaw",
      "count": 1
  },
  {
      "value": "arzana",
      "count": 2
  },
  {
      "value": "opens",
      "count": 1
  },
  {
      "value": "‘modern",
      "count": 1
  },
  {
      "value": "architecture",
      "count": 1
  },
  {
      "value": "pioneering",
      "count": 1
  },
  {
      "value": "design’",
      "count": 1
  },
  {
      "value": "conradrabatarzana",
      "count": 1
  },
  {
      "value": "reminder",
      "count": 1
  },
  {
      "value": "ready",
      "count": 1
  },
  {
      "value": "night",
      "count": 2
  },
  {
      "value": "credit",
      "count": 1
  },
  {
      "value": "promotion",
      "count": 1
  },
  {
      "value": "hiltonhonors",
      "count": 2
  },
  {
      "value": "every",
      "count": 1
  },
  {
      "value": "between",
      "count": 1
  },
  {
      "value": "count",
      "count": 1
  },
  {
      "value": "two",
      "count": 1
  },
  {
      "value": "nights",
      "count": 1
  },
  {
      "value": "loyalty",
      "count": 1
  },
  {
      "value": "being",
      "count": 1
  },
  {
      "value": "held",
      "count": 1
  },
  {
      "value": "near",
      "count": 1
  },
  {
      "value": "convention",
      "count": 1
  },
  {
      "value": "center",
      "count": 1
  },
  {
      "value": "topic",
      "count": 1
  },
  {
      "value": "body",
      "count": 1
  },
  {
      "value": "language",
      "count": 2
  },
  {
      "value": "interviewing",
      "count": 1
  },
  {
      "value": "see",
      "count": 3
  },
  {
      "value": "interv…httpstcorrcobfw6wy",
      "count": 1
  },
  {
      "value": "paris",
      "count": 5
  },
  {
      "value": "reveal",
      "count": 3
  },
  {
      "value": "they’ve",
      "count": 1
  },
  {
      "value": "been",
      "count": 1
  },
  {
      "value": "naughty",
      "count": 3
  },
  {
      "value": "nice",
      "count": 3
  },
  {
      "value": "celebrities",
      "count": 2
  },
  {
      "value": "theyve",
      "count": 2
  },
  {
      "value": "httpstcopz4yt5e0yv",
      "count": 1
  },
  {
      "value": "just",
      "count": 1
  },
  {
      "value": "experienced",
      "count": 1
  },
  {
      "value": "worst",
      "count": 1
  },
  {
      "value": "ever",
      "count": 1
  },
  {
      "value": "houston",
      "count": 1
  },
  {
      "value": "caesars",
      "count": 1
  },
  {
      "value": "casino",
      "count": 2
  },
  {
      "value": "only",
      "count": 1
  },
  {
      "value": "guilty",
      "count": 2
  },
  {
      "value": "former",
      "count": 1
  },
  {
      "value": "westgatelv",
      "count": 1
  },
  {
      "value": "paradiserd",
      "count": 1
  },
  {
      "value": "lasvegas",
      "count": 1
  },
  {
      "value": "nevada",
      "count": 2
  },
  {
      "value": "male",
      "count": 1
  },
  {
      "value": "employees",
      "count": 1
  },
  {
      "value": "ditto",
      "count": 1
  },
  {
      "value": "4their",
      "count": 1
  },
  {
      "value": "vacation",
      "count": 2
  },
  {
      "value": "costarica",
      "count": 1
  },
  {
      "value": "involved",
      "count": 1
  },
  {
      "value": "these",
      "count": 1
  },
  {
      "value": "types",
      "count": 1
  },
  {
      "value": "activities",
      "count": 1
  },
  {
      "value": "none",
      "count": 1
  },
  {
      "value": "wereare",
      "count": 1
  },
  {
      "value": "innocent",
      "count": 1
  },
  {
      "value": "tobecontinued",
      "count": 1
  },
  {
      "value": "sued",
      "count": 1
  },
  {
      "value": "photographer",
      "count": 2
  },
  {
      "value": "editing",
      "count": 2
  },
  {
      "value": "pics",
      "count": 1
  },
  {
      "value": "herself",
      "count": 2
  },
  {
      "value": "permission",
      "count": 1
  },
  {
      "value": "add",
      "count": 1
  },
  {
      "value": "sense",
      "count": 2
  },
  {
      "value": "excitement",
      "count": 1
  },
  {
      "value": "journey",
      "count": 1
  },
  {
      "value": "connect",
      "count": 1
  },
  {
      "value": "feelings",
      "count": 1
  },
  {
      "value": "relax",
      "count": 3
  },
  {
      "value": "listening",
      "count": 1
  },
  {
      "value": "saxophone",
      "count": 1
  },
  {
      "value": "musician",
      "count": 1
  },
  {
      "value": "jama",
      "count": 1
  },
  {
      "value": "lounge",
      "count": 1
  },
  {
      "value": "reservations",
      "count": 1
  },
  {
      "value": "inquiries",
      "count": 1
  },
  {
      "value": "call",
      "count": 1
  },
  {
      "value": "doubletreefinancialdistrict",
      "count": 1
  },
  {
      "value": "riyadh",
      "count": 1
  },
  {
      "value": "people",
      "count": 1
  },
  {
      "value": "recharge",
      "count": 2
  },
  {
      "value": "theyre",
      "count": 1
  },
  {
      "value": "talking",
      "count": 1
  },
  {
      "value": "wednesdaywisdom",
      "count": 1
  },
  {
      "value": "poolvibes",
      "count": 1
  },
  {
      "value": "poolside",
      "count": 1
  },
  {
      "value": "getaway",
      "count": 1
  },
  {
      "value": "hiltonmemories",
      "count": 1
  },
  {
      "value": "enjoy",
      "count": 2
  },
  {
      "value": "breakfast",
      "count": 1
  },
  {
      "value": "wine",
      "count": 1
  },
  {
      "value": "wednesday",
      "count": 1
  },
  {
      "value": "grill",
      "count": 1
  },
  {
      "value": "information",
      "count": 1
  },
  {
      "value": "hiltongardeninn",
      "count": 1
  },
  {
      "value": "westpalmbeach",
      "count": 1
  },
  {
      "value": "gardengrill",
      "count": 1
  },
  {
      "value": "winewednesday",
      "count": 1
  },
  {
      "value": "hotelrestaurant",
      "count": 1
  },
  {
      "value": "developed",
      "count": 1
  },
  {
      "value": "global",
      "count": 1
  },
  {
      "value": "program",
      "count": 1
  },
  {
      "value": "introduced",
      "count": 1
  },
  {
      "value": "standard",
      "count": 1
  },
  {
      "value": "cleanliness",
      "count": 1
  },
  {
      "value": "disinfection",
      "count": 1
  },
  {
      "value": "ensure",
      "count": 1
  },
  {
      "value": "even",
      "count": 1
  },
  {
      "value": "cleaner",
      "count": 1
  },
  {
      "value": "safer",
      "count": 1
  },
  {
      "value": "look",
      "count": 1
  },
  {
      "value": "forward",
      "count": 1
  },
  {
      "value": "seeing",
      "count": 1
  },
  {
      "value": "soon",
      "count": 3
  },
  {
      "value": "learn",
      "count": 1
  },
  {
      "value": "stocks",
      "count": 2
  },
  {
      "value": "buy",
      "count": 1
  },
  {
      "value": "wyndham",
      "count": 1
  },
  {
      "value": "playa",
      "count": 1
  },
  {
      "value": "hostresorts",
      "count": 1
  },
  {
      "value": "vailresorts",
      "count": 1
  },
  {
      "value": "investments",
      "count": 1
  },
  {
      "value": "russiaukrainewar",
      "count": 1
  },
  {
      "value": "russianwar",
      "count": 1
  },
  {
      "value": "ukraine",
      "count": 1
  },
  {
      "value": "caribbean",
      "count": 1
  },
  {
      "value": "latinamerica",
      "count": 1
  },
  {
      "value": "material",
      "count": 1
  },
  {
      "value": "palette",
      "count": 1
  },
  {
      "value": "warm",
      "count": 1
  },
  {
      "value": "wood",
      "count": 1
  },
  {
      "value": "tones",
      "count": 2
  },
  {
      "value": "accented",
      "count": 1
  },
  {
      "value": "darker",
      "count": 1
  },
  {
      "value": "natural",
      "count": 1
  },
  {
      "value": "stone",
      "count": 1
  },
  {
      "value": "complementary",
      "count": 1
  },
  {
      "value": "metal",
      "count": 1
  },
  {
      "value": "capturing",
      "count": 1
  },
  {
      "value": "mirroring",
      "count": 1
  },
  {
      "value": "magnificence",
      "count": 1
  },
  {
      "value": "sierra",
      "count": 1
  },
  {
      "value": "mountains",
      "count": 1
  },
  {
      "value": "httpstcoeqh6bkxowz",
      "count": 1
  },
  {
      "value": "waldorfastoria",
      "count": 1
  },
  {
      "value": "hotelindustry",
      "count": 1
  },
  {
      "value": "hotelopenings",
      "count": 1
  },
  {
      "value": "wishing",
      "count": 1
  },
  {
      "value": "magical",
      "count": 2
  },
  {
      "value": "holidays",
      "count": 2
  },
  {
      "value": "season",
      "count": 2
  },
  {
      "value": "wrap",
      "count": 1
  },
  {
      "value": "excited",
      "count": 1
  },
  {
      "value": "welcome",
      "count": 1
  },
  {
      "value": "back",
      "count": 1
  },
  {
      "value": "❤️🤍🌟",
      "count": 1
  },
  {
      "value": "happyholidays",
      "count": 1
  },
  {
      "value": "ontario",
      "count": 1
  },
  {
      "value": "cambridge",
      "count": 1
  },
  {
      "value": "newyear",
      "count": 1
  },
  {
      "value": "hello",
      "count": 1
  },
  {
      "value": "you’re",
      "count": 1
  },
  {
      "value": "last",
      "count": 1
  },
  {
      "value": "one",
      "count": 2
  },
  {
      "value": "best",
      "count": 1
  },
  {
      "value": "december2022",
      "count": 1
  },
  {
      "value": "christmastree",
      "count": 1
  },
  {
      "value": "hiltonbrightonmetropole",
      "count": 1
  },
  {
      "value": "metropole",
      "count": 1
  },
  {
      "value": "【live",
      "count": 1
  },
  {
      "value": "streaming】",
      "count": 1
  },
  {
      "value": "christian",
      "count": 2
  },
  {
      "value": "academy",
      "count": 2
  },
  {
      "value": "johnson",
      "count": 2
  },
  {
      "value": "high",
      "count": 1
  },
  {
      "value": "school",
      "count": 1
  },
  {
      "value": "girls",
      "count": 1
  },
  {
      "value": "basketball",
      "count": 2
  },
  {
      "value": "live®",
      "count": 1
  },
  {
      "value": "ᴄʟɪᴄᴋ",
      "count": 1
  },
  {
      "value": "ʜᴇʀᴇ",
      "count": 1
  },
  {
      "value": "live",
      "count": 1
  },
  {
      "value": "onlinefor",
      "count": 1
  },
  {
      "value": "post",
      "count": 1
  },
  {
      "value": "oak",
      "count": 1
  },
  {
      "value": "blvd",
      "count": 1
  },
  {
      "value": "location",
      "count": 1
  },
  {
      "value": "offers",
      "count": 1
  },
  {
      "value": "gorgeous",
      "count": 1
  },
  {
      "value": "arrival",
      "count": 1
  },
  {
      "value": "ballroom",
      "count": 1
  },
  {
      "value": "divides",
      "count": 1
  },
  {
      "value": "multiple",
      "count": 1
  },
  {
      "value": "sections",
      "count": 1
  },
  {
      "value": "can",
      "count": 1
  },
  {
      "value": "accommodate",
      "count": 1
  },
  {
      "value": "ceremony",
      "count": 1
  },
  {
      "value": "cocktail",
      "count": 1
  },
  {
      "value": "reception",
      "count": 1
  },
  {
      "value": "lunch",
      "count": 1
  },
  {
      "value": "contact",
      "count": 1
  },
  {
      "value": "wedding",
      "count": 1
  },
  {
      "value": "specialist",
      "count": 1
  },
  {
      "value": "chris",
      "count": 1
  },
  {
      "value": "swetnam",
      "count": 1
  },
  {
      "value": "weddingwednesday",
      "count": 1
  },
  {
      "value": "opening",
      "count": 1
  },
  {
      "value": "making",
      "count": 1
  },
  {
      "value": "parrot",
      "count": 1
  },
  {
      "value": "papegaai",
      "count": 1
  },
  {
      "value": "aruba",
      "count": 1
  },
  {
      "value": "httpstcomofxqtpws6",
      "count": 1
  },
  {
      "value": "conradrabat",
      "count": 1
  },
  {
      "value": "luxuryhotels",
      "count": 1
  },
  {
      "value": "melatonin",
      "count": 1
  },
  {
      "value": "stupor",
      "count": 1
  },
  {
      "value": "“thats",
      "count": 1
  },
  {
      "value": "crazy",
      "count": 1
  },
  {
      "value": "got",
      "count": 1
  },
  {
      "value": "appear",
      "count": 1
  },
  {
      "value": "commercial",
      "count": 1
  },
  {
      "value": "traveling",
      "count": 1
  },
  {
      "value": "pittsburgh",
      "count": 3
  },
  {
      "value": "area",
      "count": 1
  },
  {
      "value": "sometime",
      "count": 1
  },
  {
      "value": "check",
      "count": 1
  },
  {
      "value": "review",
      "count": 1
  },
  {
      "value": "cranberry",
      "count": 1
  },
  {
      "value": "hotelreview",
      "count": 1
  },
  {
      "value": "pennsylvania",
      "count": 1
  },
  {
      "value": "httpstcoyhlvr9m17m",
      "count": 1
  },
  {
      "value": "ladaniniela3ro",
      "count": 1
  },
  {
      "value": "grasias",
      "count": 1
  },
  {
      "value": "shots",
      "count": 1
  },
  {
      "value": "vamosargentina",
      "count": 1
  },
  {
      "value": "hoynomañanachance",
      "count": 1
  },
  {
      "value": "themofokincrib",
      "count": 1
  },
  {
      "value": "fifaworldcup",
      "count": 1
  },
  {
      "value": "tits",
      "count": 1
  },
  {
      "value": "before",
      "count": 1
  },
  {
      "value": "fucking",
      "count": 1
  },
  {
      "value": "culture",
      "count": 1
  },
  {
      "value": "winnipeg",
      "count": 1
  },
  {
      "value": "revolves",
      "count": 1
  },
  {
      "value": "helping",
      "count": 1
  },
  {
      "value": "community",
      "count": 1
  },
  {
      "value": "recently",
      "count": 1
  },
  {
      "value": "made",
      "count": 1
  },
  {
      "value": "staff",
      "count": 1
  },
  {
      "value": "christmascheerboard",
      "count": 1
  },
  {
      "value": "diabetescanada",
      "count": 1
  },
  {
      "value": "help",
      "count": 1
  },
  {
      "value": "brighter",
      "count": 1
  },
  {
      "value": "everyone",
      "count": 1
  },
  {
      "value": "wecare",
      "count": 1
  },
  {
      "value": "whg",
      "count": 1
  },
  {
      "value": "wearehospitality",
      "count": 1
  }
]

const SimpleCloud = () => {
  const [minSize, setMinSize] = useState(5)
  const [maxSize, setMaxSize] = useState(100)
  const [data, setData] = useState(defaultData)
  const [randomColor, setRandomColor] = useState(true)
  const [shuffle, setShuffle] = useState(true)
  return (
    <div className={Controls}>
      <div >
        <div>
          <span>Min</span>
          <input
            type="number"
            min={0}
            value={minSize}
            onChange={(e) => setMinSize(parseInt(e.target.value, 10))}
          />
        </div>
        <div>
          <span>Max</span>
          <input
            type="number"
            min={0}
            value={maxSize}
            onChange={(e) => setMaxSize(parseInt(e.target.value, 10))}
          />
        </div>
        <div>
          <span>Shuffle</span>
          <input
            type="checkbox"
            checked={shuffle}
            onChange={() => setShuffle(!shuffle)}
          />
        </div>
        <div>
          <span>Color</span>
          <input
            type="checkbox"
            checked={randomColor}
            onChange={() => setRandomColor(!randomColor)}
          />
        </div>
        <div>
          <button onClick={() => setData(data.slice(0, -1))}>Pop</button>
        </div>
      </div>
      <TagCloud
        minSize={minSize}
        maxSize={maxSize}
        tags={data}
        shuffle={shuffle}
        disableRandomColor={!randomColor}
        // className={WordCloud}
        onClick={(tag) => {
          const value = prompt('Edit tag value', tag.value)
          if (value == null) {
            return
          }
          const newTag = { value, count: tag.count }
          const newData = data.map((t) => {
            if (t.value === tag.value) {
              return newTag
            }
            return t
          })
          setData(newData)
        }}
      />
    </div>
  )
}

export default SimpleCloud