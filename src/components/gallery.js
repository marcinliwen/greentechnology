import React, { useState, useEffect } from "react"
import Img from "gatsby-image"
import ImageGallery from "react-image-gallery"
import "./gallery.css"
import Close from "../../static/assets/close.svg"

const Gallery = props => {
  const [currentClick, setCurrentClick] = useState(0)
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = index => {
    setCurrentClick(index)
    setIsOpen(!isOpen)
  }
  return (
    <div className="gallery-wrapper">
      <div className="gallery-row">
        {props.thumb.slice(0).reverse().map((item, index) => (
          <div onClick={() => handleClick(index)}>
            <Img fixed={item.node.childImageSharp.fixed} />
          </div>
        ))}
      </div>
     {/* {isOpen && (
        <div className="modal-continer">
          <div className="modal-body">
            <button className="modal-close" onClick={() => setIsOpen(false)}>
              <Close width="28px" height="28px"/>
            </button>
            <ImageGallery
              items={props.items}
              lazyLoad={true}
              showPlayButton={false}
              startIndex={currentClick}
            />
          </div>
        </div>
     )}*/}
    </div>
  )
}

export default Gallery
