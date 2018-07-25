import { FETCH_DATA } from './types'

export const fetchData = () => async dispatch => {
  const data = [
    {
      id: 1,
      firstname: 'Bobo',
      lastname: 'Smith',
      email: 'alice@gmail.com'
    }
  ]

  dispatch({ type: FETCH_DATA, payload: data })
}
