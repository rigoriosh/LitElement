import { LitElement, html, css } from 'lit';
import {classMap} from 'lit/directives/class-map.js';
import {animate} from '@lit-labs/motion';

export class ShouldTheComponentUpdate extends LitElement {

    static properties = {
        big: {type: Boolean},
        duration: {type: Number},
        _renderCount: {state: true},
        shifted: {}
      };
    
      static styles = css`
        .bar {
          background: red;
          height: 2em;
          width: 10vw;
        }
    
        .big {
          width: 50vw;
        }

        .box {
            position: absolute;
            width: 100px;
            height: 100px;
            background: steelblue;
            top: 250px;
            border-radius: 50%;
          }
      
          .shifted {
            right: 0;
          }
      `;
    
      constructor() {
        super();
        this.big = false;
        this.duration = 500;
        this._renderCount = 0;
      }
    
      setDuration(e) {
        const v = e.target.value;
        this.duration = Number.parseInt(v);
      }

      _toggle() {
        this.shifted = !this.shifted;
      }
    
      render() {
        this._renderCount++;
        const keyframeOptions = {duration: this.duration};
        console.log("keyframeOptions =>", keyframeOptions);
    
        return html`
            <p>
                <button @click=${() => (this.big = !this.big)}>Animate</button>
            </p>
            <p>
                <label>Speed <select @change=${this.setDuration}>
                <option value="250" selected>Fast</option>
                <option value="1500">Slow</option>
                </select></label>
                Render count: ${this._renderCount}
            </p>
            <div class="bar ${classMap({big: this.big})}" ${animate({
            keyframeOptions,
            })}>
            </div>

            <h3>Other examplo of animation</h3>
            <button @click=${this._toggle}>Move</button>
            <div class="box ${this.shifted ? 'shifted' : ''}" ${animate()}></div>
        `;
      }
}
customElements.define('should-the-component-update', ShouldTheComponentUpdate);
