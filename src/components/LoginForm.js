import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button';

const styles = theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column'
  },
  button: {
    margin: theme.spacing.unit
  }
})

class LoginForm extends React.Component {
  state = {
    name: ''
  }
  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    })
  }
  render() {
    const { classes } = this.props
    return (
      <form className={classes.container}>
        <TextField
          id="Login"
          label="Name"
          value={this.state.name}
          onChange={this.handleChange('name')}
          margin="normal"
        />
        <TextField
          id="password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          margin="normal"
        />
        <Button variant="contained" className={classes.button}>Login</Button>
      </form>
    )
  }
}

export default withStyles(styles)(LoginForm)
