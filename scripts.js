document.getElementById("terminate").addEventListener("click", setBackGroundColorToRandomColor);
/*
      Generation of random color is directly taken from this site:
      https://css-tricks.com/snippets/javascript/random-hex-color/
     */
function setBackGroundColorToRandomColor() {
    let randomColor = Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor = "#" + randomColor;
}