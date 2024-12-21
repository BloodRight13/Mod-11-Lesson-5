import React from 'react';  
import { BrowserRouter, Routes, Route } from 'react-router-dom';  
import NotFound from './NotFound';  
  
const App = () => {  
  return (  
   <BrowserRouter>  
    <Routes>  
      {/* Your other routes here */}  
      <Route path="*" element={<NotFound />} />  
    </Routes>  
   </BrowserRouter>  
  );  
};  
  
export default App;
