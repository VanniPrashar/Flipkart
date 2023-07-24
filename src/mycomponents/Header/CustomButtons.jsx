import React, { useState, useContext} from 'react';

import { Badge, Box, Button, Typography, styled} from '@mui/material';
import { ShoppingCart } from '@mui/icons-material';
import { Link } from'react-router-dom';

import { LoginContext } from '../../context/ContextProvider';

import {useSelector } from 'react-redux';

import LoginDialog from '../Login/LoginDialog';
import Profile from './Profile';


const Wrapper = styled(Box)(({ theme }) => ({
    display: 'flex',
margin: '0 3% 0 auto',
'& > *': {
    marginRight: '40px !important',
    textDecoration: 'none',
    fontSize: 12,
    alignItems: 'center',

    [theme.breakpoints.down('sm')]:{
        color: '#2874f0',
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        marginTop: 10
    }
},
[theme.breakpoints.down('sm')]:{
    display: 'block'
}}
))



const Container = styled(Link)(({ theme }) => ({
    display: 'flex',
    [theme.breakpoints.down('md')]:{
       display: 'block'
    }
}))



const LoginButton = styled(Button)(({ theme }) => ({
    color: '#2874f0',
background: '#fff',
textTransform: 'none',
padding: '5px 40px',
borderRadius: 2,
boxShadow: 'none',
fontWeight: 600,
height: 32,
[theme.breakpoints.down('md')]:{
        background: '#2874F0',
        color: '#fff'
    }
}))




const CustomButtons = () => {

    const [open, setOpen] = useState(false);

    const { account, setAccount } = useContext(LoginContext);

    const cartDetails = useSelector(state => state.cart);
    const { cartItems } =  cartDetails;

const openDialog = () => {
    setOpen(true);
}

    return(
< Wrapper>
{
    account ? <Profile account ={account} setAccount={setAccount} />
    :


    <LoginButton variant="contained" onClick ={() => openDialog()}>Login</LoginButton>}
    <Typography style= {{ marginTop:3, width: 135 }}>
        Become a Seller
    </Typography>
    <Typography style= {{ marginTop:3}}>
       More
    </Typography>

    <Container to="/cart">
        <Badge badgeContent={cartItems?.length} color='secondary'>
    <ShoppingCart /> </Badge>
    <Typography style= {{ marginLeft: 10}}>
         Cart
    </Typography></Container>
    <LoginDialog open={open} setOpen={setOpen} setAccount={setAccount}/>
</Wrapper>
    )
}

export default CustomButtons;