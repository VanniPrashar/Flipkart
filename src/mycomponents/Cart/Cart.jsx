import { useEffect } from 'react';
import { Typography, Grid, Box, Button, styled } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';

import { useParams } from 'react-router-dom';
import { addToCart, removeFromCart } from '../../redux/actions/cartActions';
import CartItem from './CartItem';
import TotalView from './TotalView';
import EmptyCart from './EmptyCart';
import { payUsingPaytm } from '../../service/api';
import { post } from '../../utils/paytm';



const Component = styled(Grid)(({ theme }) => ({
    padding: '30px 135px', 
    display: 'flex',

    [theme.breakpoints.down('sm')]:{
        padding: '15px 0'}
        
}))

const Header = styled(Box)`
padding: 15px 24px;
background: #fff;
`;


const ButtonWrapper = styled(Box)`
padding: 16px 22px;
background: #fff;
box-shadow: 0 -2px 10px 0 rgb( 0 0 0/ 10%);
border-top: 1px solid #f0f0f0;

`; 

const StyledButton = styled(Button)`
display: flex;
margin-left: auto;
background: #fb641b;
color: #fff;
width: 250px;
height: 50px;
border-radius: 3px;
`;


const LeftComponent = styled(Grid)(({ theme }) => ({
    paddingRight: 15,

    [theme.breakpoints.down('sm')]:{
        marginBottom: 15}
        
}))



const Cart = () => {
    const cartDetails = useSelector(state => state.cart);
const { cartItems } = cartDetails;
const { id } = useParams();

const dispatch = useDispatch();

useEffect(() => {
    if(cartItems && id !== cartItems.id)
    dispatch(addToCart(id));
}, [dispatch, cartItems, id]);

const removeItemFromCart = (id) => {
    dispatch(removeFromCart(id));
}


const buyNow = async () => {
    let response = await payUsingPaytm({ amount: 500, email: 'vanniprashar9@gmail.com'});
    var information = {
        action: 'https://securegw-stage.paytm.in/order/process',
        params: response
    }
    post(information);
    
    }

    return(
        <>
        {
            cartItems.length ?
            < Component container>
                <LeftComponent item lg={9} md={9} sm={12} xs={12}>
<Header>
    <Typography style={{fontWeight: 600, fontSize: 18}}>
My Cart({cartItems?.length})
    </Typography>
</Header>
{

    cartItems.map(item => (
<CartItem item ={item} removeItemFromCart={removeItemFromCart}/>
    ))
}

<ButtonWrapper>
    <StyledButton onClick={() => buyNow()} variant="contained">Place Order</StyledButton>
</ButtonWrapper>
                </LeftComponent>
                <Grid item lg={3} md={3} sm={12} xs={12}>
                    <TotalView cartItems={cartItems} />
                </Grid>

            </ Component>
            :<EmptyCart />
        }
        
        
        </>
    )
}

export default Cart;