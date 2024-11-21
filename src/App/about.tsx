import React from 'react';
import './about.css';
import TopToolbar from './topToolbar';
import { useNavigate } from 'react-router-dom';
const About: React.FC = () => {
  const navigate = useNavigate();
  const handleBackClick = () => {
    navigate('/');   
  };

  return (
    <><div className="control-section">
        <TopToolbar onBackClick={handleBackClick} fileName={'About Page'} />
      </div><div className="about-container">
              <p>
                  This document explorer demo application showcases several Syncfusion React UI components together in a real-world application scenario. You can explore the <a href="https://github.com/essential-studio/ej2-react-document-explorer" target="_blank" rel="noreferrer">source code</a> of this application and use it as a reference for integrating Syncfusion React UI components into your applications.
              </p>
              <div className='list-heading'>List of Syncfusion React UI components used in this sample</div>
              <div className='about-component'>
                  <div className='control-item'>
                      <span className="sb-icons sfimage-file-manager e-sb-icon control-icon"></span>
                      <a className='control-name' href="https://ej2.syncfusion.com/react/documentation/file-manager/getting-started" target="_blank" rel="noreferrer">File Manager</a>
                  </div>
                  <div className='control-item'>
                      <span className="sb-icons sfimage-treeview e-sb-icon control-icon"></span>
                      <a className='control-name' href="https://ej2.syncfusion.com/react/documentation/treeview/getting-started" target="_blank" rel="noreferrer">TreeView</a>
                  </div>
                  <div className='control-item'>
                      <span className="sb-icons sfimage-sidebar e-sb-icon control-icon"></span>
                      <a className='control-name' href="https://ej2.syncfusion.com/react/documentation/sidebar/getting-started" target="_blank" rel="noreferrer">Sidebar</a>
                  </div>
                  <div className='control-item'>
                      <span className="sb-icons sfimage-numerictextbox e-sb-icon control-icon"></span>
                      <a className='control-name' href="https://ej2.syncfusion.com/react/documentation/numerictextbox/getting-started" target="_blank" rel="noreferrer">Numeric TextBox</a>
                  </div>
                  <div className='control-item'>
                      <span className="sb-icons sfimage-toolbar e-sb-icon control-icon"></span>
                      <a className='control-name' href="https://ej2.syncfusion.com/react/documentation/toolbar/getting-started" target="_blank" rel="noreferrer">Toolbar</a>
                  </div>
                  <div className='control-item'>
                      <span className="sb-icons sfimage-button e-sb-icon control-icon"></span>
                      <a className='control-name' href="https://ej2.syncfusion.com/react/documentation/button/getting-started" target="_blank" rel="noreferrer">Button</a>
                  </div>
                  <div className='control-item'>
                      <span className="sb-icons sfimage-pdf-viewer e-sb-icon control-icon"></span>
                      <a className='control-name' href="https://ej2.syncfusion.com/react/documentation/pdfviewer/getting-started" target="_blank" rel="noreferrer">PDF Viewer</a>
                  </div>
                  <div className='control-item'>
                      <span className="sb-icons sfimage-document-editor e-sb-icon control-icon"></span>
                      <a className='control-name' href="https://ej2.syncfusion.com/react/documentation/document-editor/getting-started" target="_blank" rel="noreferrer">Word Processor</a>
                  </div>
                  <div className='control-item'>
                      <span className="sb-icons sfimage-presentation e-sb-icon control-icon"></span>
                      <a className='control-name' href="https://help.syncfusion.com/file-formats/presentation/overview" target="_blank" rel="noreferrer">Presentation</a>
                  </div>
                  <div className='control-item'>
                      <span className="sb-icons sfimage-spreadsheet e-sb-icon control-icon"></span>
                      <a className='control-name' href="https://ej2.syncfusion.com/react/documentation/spreadsheet/getting-started" target="_blank" rel="noreferrer">Spreadsheet</a>
                  </div>
              </div>
          </div></>
  );
};

export default About;
