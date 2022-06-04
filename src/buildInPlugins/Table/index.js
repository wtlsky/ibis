import { renderTableConf, renderTableRowConf, renderTableColumnConf } from './renderElemes'
export default class Table {
  constructor(editor) {

    const button = editor.createToolbar({
      class: 'IbisIcon ibis-icon-table'
    })

    button.on('click', () => {
      const now = (new Date()).toLocaleString()
      const enode = this.createElm({ text: now })
      editor.insertNode(enode)
    })
  }

  createElm (option = {}) {
    return {
      type: 'table', // 必须指定type属性
      children: [
        {
          type: 'tableRow',
          children: [
            {
              type: 'tableColumn',
              children: [
                {
                  text: '1'
                }
              ]
            }
          ]
        }
      ]
    }
  }

  renderElems () {
    return [
      renderTableConf,
      renderTableRowConf,
      renderTableColumnConf
    ]
  }
}
