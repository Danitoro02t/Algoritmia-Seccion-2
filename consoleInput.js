const readline = require("node:readline");
const { stdin, stdout } = require("node:process");

const terminal = readline.createInterface({ input: stdin, output: stdout });
const lines = [];
const waiting = [];
let closed = false;

terminal.on("line", (line) => {
  const resolve = waiting.shift();
  if (resolve) {
    resolve(line);
  } else {
    lines.push(line);
  }
});

terminal.on("close", () => {
  closed = true;
  while (waiting.length > 0) {
    waiting.shift()(undefined);
  }
});

function ask(prompt) {
  stdout.write(prompt);

  if (lines.length > 0) {
    return Promise.resolve(lines.shift());
  }
  if (closed) {
    return Promise.resolve(undefined);
  }

  return new Promise((resolve) => waiting.push(resolve));
}

function close() {
  terminal.close();
}

module.exports = { ask, close };
