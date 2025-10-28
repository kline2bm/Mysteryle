const _dateTime = document.getElementById("_dateTime"), _birthday = document.getElementById("_birthday");
setInterval(_ => _dateTime.innerText = new Date().toString().split(" GMT")[0], 1_000);
const BIRTHDAYS = [
  // January
  [
    [12, "rockratzero"],
    [16, "Panthera"],
    [23, "Mathpesto"]
  ],
  // February
  [
    [10, "Andrewsarchus"],
    [14, "Palfly Kampling"],
    [17, "it_is_donatello_86"],
    [20, "Olima"],
    [25, "Yoshi Baroshi"]
  ],
  // March
  [
    [29, "Missing a few cards"]
  ],
  // April
  [
    [3, "AnalyticalNinja"],
    [13, "Scott Strosahl"],
    [25, "Malrog"],
    [29, "Mitchell"]
  ],
  // May
  [
    [3, "Bryce Kline"],
    [28, "SamuPiano"]
  ],
  // June
  [
    [20, "Sven (Killroy)"]
  ],
  // July
  [
    [3, "Peachy and Rhonda"],
    [4, "Solver Tom"],
    [7, "I Love Sleeping - Leeor"],
    [10, "Matt y Ddraig"],
    [30, "Wisteria"]
  ],
  // August
  [
    [4, "Ambrose"],
    [10, "Yura (Chameleon)"],
    [25, "Piatato"],
    [26, "Dumediat"],
    [30, "Raumplaner"]
  ],
  // September
  [
    [7, "Myxo"],
    [17, "AkashG23"],
    [18, "Lilly Clamage"],
    [23, "Bellsita"],
    [29, "heliopolix"],
    [30, "MaverickJd and Rangsk (David Clamage)"]
  ],
  // October
  [
    [11, "RockyRoer"],
    [14, "Timotab"],
    [16, "Chilly"],
    [26, "mnasti2"],
  ],
  // November
  [
    [23, "Fulldeck"]
  ],
  // December
  [
    [1, "Bremster"],
    [2, "Many_Splendored"],
    [3, "Aspartagcus"],
    [9, "TheAsylm"],
    [14, "Virtual"],
    [30, "Sfushidahardy"]
  ]
];
let today = new Date();
let month = BIRTHDAYS[today.getMonth()];
for(day of month) {
  if(day[0] == today.getDate()) {
    _birthday.style.setProperty("display", "block");
    _birthday.querySelector("span").innerText = day[1];
    break;
  }
}
