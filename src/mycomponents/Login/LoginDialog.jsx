import React, { useState, useContext, useEffect } from 'react';

import{ Dialog, DialogContent, Box, TextField, Button, Typography, styled } from '@mui/material';

import { authenticatesSignup, authenticateLogin } from '../../service/api';

const Component = styled(DialogContent)`
height: 70vh;
width: 90vh;
padding: 0;
padding-top: 0;
`;

const Image =styled(Box)`
background: #2874f0 url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png) center 85% no-repeat;
height: 100%;
width: 40%;
padding: 45px 35px;
& > p, & > h5 {
    font-weight: 600;
    color: #fff
}

`;

const Wrapper = styled(Box)`
display: flex;
flex-direction: column;
padding: 25px 35px;
flex: 1;
& > div, & > button, & > p{
    margin-top: 20px;
}
`;

const LoginButton = styled(Button)`
text-transform: none;
background: #FB641B;
color: #fff;
height: 50px;
border-radius: 3px;
`;

const RequestOTP = styled(Button)`
text-transform: none;
background: #fff;
color: #2874f0;
height: 50px;
border-radius: 3px;
box-shadow: 0 2px 4px 0 rgb(0 0 0/ 20%);
`;

const Text = styled(Typography)`
font-size: 12px;
color: #878787;
`;

const CreateAccount = styled(Typography)`
font-size: 14px;
text-align: center;
color: #2874f0;
margin: auto 0 5px 0;
font-weight: 600;
cursor: pointer;
`;

const Error = styled(Typography)`
color: #ff6161;
line-height: 0;
margin-top: 10px;
font-weight: 600;
font-size: 10px;
`;

const loginInitialValues = {
    username: '',
    password: ''
}

const signupInitialValues = {
    firstname: '',
    lastname: '',
    username: '',
    email: '',
    password: '',
    phone: ''
};



const accountInitialValues = {
    login: {
        view: 'login',
        heading: 'Login',
        subHeading: 'Get access to your Orders, Wishlist and Recommendations'
    },
    signup: {
        view: 'signup',
        heading: "Looks like you're new here!",
        subHeading: 'Sign up with your mobile number to get started'
    }
}


const LoginDialog = ({ open, setOpen, setAccount }) => {
    const [login, setLogin ] = useState(loginInitialValues);
    const [signup, setSignup] = useState(signupInitialValues);
    const [account, toggleAccount] = useState(accountInitialValues.login)


const [error, showError ] = useState(false);
useEffect (() =>{
showError(false);
}, [login])

const onValueChange =(e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
}

const onInputChange = (e) => {
    setSignup({ ...signup, [e.target.name]: e.target.value });
    
}

const loginUser = async () => {
    let response = await authenticateLogin(login);
    if (!response){
        showError(true);
        
    } else{
    showError(false);
    handleClose();
    setAccount(signup.username);
    }
    }

    const signupUser = async () => {
        let response = await authenticatesSignup(signup);
        if(!response) return;
        handleClose();
        setAccount(signup.username);
        
        }  
        

const toggleSignup = () => {
    toggleAccount(accountInitialValues.signup);
}


const handleClose = () => {
    setOpen(false);
    toggleAccount(accountInitialValues.login);
}



return (
    <Dialog open={open} onClose={handleClose} PaperProps={{sx:{maxWidth: 'unset'}}}>
<Component>
    <Box style={{ display: 'flex', height: '100%' }}>
<Image>
  <Typography variant='h5'>{account.heading}</Typography>
  <Typography style={{ marginTop: 20 }}>{account.subHeading}</Typography>
</Image>
{
     account.view === 'login' ?
<Wrapper>
    <TextField variant="standard" onChange={(e) => onValueChange(e)} name='username' label="Enter Username"/>
    { error && <Error>Please enter valid username or password
    </Error>}
    <TextField variant="standard" onChange={(e) => onValueChange(e)} name='password' label="Enter Password"/>
    <Text>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy. 
        </Text>
    <LoginButton onClick={() => loginUser()}>Login</LoginButton>
    <Text style={{display: 'flex', justifyContent: 'center'}}>OR</Text>
    <RequestOTP>Request OTP</RequestOTP>
    <CreateAccount onClick={() => toggleSignup()}>New to Flipkart? Create an account</CreateAccount>
    </Wrapper>
:
    <Wrapper>
    <TextField variant="standard" onChange={(e) => onInputChange(e)} name='firstname' label="Enter Firstname"/>
    <TextField variant="standard" onChange={(e) => onInputChange(e)} name='lastname' label="Enter Lastname"/>
    <TextField variant="standard" onChange={(e) => onInputChange(e)} name='usertname' label="Enter Username"/>
    <TextField variant="standard" onChange={(e) => onInputChange(e)} name='email' label="Enter Email"/>
    <TextField variant="standard" onChange={(e) => onInputChange(e)} name='password' label="Enter Password"/>
    <TextField variant="standard" onChange={(e) => onInputChange(e)} name='phone' label="Enter Phone"/>
    <LoginButton onClick={() => signupUser()}>Continue</LoginButton>
    
    </Wrapper>
}

</Box>
</Component>
       </Dialog>
    )
}

export default LoginDialog;