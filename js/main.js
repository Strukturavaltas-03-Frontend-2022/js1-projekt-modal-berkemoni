// A modal változója
var modal = document.getElementById("myModal");

// A nyitó gomb elem változója
var btn = document.getElementById("myBtn");

// A bezáró <span> elem változója
var span = document.getElementsByClassName("close")[0];

// A láblécgomb elemek változója
let footer = document.getElementsByClassName("modal-footer")[0];

// A gombra kattintáskor megnyitja a modalt. 
btn.onclick = function() {
  modal.style.display = "block";
}

// A megnyílásakor a modal kerül a focusba.
modal.focus = function() {      
    document.getElementsByClassName("modal-title").focus();
}

// Az x-re kattintáskor bezárja a modalt.
span.onclick = function() {
  modal.style.display = "none";
}

// A láblécgombokra kattintáskor bezárja a modalt.
footer.onclick = function() {
    modal.style.display = "none";
  }

// A modalon kívülre kattintáskor bezárja a modalt.
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}