import { renderParagraphConf } from './renderElemes'
export default class Paragraph {
  constructor(editor) {
    // Add iconfont
    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.href = '//at.alicdn.com/t/font_3205793_yd5fccklgn9.css'
    document.head.appendChild(link)

    const button = editor.createToolbar({
      class: 'IbisIcon ibis-icon-formatparagraph'
    })

    button.on('click', () => {
      const now = (new Date()).toLocaleString()
      const enode = this.createElm({ text: now })
      editor.insertNode(enode)
    })
  }

  createElm (option = {}) {
    const { text = '' } = option
    return {
      type: 'paragraph', // 必须指定type属性
      children: [
        { text: text }
      ]
    }
  }

  renderElems () {
    return [
      renderParagraphConf
    ]
  }
}
