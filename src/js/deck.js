// @ts-check

/**
 * @typedef {'club' | 'spade'} MonsterType
 */

class Monster {
    /** @type {MonsterType} */
    type;

    /** @type {number} */
    value;

    constructor(value, type) {
        this.value = value;
        this.type = type;
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
            this.#cards.push(new Monster(i, 'club'));
            this.#cards.push(new Monster(i, 'spade'));
            this.#cards.push(new HealthPotion(i));
            this.#cards.push(new Weapon(i));
        }

        for (let i = 11; i <= 14; ++i) {
            this.#cards.push(new Monster(i, 'club'));
            this.#cards.push(new Monster(i, 'spade'));
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

    /** @return {HealthPotion | Weapon | Monster | null} */
    draw() {
        return this.#cards.pop() ?? null;
    }
}
