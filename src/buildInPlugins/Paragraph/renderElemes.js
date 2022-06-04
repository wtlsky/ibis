export const renderParagraphConf = {
  type: 'paragraph',
  render (option, htmlToVnode, editor) {
    const { children } = option
    const vnode = htmlToVnode`<p data-key="${option.key}" data-node="paragraph">${children[0].text}</p>`
    vnode.key = option.key
    return vnode
  }
} 
