import { appState } from "../AppState.js";
import { Creature } from "../Models/Creature.js";



class CreaturesService {

  hurtCreature(name) {
    let creature = appState.creatures.find(creature => creature.name == name)
    console.log('hurting creature in service', creature);
    // creature.health -= 1
    creature.takeDamage(1)
  }

  createCreature(creatureData) {
    let newCreature = new Creature(creatureData.name, creatureData.health, true, creatureData.level)
    appState.creatures.push(newCreature)
  }

}

export const creaturesService = new CreaturesService()