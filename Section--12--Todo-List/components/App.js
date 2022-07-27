import html from "../core.js";
import { connect } from "../store.js";


const connector = connect();

function App({ todo }) {
    return html`
        <ul>
        ${todo.map(item => `<li>${item}</li>`)}
        </ul>
        <button onclick="dispatch('add', 'sleep')">Add</button>
    `
}

export default connector(App);