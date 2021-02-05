import React from 'react'
import { connect } from 'react-redux'
import {startLoginUser} from '../actions/userAction'
class Login extends React.Component{
    constructor(){
        super()
        this.state={
            email: '',
            password : ''
        }
    }

    handleChange= (e)=>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleSubmit= (e)=>{
        e.preventDefault()
        const formData={
            email : this.state.email,
            password : this.state.password
        }
        const redirect = ()=>{
           return this.props.history.push('/')
        }
         this.props.dispatch(startLoginUser(formData, redirect))
    }

    render(){
        console.log('login state values',this.state)
        return(
            <div>
              <div className='row'>
              <div className= 'col-md-6 offset-md-2' > 
               <h1> Login</h1>
                <form onSubmit={this.handleSubmit}>

                    <div className="form-group">
                    <label htmlFor='email'>email</label>
                    <input type ='text' id='email' name='email' value={this.state.email} onChange={this.handleChange} className="form-control"/>
                    <br/><br/><br/>
                    </div>

                    <div className="form-group">
                    <label htmlFor='password'>password</label>
                    <input type ='password' id='password' name='password' value={this.state.password} onChange={this.handleChange} className="form-control"/>
                    <br/><br/><br/>   
                    </div>

                    <div className="form-group">
                    <input type='submit' value='submit' className="form-control"/> 
                    </div>                   
                </form>
                </div>
               </div>
            </div>
        )
    }
}
export default connect()(Login)