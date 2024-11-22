import { DocumentEditorContainerComponent, Toolbar } from '@syncfusion/ej2-react-documenteditor';
import TopToolbar from './topToolbar';
import { useLocation, useNavigate } from 'react-router-dom';

DocumentEditorContainerComponent.Inject(Toolbar);
function DocEditor() {
    const location = useLocation()
    const navigate = useNavigate()
    const data = location.state;
    let container :DocumentEditorContainerComponent;
    function created(): void {
        container.documentEditor.open(data.url);
    }

    function handleBackClick(): void {
        if (container !== null) {
            container.destroy();
        }
        const query = {
            preview: data.name,
            path: data.path
        };
        navigate('/', { state: { query } });
    }
    return (

        <div className="control-section">
            <TopToolbar onBackClick={handleBackClick} fileName={data.name}></TopToolbar>
            <DocumentEditorContainerComponent id="container" ref={s => ((container as any) = s as DocumentEditorContainerComponent)} height='calc(100vh - 70px)' width='100%' created={created} serviceUrl="https://services.syncfusion.com/react/production/api/documenteditor/" enableToolbar={true} />
        </div>
    );

}
export default DocEditor

