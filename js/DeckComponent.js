class SCDeck extends HTMLElement {
    /** @type {Deck} */
    #deck;

    /**
     * 
     * @param {Deck|null} deck 
     */
    constructor(deck = null) {
        super();
        let template = document.getElementById("template-sc-deck");
        let templateContent = template.content;
  
        const shadowRoot = this.attachShadow({ mode: "open" });
        shadowRoot.appendChild(templateContent.cloneNode(true));

        this.#deck = deck ?? new Deck();
    }

    /** @returns {Deck} */
    get deck() {
        return this.deck;
    }
}

customElements.define("sc-deck", SCDeck);