import { ImageEditorComponent, } from '@syncfusion/ej2-react-image-editor';
import TopToolbar from './topToolbar';
import { useLocation, useNavigate } from 'react-router-dom';

function ImageViewer() {
    const location = useLocation()
    const navigate = useNavigate()
    const data = location.state;
    let imgObj: ImageEditorComponent | null;    

    function created(): void {
        (imgObj as any).open(data.imageUrl);
    }

    function handleBackClick(): void{
        if (imgObj !== null) {       
            imgObj.destroy();
          }    
            const query = {
              preview: data.name,
              path: data.path
            };
            navigate('/',{state:{query}});     
    }
    function beforeSave(args: any): void{
        let newFileName=data.name;
        const fileNameWithoutExtension = newFileName.replace(/\.[^/.]+$/, '');
        args.fileName=fileNameWithoutExtension;
      }
    
    return (

        <div className="control-section">
            <TopToolbar onBackClick={handleBackClick} fileName={data.name}></TopToolbar>
            <ImageEditorComponent ref={(img) => { imgObj = img }} height="calc(100vh - 70px)" beforeSave={beforeSave} created={created}>
            </ImageEditorComponent>
        </div>

    );
};
export default ImageViewer;
