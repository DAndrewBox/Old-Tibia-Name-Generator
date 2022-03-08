function createRandomName(lenght, ofWorld, title) {
  let name = "";
  const vocals = ["a", "e", "i", "o", "u"];
  const consonants = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"];

  for (var i = 0; i < lenght; i++) {
    if (i % 2 !== 0) {
      name += vocals[Math.floor(Math.random() * vocals.length)];
    } else {
      name += consonants[Math.floor(Math.random() * consonants.length)];
    }
  }

  name = name.charAt(0).toUpperCase() + name.slice(1);

  // If has title
  if (title) {
    const titles = ["Lord", "Dark", "Mistress", "King", "Queen", "Lady", "Mister"];
    name = titles[Math.floor(Math.random() * titles.length)] + " " + name;
  }

  // If has "of world" at the end
  if (ofWorld) {
    const world = ["Adra", "Alumbra", "Antica", "Ardera", "Astera", "Bastia", "Batabra", "Belobra", "Bona", "Cadebra", "Calmera", "Celebra", "Celesta", "Collabra", "Damora", "Descubra", "Dibra", "Epoca", "Famosa", "Fera", "Ferobra", "Firmera", "Gentebra", "Gladera", "Harmonia", "Havera", "Honbra", "Illusera", "Impulsa", "Inabra", "Kalibra", "Karna", "Libertabra", "Lobera", "Luminera", "Lutabra", "Marbera", "Marcia", "Menera", "Monza", "Mudabra", "Mykera", "Nefera", "Nossobra", "Ocebra", "Olima", "Ombra", "Optera", "Pacera", "Peloria", "Premia", "Quelibra", "Quintera", "Refugia", "Reinobra", "Seanera", "Secura", "Serdebra", "Solidera", "Suna", "Talera", "Tembra", "Thyria", "Trona", "Utobra", "Venebra", "Versa", "Visabra", "Vunira", "Wintera", "Wizera", "Xandebra", "Yonabra", "Zenobra", "Zuna", "Zunera"];
    name = name + " of " + world[Math.floor(Math.random() * world.length)];
  }

  return name;
}

// Add a button listener to generate a random name
document.getElementById("btn-new-name").addEventListener("click", function() {
  const ofWorld = (document.getElementById("checkbox-ofWorld").checked);
  const title = (document.getElementById("checkbox-title").checked);

  // Search for div on html and replace it with the random name
  const inputbox = document.getElementById("name-box");
  inputbox.setAttribute('value', createRandomName(3 + Math.random() * 5, ofWorld, title));
});