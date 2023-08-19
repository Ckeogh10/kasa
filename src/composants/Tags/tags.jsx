function Tags( {tags} ) {
    return (
        <ul className='tags'>
            {tags.map((tag) => {
                return (
                <li className='tag' key={tag}>{tag}</li>   
                )
            })}
        </ul>  
    )
}
export default Tags