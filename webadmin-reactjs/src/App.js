import logo from './logo.svg';
import './App.css';
import Statistical from'./product/statistical';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  // Những componet không đăng nhập truy cập được
  
  return (
   <BrowserRouter>
      <Routes>
          <Route path='/statistical' element={<Statistical/>}/>        
        
        </Routes>   
   
   </BrowserRouter>
  );
}


export default App;
