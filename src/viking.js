// Soldier
class Soldier {
    
    constructor (health, strength) {
        this.health = health;
        this.strength = strength;
    }

    attack() {
        return this.strength;
    }

    receiveDamage(damage) {
        this.health -= damage;
        
}
}


// Viking
class Viking extends Soldier {
    
    constructor (name, health, strength) {
        super(health, strength);
        this.name = name;
    }
    
    receiveDamage(damage) {
        super.receiveDamage(damage);
        if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`;
        } else {
            return `${this.name} has died in act of combat`;
        }
    }
    
    battleCry() {
        return "Odin Owns You All!";
    }

}

// Saxon
class Saxon extends Soldier {
    
    constructor(health, strength) {
        super(health, strength);
    }
    
    receiveDamage(damage) {
        super.receiveDamage(damage);
        if (this.health > 0) {
            return `A Saxon has received ${damage} points of damage`;
        } else {
            return `A Saxon has died in combat`;
        }
    }

}

// War
class War {

    constructor() {
        this.vikingArmy = [];
        this.saxonArmy = [];
    }

    addViking(Viking) {
        this.vikingArmy.push(Viking);
    }
    
    addSaxon(Saxon) {
        this.saxonArmy.push(Saxon);
    }
    
    vikingAttack() {
        const vikingStrikerIndex = Math.floor(Math.random() * this.vikingArmy.length);
        const saxonWoundedIndex = Math.floor(Math.random() * this.saxonArmy.length);
        const vikingStriker = this.vikingArmy[vikingStrikerIndex];
        const saxonWounded = this.saxonArmy[saxonWoundedIndex];
        
        const strike = saxonWounded.receiveDamage(vikingStriker.strength);

        if (saxonWounded.health <= 0) this.saxonArmy.splice(saxonWoundedIndex, 1);
        
        return strike;
    }
    
    saxonAttack() {
        const saxonStrikerIndex = Math.floor(Math.random() * this.saxonArmy.length);
        const vikingWoundedIndex = Math.floor(Math.random() * this.vikingArmy.length);
        const saxonStriker = this.saxonArmy[saxonStrikerIndex];
        const vikingWounded = this.vikingArmy[vikingWoundedIndex];
        
        const strike = vikingWounded.receiveDamage(saxonStriker.strength);

        if (vikingWounded.health <= 0) this.vikingArmy.splice(vikingWounded, 1);
        
        return strike;
    }
    
    showStatus() {       

        if (!this.saxonArmy.length) return "Vikings have won the war of the century!";

        if (!this.vikingArmy.length) return "Saxons have fought for their lives and survived another day...";

        if (this.vikingArmy.length > 0 && this.saxonArmy.length > 0) return "Vikings and Saxons are still in the thick of battle."

       

    }
}
