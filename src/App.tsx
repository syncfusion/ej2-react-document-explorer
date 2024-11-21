import * as React from 'react';
import './index.css';
import { Route, Routes } from 'react-router-dom';
import Layout from './App/layout';
import ImageViewer from './App/imageEditor';
import SpreadSheet from './App/excel';
import DocEditor from './App/docEditor';
import PdfViewer from './App/pdfViewer';
import About from './App/about';

function App() {
    return (<div>
      
       <Routes>
          <Route path='/' element={<Layout />}></Route>
          <Route path='/imageViewer' element={<ImageViewer />}></Route>
          <Route path='/spreadSheet' element={<SpreadSheet/>}></Route>
          <Route path='/docEditor' element={<DocEditor/>}></Route>
          <Route path='/pdfViewer' element={<PdfViewer />}></Route>
          <Route path='/about' element={<About />}></Route>
       </Routes>
    </div>);
 }
 
 export default App;