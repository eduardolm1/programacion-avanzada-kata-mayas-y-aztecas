class Warrior {
    constructor(life, power) {
        this.life = life
        this.power = power
    }
    attack = ()=>{
        return this.power
         
    }
    defend = (damage)=>{
        return console.log(this.life-=damage);
    }
}

class Maya extends Warrior {
        drinkColaCao =  () => {
            this.power = this.power+10
            console.log(`Bebiendo colacao, obtengo `+this.power+' de poder')
    }
}

class Aztec extends Warrior {
        drinkNesquik =  () => {
            this.life = this.life+10
            console.log(`Bebiendo nesquik, obtengo `+this.life+' de vida')
    }
}
const newMaya = new Maya(30,10)
const newAztec = new Aztec(30,10)


newMaya.drinkColaCao()
newAztec.drinkNesquik()
newAztec.defend(newMaya.attack())
newMaya.defend(newAztec.attack())




