class Monster {
    constructor(value) {
        this.value = value;
    }
}

class Weapon {
    constructor(value) {
        this.value = value;
    }
}

class HealthPotion {
    constructor(value) {
        this.value = value;
    }
}

class Deck {
    /** @type (HealthPotion | Weapon | Monster)[] */
    #cards = [];

    constructor() {
        for (let i = 2; i <= 10; ++i) {
            this.#cards.push(new Monster(i));
            this.#cards.push(new Monster(i));
            this.#cards.push(new HealthPotion(i));
            this.#cards.push(new Weapon(i));
        }

        for (let i = 11; i <= 14; ++i) {
            this.#cards.push(new Monster(i));
            this.#cards.push(new Monster(i));
        }
    }

    shuffle() {
        // shuffle the deck by sorting by Math.random()
        const shuffled = this.#cards
                            .map(value => ({ value, sort: Math.random() }))
                            .sort((a, b) => a.sort - b.sort)
                            .map(({ value }) => value)
        this.#cards = shuffled;
    }

    /** @return {HealthPotion | Weapon | Monster} */
    draw() {
        return this.#cards.pop();
    }
}
