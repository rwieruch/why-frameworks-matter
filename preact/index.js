import {
  h,
  render
} from 'https://unpkg.com/preact@10.0.0/dist/preact.module.js';
import htm from 'https://unpkg.com/htm@2.2.1/dist/htm.module.js';

// Initialize htm with Preact
const html = htm.bind(h);

const App = () => {
  return html`
    <p>Hello World;</p>
  `;
};

render(
  html`
    <${App}><//>
  `,
  document.getElementById('app')
);
