

// NOTE the class represents what a creature WILL be, once it is created
export class Creature {
  // NOTE properties of the creature not necessary to define in the constructor
  // name
  // health
  // isAlive
  // NOTE constructor will give the properties value
  constructor(name, health, isAlive, level) {
    // NOTE this means THIS ONE creature, or the single instance of one
    this.isAlive = isAlive
    this.name = name
    this.health = parseInt(health) //parse is required cause it's a string coming from the form
    this.maxHealth = parseInt(health)
    // default case, sometimes you have to be careful with ors
    this.level = parseInt(level) || 1
  }

  takeDamage(damage) {
    if (this.isAlive) {
      this.health -= damage
      console.log("OUCH said ", this.name, `Taking ${damage}dmg.`)
      if (this.health <= 0) {
        this.isAlive = false
      }
    }
  }

  get HTMLTemplate() {
    // return `<p onclick="app.creaturesController.hurtCreature('${this.name}')">${this.isAlive ? '🤺' : '☠️'} ${this.name} -${this.level} health[${this.health}] ${this.CalculateHealthPercent}%</p>`

    return `
<div class="col-4 text-dark">
  <div class="card text-center selectable no-select" onclick="app.creaturesController.hurtCreature('${this.name}')">
    <h5>${this.name}</h5>
    <h1>${this.isAlive ? '🤺' : '☠️'}</h1>
    <div class="progress">
      <div class="progress-bar progress-bar-striped progress-bar-animated bg-danger" role="progressbar"
        style="width: ${this.CalculateHealthPercent}%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">${this.health}</div>
    </div>
  </div>
</div>
  `
  }

  // NOTE a property on class that is calculated on access
  get CalculateHealthPercent() {
    return Math.round((this.health / this.maxHealth) * 100)
  }



}