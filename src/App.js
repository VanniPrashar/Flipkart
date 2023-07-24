import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Box } from '@mui/material';

import { Home } from './mycomponents/default';


import Header from './mycomponents/Header/Header';
import TemplateProvider from './templates/TemplateProvider';
import ContextProvider from './context/ContextProvider';
import DetailView from './mycomponents/ItemDetails/DetailView';
import Cart from './mycomponents/Cart/Cart';

function App() {
  return (
    <TemplateProvider>
<ContextProvider>
    <BrowserRouter>
    
      <Header /> 
      <Box style={{ marginTop: 54 }}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/product/:id' element={<DetailView />} />
      
      </Routes>
      </Box>
    
    </BrowserRouter>
    </ContextProvider>
    </TemplateProvider>
  );
}

export default App;
