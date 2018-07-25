import React from 'react'
import Header from './Header'
import LoginForm from './LoginForm'
import RegistrationPanel from './RegistrationPanel'
import RegistrationTable from './RegistrationTable'

export default () => {
  return (
    <div className="App">
      <Header />

      <RegistrationPanel />
      <RegistrationTable />
    </div>
  )
}
