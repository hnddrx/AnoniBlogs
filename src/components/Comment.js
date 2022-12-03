import React from 'react'
//Components
import User from './User';
//redux
import { useDispatch } from 'react-redux';
//styles
import styled from 'styled-components';
const Container = styled.div`
display:flex;
justify-content:space-between;
`
const Button = styled.button`
background-color: transparent;
border:none;
color:red;
padding:1px;
height:10px;
&:hover{
  color:pink;
}
`
const ComBod = styled.div `
display: flex;

`
const Comment = ({body}) => {
  const dispatch = useDispatch();
  return (
    <>
      <Container>
        <ComBod>
          <User/> 
          <p>| {body}</p>
        </ComBod>
        <div>
          <Button  onClick={ () => dispatch( { type:'DELETE_COMMENT', payload:{ body: body} } ) }>Remove</Button>
        </div>
      </Container>
    </>
  )
}

export default Comment