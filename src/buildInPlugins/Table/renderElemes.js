export const renderTableConf = {
  type: 'table',
  render (option, htmlToVnode, renderChildren) {
    const { children = [] } = option
    return htmlToVnode`
      <table data-key="${option.key}" data-node="table">
        <tbody>${children.map(renderChildren)}</tbody>
      </table>
    `
  }
}


export const renderTableRowConf = {
  type: 'tableRow',
  render (option, htmlToVnode, renderChildren) {
    const { children = [] } = option
    return htmlToVnode`<tr data-key="${option.key}" data-node="tableRow">${children.map(renderChildren)}</tr>`
  }
}


export const renderTableColumnConf = {
  type: 'tableColumn',
  render (option, htmlToVnode, renderChildren) {
    const { children = [] } = option
    return htmlToVnode`<td data-key="${option.key}" data-node="tableColumn">${children[0].text}</td>`
  }
} 