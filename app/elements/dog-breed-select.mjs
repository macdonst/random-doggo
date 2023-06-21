export default function MovieSortSelect ({ html, state }) {
  const { store } = state
  const { breed, breeds } = store
  const options = breeds.map(breedname => `<option ${breed === breedname ? "selected" : ""} value="${breedname}">${breedname}</option>`).join('')

  return html`
    <style>
      select {
        border: 2px solid var(--dark);
      }

      select:focus {
        outline-offset: 4px;
      }
    </style>
    <label for="breed" class="pie-5">Choose a dog breed:</label>
    <select id="breed" name="breed" class="mie-1 radius1 pi-2 pb-4">
        ${options}
    </select>
`
}
