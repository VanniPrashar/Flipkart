import { useState } from 'react';

import { Box, Button, styled } from '@mui/material';

import { FlashOn, ShoppingCart}  from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { addToCart } from '../../redux/actions/cartActions';
import { payUsingPaytm } from '../../service/api';

import { useDispatch } from 'react-redux';

import { post } from '../../utils/paytm';

const LeftContainer = styled(Box)(({ theme }) => ({
    minWidth: '40%',
padding: '40px 0 0 80px',
    [theme.breakpoints.down('md')]:{
        padding: '20px 40px'
    }
}))



const Image =styled('img')({
   padding: '15px 20px' ,
   border: '1px solid #f0f0f0',
   width: '95%'
    
});


const StyledButton = styled(Button)`
    width: 48%;
    height: 50px;
    border-radius: 3px;
    color : #fff;`;



const ActionItem =({ product }) => {

const navigate = useNavigate();
const { id } =product;


const  [quantity, setQuantity] =useState(1);
const dispatch = useDispatch();



const addItemToCart =() => {
    dispatch(addToCart(id, quantity));
  navigate('/cart');
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
<LeftContainer>
<Image src={product.detailUrl} /><br />



<StyledButton variant='contained' onClick={() => addItemToCart()} style={{marginRight: 10, background: '#ff9f00'}}><ShoppingCart />Add to Cart</StyledButton>
<StyledButton variant='contained' onClick= {() => buyNow()}style={{ background: '#fb541b'}}><FlashOn />Buy Now</StyledButton>
</LeftContainer>
)

}

export default ActionItem;