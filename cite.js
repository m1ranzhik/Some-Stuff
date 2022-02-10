window.onload = function() {
  const check = word => {
    if (word.length > 8) {
      return '<span class="hightlight">' + word + '</span>'
    } else {
      return word
    }
  }

  const sample = document.querySelector("#text")
  text.innerHTML = text
    .innerText
    .trim()
    .split(' ')
    .map(check)
    .join(' ')
}

Array.from(document.querySelectorAll('p'))
.forEach(p => {
  p.innerHTML = p.innerHTML
  .replace(/\?/g, '🤔')
  .replace(/\!/g, '😲')
})
