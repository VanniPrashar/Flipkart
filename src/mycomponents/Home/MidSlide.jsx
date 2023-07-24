
import Slide from "./Slide";

import {Box, styled} from '@mui/material';

const Component = styled(Box)`
display: flex;
`;

const LeftComponent = styled(Box)(({ theme }) => ({
width: '84.5%',
[ theme.breakpoints.down('md')]: {
   width: '100%'
}
}))
;

const RightComponent =styled(Box)(({ theme }) => ({
background: '#fff',
padding: 5,
marginTop: 10,
marginLeft: 10,
width: '17%',
textAlign: 'center',
[ theme.breakpoints.down('md')]: {
    display: 'none'
}
}))
;

const MidSlide = ({ products }) => {

    const adURL = 'https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70';

    return(
<Component>
<LeftComponent>
< Slide data ={products}
 title='Deala of the Day'
 timer={true}
 multi={true} 
 />
</LeftComponent>
<RightComponent>
<img src={ adURL } style={{ width: 219}} />
</RightComponent>

</Component>

    )
}

 export default MidSlide;