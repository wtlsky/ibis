import renderElement from './element/renderElement'
import renderText from './text/renderText'

export default function node2Vnode (node, index, parent, editor) {
  const isElement = editor.isElement(node)

  let vnode = null
  if (isElement) {
    vnode = renderElement(node, editor)
  } else {
    vnode = renderText(node, editor)
  }
  return vnode
}
