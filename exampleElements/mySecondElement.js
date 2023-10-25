import {LitElement, html} from 'lit';

export class MyElement extends LitElement {
  // TODO: Add a reactive property

  static properties = {
    message: {},
    name: {},
    checked: {},
    pageTitle: '',
    myTheme: '',
    isHidden: true,
    value: 0
    
  };

  constructor() {
    super();
    this.message = 'Hello again.';
    this.name = 'Your name here';
    this.checked = false;
    this.pageTitle = 'Pruebas LitElement';
    this.myTheme = "Dark",
    this.isHidden = false,
    this.value = 555
  }

  changeName(event) {
    const input = event.target;
    this.name = input.value;
  }

  setChecked(event) {
    this.checked = event.target.checked;
  }

  metodToTest = (param) => {
    console.log(param)
  } 
  

  render() {
    return html`
    <!-- Child nodes -->
        <h1>${this.pageTitle}</h1>

        <!-- Attribute -->
        <div class=${this.myTheme}></div>

        <!-- Boolean attribute -->
        <p ?hidden=${this.isHidden}>I may be in hiding.</p>

        <!-- Property -->
        <input .value=${this.value}>

        <!-- Event listener -->
        <button @click=${() => {this.metodToTest("You clicked a button.")}}>...</button>
        <p>TODO: Add an expressionnn</p>
        ${this.message}
        <p>Hello, ${this.name}</p>
        <div>
            <input 
                @input=${this.changeName}
                placeholder="Enter your name" 
                ?disabled=${!this.checked}>
        </div>
        <label><input type="checkbox" @change=${this.setChecked}> Enable editing</label>

        
    `;
  }
}
customElements.define('my-2-element', MyElement);
