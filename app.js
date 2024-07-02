function createRandomName(lenght, ofWorld, title, useWorldsType) {
  let name = "";
  const vocals = ["a", "e", "i", "o", "u"];
  const consonants = [
    "b",
    "c",
    "d",
    "f",
    "g",
    "h",
    "j",
    "k",
    "l",
    "m",
    "n",
    "p",
    "q",
    "r",
    "s",
    "t",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  const mixed_consonants = [
    "nt",
    "ck",
    "ch",
    "ll",
    "tt",
    "bl",
    "cl",
    "fl",
    "gl",
    "pl",
    "sl",
    "br",
    "cr",
    "dr",
    "fr",
    "gr",
    "pr",
    "tr",
    "sc",
    "sk",
    "sm",
    "sn",
    "sp",
    "st",
    "sw",
    "tw",
  ];

  for (var i = 0; i < lenght; i++) {
    if (i % 2 !== 0) {
      name += vocals[Math.floor(Math.random() * vocals.length)];
    } else {
      if (Math.random() <= 0.5) {
        name +=
          mixed_consonants[Math.floor(Math.random() * mixed_consonants.length)];
      } else {
        name += consonants[Math.floor(Math.random() * consonants.length)];
      }
    }
  }

  name = name.charAt(0).toUpperCase() + name.slice(1);

  // If has title
  if (title) {
    const titles = [
      "Lord",
      "Dark",
      "Mistress",
      "King",
      "Queen",
      "Lady",
      "Mister",
    ];
    name = titles[Math.floor(Math.random() * titles.length)] + " " + name;
  }

  // If has "of world" at the end
  if (ofWorld) {
    const olderWorlds = [
      "Adra",
      "Aldora",
      "Alumbra",
      "Amera",
      "Arcania",
      "Ardera",
      "Askara",
      "Assombra",
      "Aurea",
      "Aurera",
      "Aurora",
      "Azura",
      "Balera",
      "Bastia",
      "Batabra",
      "Bellona",
      "Belluma",
      "Beneva",
      "Berylia",
      "Cadebra",
      "Calva",
      "Calvera",
      "Candia (Game World)",
      "Carnera",
      "Chimera",
      "Chrona",
      "Concorda",
      "Cosera",
      "Danera",
      "Danubia",
      "Dibra",
      "Dolera",
      "Duna",
      "Efidia",
      "Eldera",
      "Elera",
      "Elysia",
      "Emera",
      "Empera",
      "Estela",
      "Eternia",
      "Faluna",
      "Famosa",
      "Fera",
      "Fervora",
      "Fidera",
      "Fortera",
      "Funera",
      "Furia",
      "Furora",
      "Galana",
      "Garnera",
      "Grimera",
      "Guardia",
      "Helera",
      "Hiberna",
      "Honera",
      "Hydera",
      "Illusera",
      "Impera",
      "Inferna",
      "Iona",
      "Iridia",
      "Irmada",
      "Isara",
      "Jamera",
      "Javibra",
      "Jonera",
      "Julera",
      "Justera",
      "Juva",
      "Karna",
      "Keltera",
      "Kenora",
      "Kronera",
      "Kyra",
      "Laudera",
      "Libera",
      "Libertabra",
      "Lucera",
      "Lunara",
      "Macabra",
      "Magera",
      "Malvera",
      "Marbera",
      "Marcia",
      "Mercera",
      "Mitigera",
      "Morgana",
      "Morta",
      "Mortera",
      "Mudabra",
      "Mythera",
      "Nebula",
      "Neptera",
      "Nerana",
      "Nexa",
      "Nika",
      "Noctera",
      "Nossobra",
      "Nova",
      "Obsidia",
      "Ocebra",
      "Ocera",
      "Olera",
      "Olima",
      "Olympa",
      "Optera",
      "Osera",
      "Pacembra",
      "Pandoria",
      "Panthebra",
      "Panthena",
      "Panthera",
      "Pyra",
      "Pythera",
      "Quilia",
      "Ragna",
      "Reinobra",
      "Relania",
      "Relembra",
      "Rowana",
      "Rubera",
      "Samera",
      "Saphira",
      "Seanera",
      "Selena",
      "Serenebra",
      "Shanera",
      "Shivera",
      "Silvera",
      "Solera",
      "Suna",
      "Tavara",
      "Tembra",
      "Tenebra",
      "Thera",
      "Thoria",
      "Titania",
      "Torpera",
      "Tortura",
      "Trimera",
      "Trona",
      "Umera",
      "Unica",
      "Unisera",
      "Unitera",
      "Valoria",
      "Veludera",
      "Verlana",
      "Versa",
      "Vinera",
      "Visabra",
      "Vita",
      "Wizera",
      "Xandebra",
      "Xantera",
      "Xerena",
      "Xylana",
      "Xylona",
      "Yanara",
      "Ysolera",
      "Zanera",
      "Zeluna",
      "Zenobra",
    ];
    const newerWorlds = [
      "Ambra",
      "Antica",
      "Astera",
      "Axera",
      "Belobra",
      "Bombra",
      "Bona",
      "Calmera",
      "Castela",
      "Celebra",
      "Celesta",
      "Collabra",
      "Damora",
      "Descubra",
      "Dia",
      "Epoca",
      "Esmera",
      "Etebra",
      "Ferobra",
      "Firmera",
      "Flamera",
      "Gentebra",
      "Gladera",
      "Gravitera",
      "Guerribra",
      "Harmonia",
      "Havera",
      "Honbra",
      "Impulsa",
      "Inabra",
      "Issobra",
      "Jacabra",
      "Jadebra",
      "Jaguna",
      "Kalibra",
      "Kardera",
      "Kendria",
      "Lobera",
      "Luminera",
      "Lutabra",
      "Menera",
      "Monza",
      "Mykera",
      "Nadora",
      "Nefera",
      "Nevia",
      "Obscubra",
      "Oceanis",
      "Ombra",
      "Ousabra",
      "Pacera",
      "Peloria",
      "Premia",
      "Pulsera",
      "Quelibra",
      "Quintera",
      "Rasteibra",
      "Refugia",
      "Retalia",
      "Runera",
      "Secura",
      "Serdebra",
      "Solidera",
      "Stralis",
      "Syrena",
      "Talera",
      "Thyria",
      "Tornabra",
      "Ulera",
      "Unebra",
      "Ustebra",
      "Utobra",
      "Vandera",
      "Venebra",
      "Victoris",
      "Vitera",
      "Vunira",
      "Wadira",
      "Wildera",
      "Wintera",
      "Yara",
      "Yonabra",
      "Yovera",
      "Yubra",
      "Zephyra",
      "Zuna",
      "Zunera",
    ];
    const worldsToUse =
      useWorldsType === "0"
        ? olderWorlds
        : useWorldsType === "1"
        ? newerWorlds
        : olderWorlds.concat(newerWorlds);

    name =
      name +
      " of " +
      worldsToUse[Math.floor(Math.random() * worldsToUse.length)];
  }

  return name;
}

// Add a button listener to generate a random name
document.getElementById("btn-new-name").addEventListener("click", function () {
  const ofWorld = document.getElementById("checkbox-ofWorld").checked;
  const title = document.getElementById("checkbox-title").checked;
  const useNewerWorlds = document.getElementById("select-WorldsType").value;

  // Search for div on html and replace it with the random name
  const inputbox = document.getElementById("name-box");
  inputbox.setAttribute(
    "value",
    createRandomName(3 + Math.random() * 5, ofWorld, title, useNewerWorlds)
  );
});

// Copy name on click input
document.getElementById("name-box").onclick = function() {
  if (!document.getElementById("name-box").value) return;
  this.select();
  document.execCommand('copy');
  alert('Name copied to Clipboard!');
}

const bgImage = document.getElementById("background-image");
const bgImageRNG = Math.random();
var bgImageIndex = 0;

for (var i = 0; i < 5; i++) {
  if (bgImageRNG <= i * 0.2) {
    bgImageIndex = i;
    break;
  }
}

bgImage.style.backgroundImage =
  "url('./images/backgrounds/bg" + bgImageIndex + ".jpg')";
bgImage.style.backgroundSize = "cover";
