import html from 'snabby'

function tag (strs, ...args) {
  const strings = strs.raw.map(item => item.replace(/\r?\n\s.*?(>|<)/g, '$1'))
  return html(strings, ...args)
}

export default tag
