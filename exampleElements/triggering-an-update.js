import { LitElement, html, css } from 'lit';
import { map } from 'lit/directives/map.js';

export class TriggeringAnUpdate extends LitElement {
   

    static properties = {
        groceries: {},
      };
    
      constructor() {
        super();
        this.groceries = ['tea', 'milk', 'honey', 'chocolate'];
      }
    
      removeItem(item) {
        const indexToRemove = this.groceries.indexOf(item);
        console.log(111111111111);

        this.groceries = this.groceries.filter((_, i) => i !== indexToRemove); //hace lo mismo que lo que sigue pero simplificado
        /* this.groceries.splice(indexToRemove, 1);
        this.groceries = [...this.groceries] */
      }
    
      render() {
        return html`
          ${map(
            this.groceries,
            (item) =>
              html`<button @click=${() =>
                this.removeItem(item)}>x</button> ${item}<br>`
          )}
        `;
      }
}
customElements.define('triggering-an-update', TriggeringAnUpdate);
