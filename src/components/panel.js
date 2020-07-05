import React from "react";
import Image from 'gatsby-image';
import { CTAButtonOrange, CTAButtonBlue } from "../components/cta-button.js";
import { FaAngleDown } from 'react-icons/fa';
import { FadeInSection } from "../components/fadeInAnimation.js"




function HeroPanel(props) {
    return (
        <div className="panels" id={props.id}>
            <Image className={props.class} fluid={props.fluid} alt={props.alt} />
            <div className="hero-overlay">
                <div className="hero-info">
                    <span className="hero-text">{props.heroText}</span>

                    <CTAButtonOrange className="hero-cta" text={props.ctaText} to={props.to} />
                    <div className="overflow-blue"></div>
                </div>
            </div>
        </div>


    )
}


function TextPanel(props) {
    return (
        <div className="panels" id={props.id}>
            <div className={props.class} >
                <FadeInSection>
                    <h2>{props.h2}</h2>
                </FadeInSection>
                <br></br>
                <FadeInSection><span className={props.pageText}><p>{props.p}</p></span></FadeInSection>
            </div>
            <FaAngleDown className="down" />
        </div>

    )
}

function VideoPanel(props) {
    return (
        <div className="panels" id={props.id}>
            <video
                className="video-player"
                loop
                muted
                autoPlay
            >
                <source
                    src={props.src}
                    type="video/mp4"
                    className={props.class}
                />
                Your browser does not support HTML5 video.
            </video>

            <div className="video-info">
                <FadeInSection>
                    <span className="video-text"><p>{props.p}</p></span>
                    <CTAButtonBlue className="video-cta" text={props.buttonText} to={props.to} /></FadeInSection>
            </div>
        </div>
    )
}

export { HeroPanel, TextPanel, VideoPanel }



