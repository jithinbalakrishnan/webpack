
import React, { useState } from 'react';
import styled from "styled-components";
import {InputBox} from "../Components/InputBox";
import * as Actions from '../store/actions/updateLogin';
import { useDispatch } from "react-redux";

const USER_DATA = JSON.parse(decodeURIComponent(localStorage.getItem('userData')));

const Login = (props) => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setError] = useState('');
    const dispatch = useDispatch();

    const handleLoginClick = () => {
        // jithin@nflix.com
        // nflix@123
        if(USER_DATA.userName == userName && USER_DATA.password == password ) {
            setError("")
            dispatch(Actions.updateLoginInfo("UPDATE_LOGGED_IN_USER", USER_DATA));
            props.handleModalState()
        } else {
            setError("Your email id and password is not matching")
        }

    }
    return <LoginContainer>
    <p>Enter Email/Mobile Number</p>
    <InputBox value= {userName} onChange= {event => {setUserName(event.target.value)}}/>
    <p>Password</p>
    <InputBox value= {password} onChange= {event => {setPassword(event.target.value)}}/>
    <Button onClick={handleLoginClick} >Login</Button>
    <ErrorMessage>{errorMessage}</ErrorMessage>
    </LoginContainer>

};

export default Login;


// Style components should be moved to separate file
const LoginContainer = styled.div`

    input {
        width: 200px;
        border: 1px solid grey;
        padding: 10px 15px;
        border-radius: 5px;
    }
`;

const Button = styled.div`
    font-size: 14px;
    height: 32px;
    line-height: 30px;
    background-color: #ff0000c4;
    width: 100%;
    text-align: center;
    color: white;
    margin-top: 27px;

    :hover {
        cursor: pointer
    }
`;

const ErrorMessage = styled.div`
    margin-top: 15px;
    font-size: 13px;
    color: red;
`;