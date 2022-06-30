import React from 'react'
import avatar1 from '../../img/hero-small.jpg'
import avatar2 from '../../img/nat-10.jpg'
import video from '../../img/video.mp4'
import "./Stories.scss"

const Stories = () => {
  return (
    <section className="section-stories">
            <div className="bg__video">
                <video loop muted autoplay className="bg__video--content">
                    <source src={video} type="video/mp4" />
                    <source src={video} type="video/webm" />
                    Browseringni yangila qo'chqor! 😏😡
                </video>
            </div>

            <div className="u-text-center mb-lg">
                <h2 className="heading-secondary">My Clients is my brothers :) </h2>
            </div>

            <div className="row">
                <div className="story">
                    <figure className="story__shape">
                        <img src={avatar1} alt="Laziz"/>
                        <figcaption className="story__caption">just.ibrohim</figcaption>
                    </figure>
                    <h3 className="title mb-sm">Lorem ipsum dolor sit amet consectetur</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum ut voluptate, hic suscipit
                        excepturi ducimus accusamus dignissimos delectus, magni, id cumque reprehenderit.
                    </p>
                </div>
            </div>

            <div className="row">
                <div className="story">
                    <figure className="story__shape u-text-center">
                        <img src={avatar2} alt="Laziz" />
                        <figcaption className="story__caption">Muslim.bro</figcaption>
                    </figure>
                    <h3 className="title mb-sm">Lorem ipsum dolor sit amet consectetur</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum ut voluptate, hic suscipit
                        excepturi ducimus accusamus dignissimos delectus, magni, id cumque reprehenderit.
                    </p>
                </div>
            </div>

            <div className="u-text-center"><a href="/#" className="btn-text">Read more</a></div>
        </section>
  )
}

export default Stories