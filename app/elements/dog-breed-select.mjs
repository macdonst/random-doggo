export default function MovieSortSelect ({ html, state }) {
  const { store } = state
  const { breed, breeds } = store
  const options = breeds.map(breedname => `<option ${breed === breedname ? "selected" : ""} value="${breedname}">${breedname}</option>`).join('')

  return html`
    <label for="breed">Choose a dog breed:</label>
    <select id="breed" name="breed" class="mie-1">
        ${options}
    </select>
`
}

