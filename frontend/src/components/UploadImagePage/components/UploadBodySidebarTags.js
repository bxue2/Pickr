import {useState} from 'react';
const UploadBodySidebarTags = ({tags, setTags, selectIndex}) => {
    const [newTag, setNewTag] = useState('');
    const [openTagForm, setOpenTagForm] = useState(false)

    const removeTag = (e) => {
        let tagVal = e.target.innerHTML;
        let newTagList = [];
        tags[selectIndex].forEach((tag) => {
            if(tag !== tagVal){
                newTagList.push(tag);
            }
        })
        let allTags = [...tags];
        allTags[selectIndex] = newTagList;
        setTags(allTags);
    }
    const UploadTagContainer = ({tagName}) => {
        return (
            <div className='upload-tag-container' onClick={removeTag}>
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
        let allTags = [...tags]
        let newTagList = [...tags[selectIndex]];
        newTagList.push(newTag)
        allTags[selectIndex] = newTagList;
        setTags(allTags);
        setNewTag('');
    }

    let allTags = (
        tags[selectIndex].map((tag) => {
            return (<UploadTagContainer key={tag} tagName={tag}/>)
        })
    );

    return (
        <>
        <div className='upload-sidebar-tags'>
            {allTags}
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
