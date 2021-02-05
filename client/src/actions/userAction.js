import axios from 'axios'

export const startRegisterUser= (formData,redirect)=>{
   return (dispatch)=>{
     axios.post('/users/register', formData )
        .then((response)=>{
            console.log('startRegisterUser response.data value',response.data)
             if(response.data._id){
                  redirect()
             }else {
                 alert('Registration failed')
             }
        })
        .catch((err)=>{
            console.log(err)
        })
     } 
 }

export const startLogout= ()=>{
    return (dispatch)=>{
        localStorage.removeItem('tokenProject1')
        dispatch(setUser({}))
        alert('logout successfully')
        window.location.href = '/'      
  }
}

export const startLoginUser = (formData, redirect)=>{
    return (dispatch)=>{
        axios.post('/users/login', formData)
        .then((response)=>{
            console.log(response.data)
            if(response.data.token){
            localStorage.setItem('tokenProject1', response.data.token)
            dispatch(startGetUser())
            redirect()
            }else {
                alert('Login failed')
            }                        
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}

export const startGetUser = ()=>{
    return (dispatch)=>{
    axios.get('/users/account', {
        headers : {
            'Authorization' : localStorage.getItem('tokenProject1')
        }
    })
    .then((response)=>{
        console.log('startGetUser response.data value',response.data)
        dispatch(setUser(response.data))
    })
    .catch((err)=>{
        console.log(err)
    })
 }        
}

export const setUser = (user)=>{
      return {type: 'SET_USER', payload: user}
}