function caesarCipher(text, key, isEncoding = true) {
  let result = "";
  if (!isEncoding) key = -key;

  for (let char of text) {
    if (/[a-zA-Z]/.test(char)) {
      let base = char === char.toUpperCase() ? 65 : 97;
      result += String.fromCharCode((char.charCodeAt(0) - base + key + 26) % 26 + base);
    } else {
      result += char;
    }
  }

  return result;
}

function processMessage() {
  const mode = document.getElementById("mode").value;
  const message = document.getElementById("message").value;
  const key = parseInt(document.getElementById("key").value);
  const output = document.getElementById("output");

  if (!message || isNaN(key)) {
    output.textContent = "Please enter both a message and a key.";
    return;
  }

  const result = caesarCipher(message, key, mode === "encode");
  output.textContent = result;
}
