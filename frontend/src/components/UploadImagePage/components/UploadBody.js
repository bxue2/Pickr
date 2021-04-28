import UploadBodySidebar from './UploadBodySidebar';
import UploadBodyFileList from './UploadBodyFileList';

const UploadBody = (props) => {

    return (
        <div className='upload-body'>
            <UploadBodySidebar {...props} />
            <UploadBodyFileList {...props} />
        </div>
    )
}

export default UploadBody;
