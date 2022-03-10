import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""
    };
  }

  handleLogin = e => {
    this.setState({[e.target.name]: e.target.value})
  }

  submitForm = e => {
    e.preventDefault();
    if (this.state.username && this.state.password){
      this.props.handleLogin()
    }
  }

  render() {
    return (
      <form onSubmit={e => this.submitForm(e)}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" value={this.state.username} onChange={this.handleLogin} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" value={this.state.password} onChange={this.handleLogin} />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
