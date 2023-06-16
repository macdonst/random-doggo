import tiny from 'tiny-json-http'

const baseUrl = 'https://dog.ceo/api'

const getJSON = async function(url) {
  const response = await tiny.get({
    url: `${baseUrl}${url}`,
    headers: {
      'accept': 'application/json'
    }
  })
  return response.body
}

export async function get (req) {
  const { breed = 'shiba' } = req.query
  let response = await getJSON('/breeds/list/all')
  const breeds = Object.keys(response?.message || {})
  const dog = (await getJSON(`/breed/${breed}/images/random`)).message
  return {
    json: { breed, breeds, dog }
  }
}

