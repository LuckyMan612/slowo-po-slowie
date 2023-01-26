const input = document.getElementById("input");
const wordToRemove = document.getElementById("wordToRemove");
const removeWord = document.getElementById("removeWord");
const output = document.getElementById("output");

removeWord.addEventListener("click", function() {
  let text = input.value;
  let removedWord = wordToRemove.value;
  let lines = text.split("\n");
  let newText = "";
  for (let line of lines) {
    let newLine = line.replace(removedWord, "");
    newText += newLine + "<br>";
  }
  output.innerHTML = newText;
});
