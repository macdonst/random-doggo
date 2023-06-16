export default function DogForm({ html }) {
  return html`
    <form class="mb-3">
        <slot></slot>
    </form>
    <script type="module">
      class DogForm extends HTMLElement {
        constructor() {
          super()
          this.form = this.querySelector('form')
          this.select = this.querySelector('select')
          this.submit = this.querySelector('input[type=submit]')
          this.onChange = this.onChange.bind(this)
        }
        connectedCallback() {
            if (this.select && this.submit) {
                this.submit.classList.add('hidden')
                this.select.addEventListener('change', this.onChange)
            }
        }
        disconnectedCallback() {
          this.select.removeEventListener('change', this.onChange)
        }
        onChange() {
          this.form.submit()
        }
      }

      customElements.define('dog-form', DogForm)
    </script>
  `
}
