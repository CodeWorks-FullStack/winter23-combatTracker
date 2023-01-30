import { Creature } from "./Models/Creature.js"
import { Value } from "./Models/Value.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"
import { loadState } from "./Utils/Store.js"

class AppState extends EventEmitter {
  /** @type {import('./Models/Value').Value[]} */
  values = loadState('values', [Value]) //NOTE jumping the shark, don't look at this just yet

  // NOTE the info that is created with NEW Creature, are INSTANCES of creature
  creatures = [
    new Creature('Slate Slabrock', 55, true),
    new Creature('Tim', 25, true),
    new Creature('Jeremy', 5000, true)
  ]

}

export const appState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})

console.log(appState.creatures)