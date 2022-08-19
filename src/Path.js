import DocumentMeta from 'react-document-meta';
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Cart from './components/cart/Cart';
import Messages from './components/message/Messages';
import Navbar from './components/navbar/Navbar';
import Orders from './components/orders/Orders';
import Sign from './components/sign/Sign';
import Unic from './components/unic/Unic';


export default function Path() {
    const meta = {
      title: 'ecommerce site',
      description: 'I am a description, and kjjs',
      canonical: 'http://example.com/path/to/page',
      meta: {
        charset: 'utf-8',
        name: {
          keywords: 'react,meta,document,html,tags'
        }
      }
    };
    return (
      <div>
          <BrowserRouter>
          <Navbar/>
        <DocumentMeta {...meta}>
        <Routes>
          
        
          <Route path="/" element ={<Navigate to ="/unic"/>}/>
          <Route path="/unic" element={<Unic/>} />
          <Route path="/sign" element={<Sign/>} />
          <Route path="/messages" element={<Messages/>} />
          <Route path="/orders" element={<Orders/>} />
          <Route path= "/cart" element={<Cart/>}/>

        </Routes>
  
  
        </DocumentMeta >
        
      </BrowserRouter>

      
      </div>
    
    );
  }
  