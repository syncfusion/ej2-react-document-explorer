import * as React from 'react';
import { SpreadsheetComponent } from '@syncfusion/ej2-react-spreadsheet';
import TopToolbar from './topToolbar';
import { useLocation, useNavigate } from 'react-router-dom';

function SpreadSheet() {
    const location = useLocation()
    const navigate = useNavigate()
    const data = location.state;
    const spreadsheetRef = React.useRef<SpreadsheetComponent>(null);  

    function created(): void {
        (spreadsheetRef as any).current.open({file:data.file});
    }

    function handleBackClick(): void{
        if (spreadsheetRef !== null) {       
            spreadsheetRef.current?.destroy();
          }    
            const query = {
              preview: data.name,
              path: data.path
            };
            navigate('/',{state:{query}});     
    }

    return (
        <div className="control-section">
            <TopToolbar onBackClick={handleBackClick} fileName={data.name}></TopToolbar>
            <SpreadsheetComponent ref={spreadsheetRef} openUrl='https://services.syncfusion.com/react/production/api/spreadsheet/open' saveUrl='https://services.syncfusion.com/react/production/api/spreadsheet/save' created={created} height="calc(100vh - 70px)" >
            </SpreadsheetComponent >
        </div>
    );
};
export default SpreadSheet;
