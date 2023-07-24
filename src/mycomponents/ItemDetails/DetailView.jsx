import { useEffect, useState } from "react";

import { useDispatch,useSelector } from 'react-redux';
import { getProductById } from "../../service/api";
import { useParams } from "react-router-dom";
import ActionItem from "./ActionItem";
import ProductDetail from "./ProductDetail";


import { Box, Typography, Grid, styled } from '@mui/material';

import { getProductDetails } from "../../redux/actions/productActions";



const Component = styled(Box)`
background: #f2f2f2;
margin-top: 55px;
`;

const Container = styled(Grid)(({ theme }) => ({
    background: '#fff',
    display: 'flex',
    [theme.breakpoints.down('md')]:{
        margin: 0
    }
}))



const RightContainer = styled(Grid)`
margin-top: 50px;
& > p {
    margin-top: 10px;
}

`;

const DetailView =() => {

    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png'
    const { id } = useParams();
    
 


const { loading, product }  = useSelector( state => state.getProductDetails);
const dispatch = useDispatch();




useEffect(() => {
if (product && id !== product.id)

dispatch(getProductDetails(id));


}, [dispatch, product, id, loading]);


return (
    <Component> 
        <Box></Box>
        {
           product && Object.keys(product).length && 
            <Container container>
<Grid item lg={4} md={4} sm={8} xs={8}>
   <ActionItem product={product} />
</Grid>
<RightContainer item lg={8} md={8} sm={8} xs={12}>
<Typography>{product.title.longTitle}</Typography>
<Typography style={{ marginTop: 5, color: '#878787', fontSize: 14 }}>
    8 Ratings & 1 Review
    <span><img src={fassured} alt="flipkart" style={{width: 50, marginLeft: 10}}/></span>
</Typography>
    <Typography>
        <span style={{ fontSize: 28 }} >{product.price.cost}</span>$nbsp;$nbsp;$nbsp;
        <span style={{ color: '#878787' }}> <strike>₹{product.price.mrp}</strike></span>$nbsp;$nbsp;$nbsp;
        <span style={{ color: '#388E3C' }}>{product.price.discount}off</span>
        </Typography>
        
 
        <ProductDetail product={product} />
</RightContainer>
            </Container>
}
    </Component>
)

}

export default DetailView;