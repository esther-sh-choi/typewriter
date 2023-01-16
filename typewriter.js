const sentence = "hello there from lighthouse labs";

for (const [index, char] of Object.entries(sentence)) {
  setTimeout(() => {
    if (Number(index) === sentence.length - 1) {
      process.stdout.write(`${char}\n`);
    } else {
      process.stdout.write(char);
    }
  }, index * 50);
}
