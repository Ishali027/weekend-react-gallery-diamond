import axios from 'axios';
import {useState} from  'react';
import './GalleryItem.css';





function GalleryItems ({getImages, image, id}) {
    const [selected, setSelected] = useState(false);

    const handleLikes = (id) => {
        axios.put(`/gallery/like/${id}`)
        .then((response) => {
            console.log(response)
            getImages();
        }).catch((error) => {
            console.log(error);
        })
    }


    const deleteImage = (id) => {
        axios.delete(`/gallery/${id}`)
        .then((response) => {
            console.log(response);
            getImages();
        }).catch((error) => {
            console.log(error);
        })
        
    }


    return (
        <>
    <div onClick={()=> setSelected(!selected)}>
        {
            selected ? (
                <p>
                    {image.description}
                </p>
            ) : (
                <p>
                    <img src={image.path} alt="images" />
                </p>
            )





        }

        




    </div>

<div className="mngmnt-btns">

    <div>
        <button className="like-btn" onClick={() => handleLikes(image.id)}>Like</button>
        <p className="likes">{image.likes}</p>
    </div>
    <div>
    <button className="delete-btn" onClick={() => deleteImage(image.id)}>Delete</button>

    </div>
    
        
</div>    

        






        </>

    )
    
}


export default GalleryItems;