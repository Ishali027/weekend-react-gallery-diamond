import axios from 'axios';
import {useState} from  'react';





function GalleryItems (props) {





    return(
        <>
        <p>
                <div key={image.id}>
                <img src={image.path} />
                </div>
        </p>

        </>
    )
}


export default GalleryItems;