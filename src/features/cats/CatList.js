// write your CatList component here
import React from 'react'

function CatList({ catPics = [] }){
    return (
    <div>
        {catPics.map((pic) => (
            <img key={pic.id} srx={pic.url} alt='cat' />
        ))}

    </div>
    )
}

export default CatList