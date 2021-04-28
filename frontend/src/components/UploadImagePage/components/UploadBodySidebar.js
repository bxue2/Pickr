const UploadBodySidebar = (props) => {
    const {
        names, changeName, descriptions, setDescriptions, selectIndex
    } = props;

    let content = (
        <h3 className='upload-body-sidebar_title'>Select a Picture: </h3>
    )

    if(selectIndex !== -1){
        let index = selectIndex;
        content = (
            <>
                <h3 className='upload-body-sidebar_title'>Edit: </h3>
                <form onSubmit={(e) => {e.preventDefault()}}>
                    <ul>
                        <li>
                            <label>
                                {"Name: "}
                                <input
                                value={names[index]}
                                onChange={(e) => {changeName(e.target.value, index)}}/>
                            </label>
                        </li>
                        <li>
                            <label>
                                {"Description: "}
                                <input
                                value={descriptions[index]}
                                onChange={(e) => {
                                    let newDesc = [...descriptions];
                                    newDesc[index] = e.target.value;
                                    setDescriptions(newDesc);
                                }}/>
                            </label>
                        </li>
                        <li>Tags</li>
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
