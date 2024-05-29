//open API https://icanhazdadjoke.com/api

const buttons = document.querySelectorAll(".faq-toggle")

buttons.forEach((button) =>
  button.addEventListener("click", function () {
    button.parentNode.classList.toggle("active")
  })
)
