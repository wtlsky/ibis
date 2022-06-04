export const renderParagraphConf = {
  type: 'paragraph',
  render (option, htmlToVnode, editor) {
    const { children } = option
    return htmlToVnode`<p data-key="${option.key}" data-node="paragraph">${children[0].text}</p>`
  }
} 