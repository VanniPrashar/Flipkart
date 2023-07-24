import { useState, useEffect } from 'react';

import { InputBase, Box, styled, List, ListItem } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

import { useSelector, useDispatch } from 'react-redux';
import { getProducts as listProducts } from '../../redux/actions/productActions';
import { Link } from 'react-router-dom';

const SearchContainer = styled(Box)`
background: #fff;
width: 38%;
border-radius: 2px;
margin-left: 12px;
display: flex;
`

const InputSearchBase  = styled(InputBase)`
   padding-left: 35px;
   width: 100%;
   font-size: unset;`


const SearchIconwrapper = styled(Box)`
color: blue;
padding: 6px;
display: flex; `;

const ListWrapper = styled(List)`
position: absolute;
background: #fff;
color: #000;
margin-top: 38px;
`;

const Search = () => {

    const [text, setText ]= useState();
    const [ open, setOpen ] = useState(true)

    const getText = (text) => {
        setText(text);
        setOpen(false)
        }
const getProducts = useSelector(state => state.getProducts);
    const { products } = getProducts;

    const dispatch = useDispatch();

    useEffect(() => {
dispatch(listProducts())
    }, [dispatch])



    return(
        <SearchContainer>
<InputSearchBase 
  placeholder='Search for products, brands and more'
  onChange={(e) => getText(e.target.value)}
  />


<SearchIconwrapper>
    <SearchIcon />
</SearchIconwrapper>
{
    text &&
    <ListWrapper hidden={open}>
        {
            products.filter(product => product.title.longTitle.toLowerCase().includes(text.toLowerCase())).map(product => (
                <ListItem>
                    <Link
                    to={`/product/${product.id}`}
                    onClick={() => setText('')}
                    style={{textDecoration: 'none', color: 'inherit'}}>{product.title.longTitle}</Link>
                </ListItem>
            ))
        }
    </ListWrapper>
}
</SearchContainer>
    )
}

export default Search;