import React from 'react';

class SignUp extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            name: '',
            lastname: '',
            passwordconf: '',
        }
    }

    updateEmailField = (e) => this.setState({email: e.target.value});
    updatePasswordField = (e) => this.setState({password: e.target.value});
    updateNameField = (e) => this.setState({name: e.target.value});
    updateLastnameField = (e) => this.setState({lastname: e.target.value});
    updatePasswordConfField = (e) => this.setState({passwordconf: e.target.value});


    handlerSubmit = (e) => {
        e.preventDefault();
        console.log("form submited", JSON.stringify(this.state,1,1))
    }


    render() {
        const { email, password, name, lastname, passwordconf } = this.state; 
        return(
        <div> 
            <form onSubmit={this.handlerSubmit}>
                <h1>{email}</h1>
                <input type="email" name="email" onChange={this.updateEmailField} />
                <h1>{password}</h1>
                <input type="password" name="password" onChange={this.updatePasswordField} />
                <h1>{passwordconf}</h1>
                <input type="password" name="verified-password" onChange={this.updatePasswordConfField} />
                <h1>{name}</h1>
                <input type="text" name="name" onChange={this.updateNameField} />
                <h1>{lastname}</h1>
                <input type="text" name="lastname" onChange={this.updateLastnameField} />
                <input type="submit" value="Submit"/>
            </form>
         </div>
        )
    }
}


export default SignUp; 