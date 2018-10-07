const API = 'http://localhost:4000/graphql'
import 'isomorphic-fetch'

const fetchFromGraphql = async (query, variables = {}) => {
  const res = await fetch(API, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    body: JSON.stringify({
      query,
      variables: {
        input: {
          ...variables
        }
      }
    })
  })

  const { data } = await res.json()

  return data
}

export default fetchFromGraphql
