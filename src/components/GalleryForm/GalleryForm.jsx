import {useState} from 'react';
import axios from 'axios';



function GalleryForm({getImages}) {

    const [imagePath, setImagePath] = useState('');
    const [imageDescription, setImageDescription] = useState('');

    const postImages = () => {
        axios({
            method: 'POST',
            url: '/gallery/newImage',
            data: {
                path: imagePath,
                description: imageDescription 
            }
        }).then((response) => {
            console.log(response.data);
            setImagePath('')
            setImageDescription('')
            getImages();
        }).catch((error) => {
            console.log(error);
        })
    }

    


return (
    <div>
        <form onSubmit={postImages}>

        
        <label htmlFor='imageInput'>Url:</label>
        <input className="urlInput" 
        value={imagePath}
        type="text"
        placeholder="Your images url"
        onChange={e => setImagePath(e.target.value)}
        
        />
        

        
        <label htmlFor='descriptionInput'>Description</label>
        <input className="descriptionInput"
        value={imageDescription}
        type="text"
        placeholder="your images description"
        onChange={e => setImageDescription(e.target.value)}
        />
        

        <button type="submit">Post a Pic</button>
            
        </form>
    </div>


)











}

export default GalleryForm;