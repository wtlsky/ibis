import { createEditor } from 'slate'
import { init, classModule, propsModule, styleModule, eventListenersModule, attributesModule, h, toVNode } from 'snabbdom'
import vnodeHelper from './tools/vnodeHelper'
import createId from './tools/createId'
import EventManager from './EventManager'
import ToolbarButton from './core/toolbar/button'
import './style/index.scss'

import Paragraph from './buildInPlugins/Paragraph/index.js'
import Table from './buildInPlugins/Table/index.js'

const patch = init([classModule, propsModule, styleModule, eventListenersModule, attributesModule])
const buildInPlugins = [Paragraph, Table]

export default class Ibis {
  constructor(options = {}) {
    const { el, placeholder, plugins = [], toolbar = [] } = options
    this.id = createId()
    this.el = el
    this.plugins = new Map()
    this.renders = new Map()
    this._slate = createEditor()
    this.toolbar = []
    this.$events = new EventManager()
    this.placeHolder = placeholder

    // install buildIn plugins
    buildInPlugins.forEach(plugin => {
      const { name } = plugin
      this.installPlugin(name, plugin)
    })

    // install user plugins
    plugins.forEach(plugin => {
      const { name } = plugin
      this.installPlugin(name, plugin)
    })

    // draw editor
    if (this.el) {
      this.mount()
    }
  }

  on (eventName, callback) {
    this.$events.on(eventName, callback)
  }

  /**
   * Install plugin
   * @param {*} pluginName 
   * @param {*} plugin 
   */
  installPlugin (pluginName, Plugin) {
    const isInstalled = this.plugins.has(pluginName)
    if (isInstalled) {
      return
    }
    const _plugin = new Plugin(this)
    const renders = _plugin.renderElems()
    renders.forEach(config => {
      this.renders.set(config.type, config.render)
    })
    this.plugins.set(pluginName, Plugin)
  }

  createToolbar (config = {}) {
    const butotn = new ToolbarButton(config)
    this.toolbar.push(butotn)
    return butotn
  }

  insertNode (node) {
    node.key = createId()
    this._slate.insertNode(node)
    this.updateView()
  }

  /**
   * create UI
   */
  mount () {
    // container
    const container = document.createElement('div')
    container.classList = 'ibis-editor'

    // toolbar
    const toolbar = document.createElement('div')
    toolbar.classList = 'ibis-toolbar'

    // content
    const content = document.createElement('div')
    content.classList = 'ibis-content'
    content.setAttribute('contenteditable', true)
    this.contentEl = content

    this.toolbar.forEach(button => toolbar.appendChild(button.$el))

    container.appendChild(toolbar)
    container.appendChild(content)
    this.el.appendChild(container)

    this.lastView = this._slate.children.length
  }

  ibELementToVnode (renderConf) {
    const render = this.renders.get(renderConf.type)
    return render(renderConf, vnodeHelper.bind(this), this.ibELementToVnode.bind(this))
  }

  updateView () {
    const newVnode = toVNode(this.contentEl)
    newVnode.children = this._slate.children.map(item => {
      const node = this.ibELementToVnode(item)
      return node
    })
   this.oldVnode = patch(this.oldVnode || toVNode(this.contentEl), newVnode)
  }

  isElement (node) {
    return true
  }

}
