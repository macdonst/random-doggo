export default function DogContainer({ html }) {
  return html`
    <style>
        :host {
            max-width: 100ch;
        }
    </style>
    <slot></slot>
  `
}
