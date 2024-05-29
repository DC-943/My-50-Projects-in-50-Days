const labels = document.querySelectorAll(".form-control label")

labels.forEach((label) => {
  label.innerHTML = label.innerText
    .split("")
    .map(
      (letter, key) =>
        `<span style="transition-delay:${key * 50}ms">${letter}</span>`
    )
    .join("")
})
