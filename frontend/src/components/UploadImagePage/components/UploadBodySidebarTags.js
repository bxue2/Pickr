import {useState} from 'react';
const UploadBodySidebarTags = ({tags, setTags}) => {
    const [newTag, setNewTag] = useState('');
    const [openTagForm, setOpenTagForm] = useState(false)
    const UploadTagContainer = ({tagName}) => {
        return (
            <div className='upload-tag-container'>
                {tagName}
            </div>
        )
    }

    const openAddTagForm = (e) => {
        e.preventDefault();
        setOpenTagForm(!openTagForm);
    }

    const addTag = (e) => {
        e.preventDefault();
        let newTagList = [...tags];
        newTagList.push(newTag)
        setTags(newTagList);
        setNewTag('');
    }

    return (
        <>
        <div className='upload-sidebar-tags'>
            <UploadTagContainer tagName='Bob'/>
            <UploadTagContainer tagName='Bob2'/>
            <div className='add-tag-button' onClick={openAddTagForm}>
                <i className="far fa-plus-square"></i>
            </div>
        </div>
        <div className={`add-tag-form ${openTagForm ? '' : 'hidden'}`}>
            <input
            type='text'
            value={newTag}
            onChange={(e) => setNewTag(e.target.value)}
            />
            <div>
                <button onClick={addTag}>Add Tag</button>
                <button onClick={() => setOpenTagForm(false)}>Cancel</button>
            </div>
        </div>
        </>
    )
}

export default UploadBodySidebarTags;
