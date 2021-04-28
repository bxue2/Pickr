
const PictureNameInput = ({setNames, names, index}) => {
    return (
        <input
            className='picture-oontainer_field'
            placeholder='Name'
            value={names[index]}
            onChange={(e) => {
                let newNames = [...names];
                newNames[index] = e.target.value;
                setNames(newNames);
            }}
        />
    )
}

export default PictureNameInput;
