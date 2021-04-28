
const PictureNameInput = ({changeName, names, index}) => {
    return (
        <input
            className='picture-oontainer_field'
            placeholder='Name'
            value={names[index]}
            onChange={(e) => {changeName(e.target.value, index)}}
        />
    )
}

export default PictureNameInput;
