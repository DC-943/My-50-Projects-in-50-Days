//open API https://icanhazdadjoke.com/api

const tagsEL = document.getElementById("tags")
const textarea = document.getElementById("textarea")

textarea.focus()

textarea.addEventListener("keyup", (e) => {
  createTags(e.target.value)

  if (e.key === "Enter") {
    setTimeout(() => {
      e.target.value = ""
    }, 10)
    randomSelect()
  }
})

function createTags(input) {
  const tags = input
    .split(",")
    .filter((tag) => tag.trim() !== "")
    .map((tag) => tag.trim())
  console.log(tags)
  tagsEL.innerHTML = ""
  tags.forEach((tag) => {
    const tagEl = document.createElement("span")
    tagEl.classList.add("tag")
    tagEl.innerText = tag
    tagsEL.appendChild(tagEl)
  })
}

function randomSelect() {
  const times = 30
  const interval = setInterval(() => {
    const randomTag = pickRandomTag()
    console.log("randomTag:", randomTag)
    highlightTag(randomTag)
    setTimeout(() => {
      unHighlightTag(randomTag)
    }, 100)
  }, 100)

  setTimeout(() => {
    clearInterval(interval)
    setTimeout(() => {
      const randomTag = pickRandomTag()
      highlightTag(randomTag)
    }, 100)
  }, times * 100)
}

function pickRandomTag() {
  const tags = document.querySelectorAll(".tag")
  //random gives value between 0 and 1
  return tags[Math.floor(Math.random() * tags.length)]
}

function highlightTag(tag) {
  console.log("before tag.classList:", tag.classList)
  tag.classList.add("highlight")
  console.log("after tag.classList:", tag.classList)
}

function unHighlightTag(tag) {
  tag.classList.remove("highlight")
}
