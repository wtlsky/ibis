export default class ToolbarButton {
  /**
   * 
   * @param { Object } option butotn config
   * @param { string } [option.class] button class style
   * @param { string } [option.label] show text on cursor hover
   */
  constructor(option = {}) {
    const el = document.createElement('span')
    el.classList = option.class
    el.innerText = option.label || ''
    this.$el = el
  }

  /**
   * register button event
   * @param { string } eventName 
   * @param { function } callback 
   */
  on (eventName, callback) {
    this.$el.addEventListener(eventName, callback)
  }
}