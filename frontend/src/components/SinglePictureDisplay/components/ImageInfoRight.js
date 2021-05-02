//Misc info + tags
import {convertToDate} from '../../../utils/DateTimeConvert';
const ImageInfoRight = ({totalComments, tags, createdAt}) => {

    const TagContainer = ({tagName}) => {
        return (
            <div className='image-tag-container' onClick={()=>{}}>
                {tagName}
            </div>
        )
    }

    let allTags = (
        tags.map((tag) => {
            return (<TagContainer key={tag.id} tagName={tag.name}/>)
        })
    )

    return (
        <div className='image-info-right'>
            <div className='image-info-right_misc-info'>
                <h2>Comments: {totalComments}</h2>
                <h2>Created At: {convertToDate(createdAt)}</h2>
            </div>
            <div className='black-line' />
            <div className='image-info-right_tags'>
                <h3>Tags:</h3>
                <div className='image-info-tags'>
                    {allTags}
                </div>
            </div>
        </div>
    )
}

export default ImageInfoRight;
