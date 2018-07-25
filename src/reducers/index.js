import { combineReducers } from 'redux'
import { reducer as reduxForm } from 'redux-form'
import tableReducer from './tableReducer'

export default combineReducers({
  form: reduxForm,
  data: tableReducer
})
