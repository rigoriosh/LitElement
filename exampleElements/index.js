import { LitElement, html, css } from 'lit';
import './my-element.js'
import './mySecondElement.js'
import './todo-list.js'
import './map-directive.js'
import './range-directive.js'
import './repeat-directive.js'
import './handling-events-in-lists.js'
import './triggering-an-update.js'
import './should-the-component-update.js'


export class Index extends LitElement {
    static styles = [
        css`
            :host {
                display: block;
            }
        `
    ];

    static properties = {
        _listItems: { state: true },
        tutorialSelected: {},
       
    };

    constructor() {
        super();

        this._listItems = [
            { text: "Open this select menu",         element: html`<h3>Selecciona uno de los tutoriales</h3>`, selected: false },
            { text: "HelloWord",                     element: html`<my-element></my-element>`, selected: false },
            { text: "SecondComponent",               element: html`<my-2-element></my-2-element>`, selected: false },
            { text: "ToDo list",                     element: html`<todo-list></todo-list>`, selected: false },
            { text: "map directive and array metho", element: html`<map-directive></map-directive>`, selected: false },
            { text: "range directive",               element: html`<range-directive></range-directive>`, selected: false },
            { text: "repeat directive",              element: html`<repeat-directive></repeat-directive>`, selected: false },
            { text: "handling-events-in-lists",      element: html`<handling-events-in-lists></handling-events-in-lists>`, selected: false },
            { text: "triggering-an-update",          element: html`<triggering-an-update></triggering-an-update>`, selected: false },
            { text: "should-the-component-update",          element: html`<should-the-component-update></should-the-component-update>`, selected: true },
            
        ];
        this.tutorialSelected = this._listItems[this._listItems.length -1 ];
        
    }

    render() {
        const todos = html`
            ${this._listItems.map(
                (item) => html` <option value="${item.text}" selected=${item.selected}>${item.text}</option>`
            )}
        `;

        return html`
            <select class="form-select" aria-label="Default select example" @click=${(e)=>{
                    console.log(e, e.target)
                    this.tutorialSelected = this._listItems.filter(tutorial => tutorial.text === e.target.value)[0]
            }}>
                ${todos}
                
            </select>

            ${this.tutorialSelected.element}

        `;
    }
}
customElements.define('tutorial-lit-elemet', Index);
