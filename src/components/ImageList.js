import './ImageList.css';
import ImageShow from './ImageShow';
/*
Requirements for keys
1. Use whenever we havve a list of elements.
2. Add the key to the top-most JSX elements in the list.
3. Must be a string or number.
4. Should be unique for this list.
5. Should be consistent across rerenders.
*/

function ImageList({ images }) {

    const renderedImages = images.map((image) => {
        return <ImageShow key={image.id} image={image} />;
    })
    return <div className='image-list'> {renderedImages} </div>;
}

export default ImageList;