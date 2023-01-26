function removeWord() {
  var input = document.getElementById("input").value;
  var lines = input.split("\n");
  var newText = "";
  var wordToRemove = prompt("Enter word to remove:");

  for (var i = 0; i < lines.length; i++) {
    var words = lines[i].split(wordToRemove);
    lines[i] = words.join(" ");
    if (lines[i].endsWith(wordToRemove)) {
    var words = lines[i].split(wordToRemove);
    lines[i] = words.join(" ");
    }
  }

    for (var j = 0; j < words.length; j++) {
      if (words[j].indexOf(wordToRemove) !== -1) {
        var index = words[j].indexOf(wordToRemove) + wordToRemove.length;
        words[j] = words[j].substring(0, index);
        break;
      }
    }

    newText += words.join(" ") + "<br>";
  }

  document.getElementById("output").innerHTML = newText;
}
