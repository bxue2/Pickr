const { default: UploadBodySidebarTags } = require("./UploadBodySidebarTags");

const UploadBodySidebar = (props) => {
    const {
        names, descriptions, setDescriptions, selectIndex, setNames
    } = props;

    let content = (
        <h3 className='upload-body-sidebar_title'>Select a Picture: </h3>
    )

    if(selectIndex !== -1){
        content = (
            <>
                <h3 className='upload-body-sidebar_title'>Edit: </h3>
                <form onSubmit={(e) => {e.preventDefault()}}>
                    <ul>
                        <li>
                            <label>
                                {"Name: "}
                                <input
                                value={names[selectIndex]}
                                onChange={(e) => {
                                    let newNames = [...names];
                                    newNames[selectIndex] = e.target.value;
                                    setNames(newNames);
                                }}/>
                            </label>
                        </li>
                        <li>
                            <label>
                                {"Description: "}
                                <input
                                value={descriptions[selectIndex]}
                                onChange={(e) => {
                                    let newDesc = [...descriptions];
                                    newDesc[selectIndex] = e.target.value;
                                    setDescriptions(newDesc);
                                }}/>
                            </label>
                        </li>
                        <li>
                            Tags:
                            <UploadBodySidebarTags />
                        </li>
                    </ul>
                </form>
            </>
        )
    }

    return (
        <div className='upload-body-sidebar'>
            {content}
        </div>
    )
}

export default UploadBodySidebar;
