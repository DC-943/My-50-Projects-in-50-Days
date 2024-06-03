//open API https://icanhazdadjoke.com/api

const counters = document.querySelectorAll(".counter")

counters.forEach((counter) => {
  counter.innerText = "0"
  const updateCount = () => {
    const target = +counter.getAttribute("data-target")
    console.log(typeof target, target)
    //+ transform string to number
    const c = +counter.innerText
    const increment = target / 1000
    console.log(increment)
    if (c < target) {
      counter.innerText = `${Math.ceil(c + increment)}`
      setTimeout(updateCount, 1)
      console.log(counter.innerText)
    } else {
      counter.innerText = target
    }
  }
  setTimeout(updateCount, 1)
  //updateCount()
})
