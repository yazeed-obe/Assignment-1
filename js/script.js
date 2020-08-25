function myFunction() {
  var x = document.getElementById("navbar");
  if (x.className === "navbar") {
    x.className += " responsive";
  } else {
    x.className = "navbar";
  }
}


// Get The Id
var topPage = document.getElementById(`top-page`)

// On Click, Scroll to the Top of Page
topPage.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' })

// On scroll, Show/Hide the button
window.onscroll = () => {
  window.scrollY > 500
    ? (topPage.style.display = `block`)
    : (topPage.style.display = `none`)
}