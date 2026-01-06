import React from 'react'

const Gallery = (props) => {

  return (
    <div>
      <a href={props.elem.url} target="_blank">
        <div className="h-50 w-44 rounded-lg overflow-hidden">
          <img className="h-full w-full object-cover" src={props.elem.download_url} alt="img" />
        </div>
        <h2 className="text-lg font-bold">{props.elem.author}</h2>
    </a>
    </div>
  )
}

export default Gallery
