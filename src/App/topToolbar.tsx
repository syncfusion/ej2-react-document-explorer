import React from 'react';
import { ToolbarComponent, ItemsDirective, ItemDirective } from '@syncfusion/ej2-react-navigations';
import '../App/topToolbar.css';

interface TopToolbarProps {
  onBackClick: (value: string) => void;
  fileName: string;
}

const TopToolbar: React.FC<TopToolbarProps> = ({ onBackClick, fileName }) => {
  return (
    <ToolbarComponent height="65px" cssClass="e-zipToolbar">
      <ItemsDirective>
        <ItemDirective tooltipText="Back" align="Left" prefixIcon="e-icons e-chevron-left" click={() => onBackClick("Back")}>
          <span className="e-icons e-FM-back"></span>
        </ItemDirective>
        <ItemDirective id='title-name' align="Left" text={fileName}>
        </ItemDirective>
        <ItemDirective tooltipText="Close" align="Right" prefixIcon="e-icons e-close" click={() => onBackClick("Close")}>
          <span className="e-icons e-FM-close"></span>
        </ItemDirective>
      </ItemsDirective>
    </ToolbarComponent>
  );
};

export default TopToolbar;
