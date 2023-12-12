const process = require("process");
const { Z_ASCII } = require("zlib");
const commands = require("./commands/index.js");

function print(output) {
  const stringOutput = output.toString();
  // Convertir a string si no lo es
  process.stdout.write(stringOutput);
  process.stdout.write("\nprompt > ");
  // process.stdout.write(output);
  // process.stdout.write("\nprompt > ");
}

function bash() {
  process.stdout.write("prompt > ");

  // Agregar stdin.on para escuchar lo que el  usuario escribe..
  process.stdin.on("data", (data) => {
    //  Convertimos la data a string y le eliminamos los espacios al final y principio.

    let args = data.toString().trim();
    //  Creamos la variable y guardamos la primera palabra del string (echo)
    // args -> "echo hola mundo"
    // args.split -> ["echo", "hola", "mundo"]
    let [cmd, ...others] = args.split(" ");

    //  Verificamos si el comando no existe en el objeto cmd?
    if (!commands[cmd]) {
      print(`command not found: ${cmd}`);

      // Si existe ejecutamos la funcion correspondiente
    } else {
      let argString = others.join(" ");
      commands[cmd](print, argString);
    }
  });
}
bash();

module.exports = {
  print,
  bash,
};
