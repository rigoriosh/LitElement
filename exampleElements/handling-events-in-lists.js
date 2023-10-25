import { LitElement, html} from 'lit';
import { map } from 'lit/directives/map.js';


export class HandlingEventsInLists extends LitElement {
    
    static properties = {
        things: {state: true},
    };

    constructor() {
        super();
        this.things = [
          'Raindrops on roses',
          'Whiskers on kittens',
          'Bright copper kettles',
          'Warm woolen mittens',
        ];
    }

    _deleteThing(index) {
        console.log(index);
        this.things = this.things.filter((_, i) => i !== index);
    }

    render() {
        return html`
          <p>A few of my favorite things</p>
          <ul>
            <!-- TODO: Add click event handlers for the delete button  below. -->
            ${map(
              this.things,
              (thing, index) => html`
                <li>
                  ${thing}
                  <button @click=${() => this._deleteThing(index)}>Delete</button>
                </li>
              `
            )}
          </ul>
        `;
      }
}
customElements.define('handling-events-in-lists', HandlingEventsInLists);
