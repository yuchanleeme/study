import React, { useEffect } from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom'

function LandingPage(props) {
  
  useEffect(() => {
    axios.get('/api/hello')
    .then(response=> {console.log(response.data)})
  }, [])

  const onClickHandler = () => {
    axios.get('/api/users/logout')
      .then(response => {
        if(response.data.success){
          props.history.push("/login")
        } else{
          alert('Falil to logout.')
        }
      })
  }

  return (
    <div style = {{
      display: 'flex', justifyContent: 'center', alignItems: 'center', width:'100%', height: '100vh'
    }}>
      <h2> 시작 페이지 </h2>

      <button onClick={onClickHandler}>
        Logout
      </button>
    </div>
  )
}

export default withRouter(LandingPage)
