import {html, css, LitElement} from 'lit';
// TODO: Import directives
import {range} from 'lit/directives/range.js';
import {map} from 'lit/directives/map.js';

class RangeDirective extends LitElement {
  static styles = css`
    /* playground-fold */
    :host {
      display: block;
      width: 400px;
      height: 400px;
    }
    #board {
      display: grid;
      grid-template-columns: repeat(8, 1fr);
      grid-template-rows: repeat(8, 1fr);
      border: 2px solid #404040;
      box-sizing: border-box;
      height: 100%;
    }
    #board > div {
      padding: 2px;
    }
    .black {
      color: #ddd;
      background: black;
    }
    .white {
      color: gray;
      background: white;
    }
    /* playground-fold-end */

  `;

  render() {
    return html`
      <p>Let's play a game!</p>
      <div id="board">
        <!-- TODO: Place squares here. -->
        ${map(range(8), (row) => map(range(8), (col) => html`
          <!--<div class="${getColor(row, col)}">${getLabel(row, col)}</div>--> 
        `))}
        <!-- EL codigo de arriba hace lo mismo que el siguiente pero esta simplicado -->
        ${map(range(8), (row) => {
            console.log("row => ", row);
            return map(range(8), (col) => {
                console.log("col => ", col);    
                // console.log(html`<div class="${getColor(row, col)}">${getLabel(row, col)}</div>`);
                return html`<div class="${getColor(row, col)}">${getLabel(row, col)}</div>`
            })}
        )}
      </div>
      <div>
      <h5>Ejemplo range</h5>
        ${map(range(8), (i) => html`${i + 1}`)}
      </div>
    `;
  }
}
customElements.define('range-directive', RangeDirective);


// const getColor = (row, col) => ((row + col) % 2 ? 'white' : 'black'); // es lo mismo q lo de abajo pero simplificado
const getColor = (row, col) => {
    // console.log(((row + col) % 2 ? 'white' : 'black'));
    return ((row + col) % 2 ? 'white' : 'black')
};
// const getLabel = (row, col) => `${String.fromCharCode(65 + col)}${8 - row}`; // es lo mismo q lo de abajo pero simplificado
const getLabel = (row, col) => {
    // console.log(row, col);
    const label = `${String.fromCharCode(65 + col)}${8 - row}`
    // console.log(label);
    return label
};
