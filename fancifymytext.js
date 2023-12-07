function showAlert() {
    alert("Hello, world!");
}

function biggerText() {
    document.getElementById("inputText").style.fontSize = "24pt";
}

function applyStyle() {
    var textArea = document.getElementById("inputText");
    var fancyRadio = document.getElementById("fancyRadio");

    if (fancyRadio.checked) {
        textArea.style.fontWeight = "bold";
        textArea.style.color = "blue";
        textArea.style.textDecoration = "underline";
    } else {
        textArea.style.fontWeight = "normal";
        textArea.style.color = "black";
        textArea.style.textDecoration = "none";
    }
}

function mooText() {
    var textArea = document.getElementById("inputText");
    var textArray = textArea.value.split(". ");
    
    for (var i = 0; i < textArray.length; i++) {
        var words = textArray[i].split(" ");
        words[words.length - 1] = words[words.length - 1].toUpperCase() + "-Moo";
        textArray[i] = words.join(" ");
    }

    textArea.value = textArray.join(". ");
}
