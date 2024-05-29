const leftBtn = document.querySelector(".left")
const rightBtn = document.querySelector(".right")
const container = document.querySelector(".container")

leftBtn.addEventListener("mouseenter", () => {
  container.classList.add("hover-left")
})
leftBtn.addEventListener("mouseleave", () => {
  container.classList.remove("hover-left")
})

rightBtn.addEventListener("mouseenter", () => {
  container.classList.add("hover-right")
})

rightBtn.addEventListener("mouseleave", () => {
  container.classList.remove("hover-right")
})
