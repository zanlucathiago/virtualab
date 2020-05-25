function formSubmit(event) {
  // const url = "http://192.168.0.18:5000/api/mail/send"
  const url = "https://infinite-atoll-82278.herokuapp.com/api/mail/send"
  var request = new XMLHttpRequest();
  request.open('POST', url, true);
  const image = document.createElement('img')

  request.onload = function() { // request successful
    // we can use server response to our request now
    console.log(request.responseText);
    image.remove()
    myFunction()
  };

  // request.onerror = function() {
    // request failed
  // };

  const form = document.getElementById('contact-form')
  image.setAttribute('src', "images/enviando.gif")
  image.className += "spinner"
  form.appendChild(image)
  request.send(new FormData(event.target)); // create FormData from form that triggered event
  event.preventDefault();
}

// and you can attach form submit event like this for example
function attachFormSubmitEvent(formId){
  document.getElementById(formId).addEventListener("submit", formSubmit);
}

attachFormSubmitEvent("contact-form")

function myFunction() {
  var x = document.getElementById("snackbar");
  x.className = "show";
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}
