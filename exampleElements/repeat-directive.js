import { LitElement, html } from "lit";
import { map } from "lit/directives/map.js";
// TODO: import repeat directive.
import { repeat } from "lit/directives/repeat.js";

class RepeatDirective extends LitElement {
  static properties = {
    tasks: { state: true },
  };

  constructor() {
    super();
    this.tasks = [
      { id: "a", label: "Learn Lit" },
      { id: "b", label: "Feed the cat" },
      { id: "c", label: "Go for a walk" },
      { id: "d", label: "Take a nap" },
    ];
  }

  _sort(dir) {
    this.tasks.sort((a, b) => a.label.localeCompare(b.label) * dir);
    this.requestUpdate();
  }

  render() {
    return html`
      <p>Things to do today:</p>
      <button @click=${() => this._sort(1)}>Sort ascending</button>
      <button @click=${() => this._sort(-1)}>Sort descending</button>
      <h3>Employing below using map directive</h3>
      <ul>
        ${map(
          this.tasks,
          (task) => html`
            <li>
              <label><input type="checkbox" />${task.id}) ${task.label}</label>
            </li>
          `
        )}
      </ul>
      <!-- TODO: Employing Replace below using repeat directive. -->
      <h3>Employing Replace below using repeat directive</h3>
        <ul>
          ${repeat(
            this.tasks,
            (task) => task.id,
            (task) => html`
              <li>
                <label
                  ><input type="checkbox" />${task.label} (${task.id})</label
                >
              </li>
            `
          )}
        </ul>
    `;
  }

  
}
customElements.define("repeat-directive", RepeatDirective);
