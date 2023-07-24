import { Box, Typography, styled } from '@mui/material';
import { navData } from '../../constant/data';

const Component = styled(Box)(({theme}) => ({
display: 'flex',
margin: '55px 130px 0 130px',
justifyContent: 'space-between',
overflow: 'overlay',

[ theme.breakpoints.down('lg')]: {
    margin: '0px !important'
}
}))


const Container = styled(Box)`
padding: 12px 6px;
text-align: center;`

const Text = styled(Typography)`
font-size: 14px;
font-weight: 600;
font-family: inherit;`;


const NavBar = () => {
    return(
        
<Component>
{
    navData.map(temp => (
        <Container>
            <img src={temp.url} style={{width: 68 }} />
            <Text>{temp.text}</Text></Container>
    ))
}
</Component>
    )
}

export default NavBar;