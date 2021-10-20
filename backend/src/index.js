const { app, PORT } = require("./app");


function main() {
  app.listen(PORT, () => {
    console.log(`http://localhost:${PORT} ZOMBIES BACKEND 🧟`)
  })
}


main();