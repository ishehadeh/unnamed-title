import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import deckModule from '../../src/js/deck.js';

const { Deck } = deckModule;

describe('Deck', () => {
    it('can draw 44 cards from the deck', () => {
        const deck = new Deck();
        let count = 0;
        let card;
        
        while ((card = deck.draw()) !== null) {
            count++;
        }
        
        assert.equal(count, 44, 'Deck should contain 52 cards');
    });
});