export default function DogImage({ html, state }) {
  const { store } = state
  const { breed, dog } = store

  return html`
    <img src='${dog}' alt='${breed}' class='m-auto p0 p4-lg' />
`
}
