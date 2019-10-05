import { obaa } from './obaa'
import { getPath, needUpdate, fixPath } from './path'

const components = []
const updateSelfComponents = []
let store

export function $(options) {
  const beforeCreate = options.beforeCreate
  const destroyed = options.destroyed
  const use = options.use
  const useSelf = options.useSelf
  options.computed = options.computed || {}

  if (options.store) {
    store = options.store

    obaa(store.data, (prop, val, old, path) => {
      const patch = {}

      patch[fixPath(path + '-' + prop)] = true
      components.forEach(component => {
        if (
          component.__$updatePath_ &&
          needUpdate(patch, component.__$updatePath_)
        ) {
          recUpdate(component)
        }
      })

      updateSelfComponents.forEach(component => {
        if (
          component.__$updateSelfPath_ &&
          needUpdate(patch, component.__$updateSelfPath_)
        ) {
          component.$forceUpdate()
        }
      })
    })
  }

  options.beforeCreate = function() {
    this.$store = store
    if (use) {
      this.__$updatePath_ = getPath(use)
      components.push(this)
    }
    if (useSelf) {
      this.__$updateSelfPath_ = getPath(useSelf)
      updateSelfComponents.push(this)
    }
    beforeCreate && beforeCreate.apply(this, arguments)
  }

  options.destroyed = function() {
    for (let i = 0, len = components.length; i < len; i++) {
      if (components[i] === this) {
        components.splice(i, 1)
        break
      }
    }

    destroyed && destroyed.apply(this, arguments)
  }

  options.computed.state = function() {
    return this.$store.data
  }

  options.computed.store = function() {
    return this.$store
  }

  return options
}

function recUpdate(root) {
  root.$forceUpdate()
  root.$children.forEach(child => {
    recUpdate(child)
  })
}