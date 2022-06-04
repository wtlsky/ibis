export const renderTableConf = {
  type: 'table',
  render (option, htmlToVnode, editor) {
    const { children } = option
    return htmlToVnode`<table data-key="${option.key}" data-node="table"></table>`
  }
} 


export const renderTableRowConf = {
  type: 'tableRow',
  render (option, htmlToVnode, editor) {
    const { children } = option
    return htmlToVnode`<tr data-key="${option.key}" data-node="tableRow"></tr>`
  }
} 


export const renderTableColumnConf = {
  type: 'tableColumn',
  render (option, htmlToVnode, editor) {
    const { children } = option
    return htmlToVnode`<td data-key="${option.key}" data-node="tableColumn">${children[0].text}</td>`
  }
} 