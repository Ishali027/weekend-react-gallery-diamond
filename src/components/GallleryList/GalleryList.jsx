import {useState} from 'react';
import GalleryItems from '../GalleryItems/GalleryItems';



function GalleryList ({imageList, getImages}) {





    return(
        <>
        <div>
            
            {imageList.map(image => (
                
                
                <GalleryItems image={image} key={image.id} getImages={getImages}/>

                



            
            ))}



        </div>
        </>
    )
}


export default GalleryList;



