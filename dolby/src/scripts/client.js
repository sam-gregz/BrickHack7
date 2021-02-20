const rndNames = [
  "Alice",
  "Bob",
  "Charlie",
  "Doris",
  "Elsa",
]
let randomName = rndNames[Math.floor(Math.random() * rndNames.length)]

const main = async () => {
  VoxeetSDK.initialize("pIkk6kBI5SsPRYkRIgW-sQ==", "dgN85W4fczALAAitnLER0dtAMShxyTMHVqDrXxmRugY=")
  try {
    // Open the session here!!!
    await VoxeetSDK.session.open({ name: randomName })
    initUI();
  } catch (e) {
    alert('ah! Something went wrong : ' + e)
  }
}

main()
