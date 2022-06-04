import html from 'snabby'

function tag (strs, ...args) {
  const strings = strs.raw.map(item => item.replace(/\r?\n\s.*?(>|<)/g, '$1'))
  console.log(strings)
  return html(strings, ...args)
}

export default tag
