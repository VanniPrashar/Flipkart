import React, { useEffect } from 'react';
import { Box, styled } from '@mui/material';

import NavBar from './Home/NavBar'
import Banner from './Home/Banner';
import Slide from './Home/Slide';
import MidSlide from './Home/MidSlide';
import MidSection from './Home/MidSection';

import { getProducts as listProducts} from '../redux/actions/productActions';
import { useDispatch, useSelector } from 'react-redux';

const Component = styled(Box)`
padding: 20px 10px;
background: #F2F2F2;
`;

const Home = () => {

    const getProducts = useSelector(state => state.getProducts);
const { products } = getProducts;

const dispatch = useDispatch();

useEffect(() => {
 dispatch(listProducts())
}, [dispatch])

    return(
        <>
<NavBar />

< Component>
        <Banner />
        <MidSlide products ={products} />
        <MidSection />
        <Slide data ={products} title="Discount for You" timer={false} multi={true}/>
        <Slide data ={products} title="Suggested Items" timer={false} multi={true}/>
        <Slide data ={products} title="Top Selection" timer={false} multi={true}/>
        <Slide data ={products} title="Recommmended Items" timer={false} multi={true}/>
        

        
        </ Component>
        </>
    )
}

export default Home;