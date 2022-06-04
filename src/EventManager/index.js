export default class EventManager {
  constructor() {
    this.events = {}
  }
  on (name, callback) {
    const handlers = this.events[name] = []
    handlers.push(callback)
  }
  emit (name, data) {
    const handlers = this.events[name]
    if (!handlers) {
      return
    }
    handlers.forEach(callback => {
      callback(data)
    })
  }
}