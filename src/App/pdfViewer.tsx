import { useLocation,useNavigate } from 'react-router-dom';
import { PdfViewerComponent, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, BookmarkView, ThumbnailView, Print, TextSelection, TextSearch, FormFields, FormDesigner, Inject } from '@syncfusion/ej2-react-pdfviewer';
import TopToolbar from './topToolbar';

function PdfViewer() {
    const location = useLocation()
    const navigate = useNavigate()
    const data = location.state;
    let viewer : PdfViewerComponent | any;     

    const create = () => {
      const pdfviewer = viewer; 
      if (pdfviewer) {
        const viewer = pdfviewer; 
        if (viewer && data) {
          const url  = data.url;         
          if (url) {
            setTimeout(() => {
              viewer.load(url);
            }, 1000);
          }
        }
      }
    };

    const handleBackClick = () => {
        if (viewer !== null) {       
            viewer.destroy();
          }    
            const query = {
              preview: data.name,
              path: data.path
            };
            navigate('/',{state:{query}});   
    };

    function documentLoad(): void{
        let file= data.name;
        var fileExtension = file.split('.').pop();
        if (fileExtension === "pptx"){
          var newFileName = file.replace(/\.[^.]+$/, '.pdf');
          viewer.downloadFileName=newFileName;
        }
        else{
          viewer.downloadFileName=data.name;
        }
      }
    return (
        <div className="control-section">
            <TopToolbar onBackClick={handleBackClick} fileName={data.name} />
            <PdfViewerComponent 
                id="container"
                resourceUrl="https://cdn.syncfusion.com/ej2/23.1.43/dist/ej2-pdfviewer-lib"
                height='calc(100vh - 70px)'
                created={create}
                documentLoad={documentLoad}
                ref={(scope) => { viewer = scope; }}>
                <Inject services={[Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, BookmarkView, ThumbnailView, Print, TextSelection, TextSearch, FormFields, FormDesigner]} />
            </PdfViewerComponent>
        </div>
    );
}

export default PdfViewer;
