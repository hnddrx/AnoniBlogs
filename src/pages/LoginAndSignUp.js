import React from 'react'
//Pages
import LoginPage from '../components/LoginPage'
//Components
import RegisterPage from '../components/RegisterPage'
//Styles
import styled from 'styled-components'
const Container = styled.div`
display:flex;
justify-content:center;
margin-top:170px;
`
const LoginAndSignUp = () => {
  return (
    <div>
      <Container>
        {/* Get the data from this pages */}
        <LoginPage />
        <RegisterPage />
      </Container>
    </div>
  )
}

export default LoginAndSignUp