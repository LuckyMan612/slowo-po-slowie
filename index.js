function removeWord() {
  // Pobieranie danych z formularza
  var text = document.getElementById("textInput").value;
  var word = document.getElementById("wordToRemove").value;
  
  // Usuwanie słowa
  var newText = text.replace(word, "");
  
  // Wyświetlanie wyniku
  document.getElementById("output").innerHTML = newText;
}
