export default function DogContainer({ html }) {
  return html`
    <style>
        :host {
            width: 100ch;
        }
    </style>
    <slot></slot>
  `
}
