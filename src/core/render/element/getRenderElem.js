function defaultRender (elemNode, children, editor) {
  return 
}

function getRenderElem(type) {
  const fn = RENDER_ELEM_CONF[type]
  return fn || defaultRender
}

export default getRenderElem
