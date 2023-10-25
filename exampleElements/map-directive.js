import { LitElement, html, css } from 'lit';
import {map} from 'lit/directives/map.js';

export class MApDIrective extends LitElement {
    static styles = [
        css`
            :host {
                display: block;
            }
        `
    ];
    static properties = {
        items: {state: true},
        names: {state: true},
        friends: {state: true},
        pets: {state: true},
        includePets: {state: true},
    };
    
    constructor() {
      super();
      this.items = new Set(['Apple', 'Banana', 'Grape', 'Orange', 'Lime']);
      this.names = ['Chandler', 'Phoebe', 'Joey', 'Monica', 'Rachel', 'Ross'];
      this.friends = ['Harry', 'Ron', 'Hermione'];
      this.pets = [
          {name: 'Hedwig', species: 'Owl'},
          {name: 'Scabbers', species: 'Rat'},
          {name: 'Crookshanks', species: 'Cat'},
      ];
      this.includePets = true;
    }

    _togglePetVisibility() {
      this.includePets = !this.includePets;
    }

    render() {
        const listItems = [];
        this.friends.forEach((friend) => {
            listItems.push(html`<li>${friend}</li>`);
        });
        if (this.includePets) {
            this.pets.forEach((pet) => {
                listItems.push(html`<li>${pet.name} (${pet.species})</li>`);
            });
        }
        return html`
          <h4>My unique fruits</h4>
          <ul>
            <!-- TODO: Utilize map directive to render items. -->
            ${map(this.items, (item) => html`<li>${item}</li>`)}
          </ul>
          <h4>A list of names that include the letter "e"</h4>
          <code>
            ${JSON.stringify(this.names)}
          </code>
          <ul>
            <!-- TODO: Render list items of filtered names. -->
            ${this.names
            .filter((name) => name.match(/e/i))
            .map((name) => html`<li>${name}</li>`)}
          </ul>

          <h4>Building an array of renderables</h4>
          <code>
            ${JSON.stringify(this.friends)}
            ${JSON.stringify(this.pets)}
          </code>
          <br>
          <button @click=${() => this._togglePetVisibility()}>
                ${this.includePets ? 'Hide' : 'Show'} pets
            </button>
            <p>My magical friends</p>
            <ul>
                <!-- TODO: Render templates. -->
                ${listItems}
            </ul>
        `;
      }
}
customElements.define('map-directive', MApDIrective);
