const UploadBodySidebar = (props) => {
    const {
        imageFiles, setImageFiles, names, setNames, descriptions, setDescriptions, selectIndex
    } = props;

    return (
        <div className='upload-body-sidebar'>
            <h3 className='upload-body-sidebar_title'>Edit: </h3>
            <ul>
                <li>
                    <form onSubmit={(e) => {e.preventDefault()}}>
                        <label>
                            Name:
                            <input
                            value={names[selectIndex]}
                            onChange={(e) => {
                                let newName = [...names];
                                newName[selectIndex] = e.target.value;
                                setNames(newName);
                            }}/>
                        </label>
                    </form>
                </li>
                <li>
                    <form onSubmit={(e) => {e.preventDefault()}}>
                        <label>
                            Description:
                            <input
                            value={descriptions[selectIndex]}
                            onChange={(e) => {
                                let newDesc = [...descriptions];
                                newDesc[selectIndex] = e.target.value;
                                setDescriptions(newDesc);
                            }}/>
                        </label>
                    </form>
                </li>
                <li>Tags</li>
            </ul>
        </div>
    )
}

export default UploadBodySidebar;
