const input = document.getElementById("input");
const wordToRemove = document.getElementById("wordToRemove");
const removeWord = document.getElementById("removeWord");
const output = document.getElementById("output");

removeWord.addEventListener("click", function() {
  let text = input.value;
  let removedWord = wordToRemove.value;
  let newText = text.replace(removedWord, "");
  output.innerHTML = newText;
});
