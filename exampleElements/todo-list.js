import { LitElement, css, html } from "lit";

export class ToDoList extends LitElement {
  // TODO: Add styles here
  static styles = css`
    .completed {
      text-decoration-line: line-through;
      color: #777;
    }
  `;

  static properties = {
    _listItems: { state: true },
    hideCompleted: {},
  };

  constructor() {
    super();
    this._listItems = [
      { text: "Start Lit tutorial", completed: true },
      { text: "Make to-do list", completed: false },
    ];
    this.hideCompleted = false;
  }

  // TODO: Add click handler.
  get input() {
    debugger;
    return this.renderRoot?.querySelector("#newitem") ?? null;
  }
  addToDo() {
    this._listItems = [
      ...this._listItems,
      { text: this.input.value, completed: false },
    ];
    this.input.value = "";
  }

  toggleCompleted(item) {
    console.log("item => ", item);
    item.completed = !item.completed;
    this.requestUpdate();
  }

  setHideCompleted(e) {
    this.hideCompleted = e.target.checked;
  }

  render() {
    // TODO: Replace items definition.
    const items = this.hideCompleted
      ? this._listItems.filter((item) => !item.completed)
      : this._listItems;
    console.log("items =>", items);

    const todos = html`
      <ul>
        ${items.map(
          (item) => html` <li
            class=${item.completed ? "completed" : ""}
            @click=${() => this.toggleCompleted(item)}
          >
            ${item.text}
          </li>`
        )}
      </ul>
    `;

    const caughtUpMessage = html` <p>You're all caught up!</p> `;
    const todosOrMessage = items.length > 0 ? todos : caughtUpMessage;

    return html`
      <h2>----------------To Do-----------------</h2>
      ${todosOrMessage}
      <input id="newitem" aria-label="New item" />
      <button @click=${this.addToDo}>Add</button>
      <br />
      <label>
        <input
          type="checkbox"
          @change=${this.setHideCompleted}
          ?checked=${this.hideCompleted}
        />
        Hide completed
      </label>
      <br />
      <code>
          ${JSON.stringify(this._listItems)}
      </code>
    `;
  }
}
customElements.define("todo-list", ToDoList);
