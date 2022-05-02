import { React, useState} from "react";
import images from "../../constants/images";
import { CartIconButton, CloseButton, PreviousButton, NextButton } from "../../components";

import "./MainSection.scss";

const MainSection = (props) => {

    const {add, minus, quantity, cartNumber} = props;
    
    const imageGalleryThumbnail = [images.product01, images.product02, images.product03, images.product04];
    const imageGalleryBig = [images.product01Big, images.product02Big, images.product03Big, images.product04Big];

    // states for main
    const [activeThumbnail, setActiveThumbnail] = useState(0);
    const [activeBigImage, setActiveBigImage ] = useState(imageGalleryBig[0]);

    //states for lightbox
    const [activeThumbnailLightbox, setActiveThumbnailLightbox] = useState(0);
    const [activeBigImageLightbox, setActiveBigImageLightbox] = useState(imageGalleryBig[0]);

    // Open/Close lightbox
    const [bigImageClicked, setBigImageClicked] = useState(false);

    const closeLightbox = () => {
        setBigImageClicked(false);
    }

    // Lightbox carousel (next/prev)
    const previousImage = () => {
        if(activeThumbnailLightbox === 0){
            setActiveThumbnailLightbox(3);
            setActiveBigImageLightbox(imageGalleryBig[3]);
        } else {
            setActiveThumbnailLightbox(activeThumbnailLightbox - 1);
            setActiveBigImageLightbox(imageGalleryBig[activeThumbnailLightbox - 1]);
        }
    }

    const nextImage = () => {
        if(activeThumbnailLightbox === 3){
            setActiveThumbnailLightbox(0);
            setActiveBigImageLightbox(imageGalleryBig[0]);
        } else {
            setActiveThumbnailLightbox(activeThumbnailLightbox + 1);
            setActiveBigImageLightbox(imageGalleryBig[activeThumbnailLightbox + 1]);
        }
    }

  return (
    <div className="app__mainsection flex__center">

        {bigImageClicked && (
            <div className={`app__mainsection_lightbox-gallery flex__center ${bigImageClicked ? "slider__animation_open_lightbox" : ""}`}>
                <CloseButton 
                    closeLightbox={closeLightbox}
                    fill="#FFF"
                />

                <div className="app__mainsection-gallery_lightbox">
                    <PreviousButton 
                        previousImage={previousImage}
                    />

                    <img 
                        className="image__big"
                        src={activeBigImageLightbox}
                        alt="big IMG"
                    />

                    <NextButton 
                        nextImage={nextImage}
                    />

                    <div className="app__mainsection-gallery_thumbnails_lightbox">
                        {imageGalleryThumbnail.map( (image, index) => (
                            <img 
                                className={` image__thumbnail ${activeThumbnailLightbox === index ? "active-border-lightbox" : "" }`}
                                src={image}
                                alt="thumbnail"
                                key={image + index}
                                onClick={ () => {
                                    setActiveThumbnailLightbox(index);
                                    setActiveBigImageLightbox(imageGalleryBig[index]);
                                }}
                            />
                        ))}
                    </div>
                </div>
            </div>
        )}
        
        { bigImageClicked && (
            <div className="app__lightbox_overlay" onClick={closeLightbox}/>
        )}

        <div className="app__mainsection-gallery">
            <img 
                className="image__big"
                src={activeBigImage}
                alt="big IMG"
                onClick={ () => {
                    setBigImageClicked(true);
                }}
            />

            <div className="app__mainsection-gallery_thumbnails">
                {imageGalleryThumbnail.map( (image, index) => (
                    <img 
                        className={` image__thumbnail ${activeThumbnail === index ? "active-border-thumbnail" : "" }`}
                        src={image}
                        alt="thumbnail"
                        key={image + index}
                        onClick={ () => {
                            setActiveThumbnail(index);
                            setActiveBigImage(imageGalleryBig[index]);
                        }}
                    />
                ))}
            </div>
        </div>

        <div className="app__mainsection-content">
            <div className="app__mainsection-content_text">
                <h3 className="headtext__kumbhsans-small" style={{color: "var(--color-orange)"}}>Sneaker Company</h3>
                <h1 className="headtext__kumbhsans">Fall Limited Edition Sneakers</h1>
                <p className="p__kumbhsans">
                These low-profile sneakers are your perfect casual wear companion.
                Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.
                </p>
            </div>

            <div className="app__mainsection-content_price">
                <div className="app__mainsection-content_currentdiscount">
                <h2 className="headtext__kumbhsans">$125.00</h2>
                <h3 className="app__mainsection_discount">50%</h3>
                </div>
                <p className="p__kumbhsans">$250.00</p>
            </div>

            <div className="app__mainsection-content_buttons">
                <div className="app__mainsection-content_quantity">
                    <button
                    className="button__down"
                    id="down"
                    ><img src={images.iconMinus} alt="minus" onClick={minus} /></button>
                    <h2 className="app__mainsection_quantity_text">{quantity}</h2>
                    <button className="up"><img src={images.iconPlus} alt="plus" onClick={add} /></button>
                </div>

                <button
                className="app__mainsection-content_add"
                id="addButton"
                onClick={cartNumber}
                >
                    <div className="inner__button">
                        <CartIconButton fill="white" />
                        <h2>Add to cart</h2>
                    </div>
                </button>
            </div>
        </div>
    </div>
  )
}

export default MainSection;