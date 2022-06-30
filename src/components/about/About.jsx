import React from 'react'
import "./About.scss"
import about1 from '../../img/about02.png'
import about2 from '../../img/about03.png'
import about3 from '../../img/about04.png'

const About = () => {
  return (
    <section className="section-about">
            <div className="u-text-center">
                <h2 className="heading-secondary mb-lg">
                    Lorem ipsum dolor sit
                </h2>
            </div>
            <div className="row">
                <div className="col-1-of-2">
                    <h3 className="heading-3 mb-sm">Lorem ipsum dolor sit amet consectetur.</h3>
                    <p className="paragraph mb-sm">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa nostrum tempore dolores unde
                        molestiae sequi dolor nulla ad illo. Voluptatum ab laborum est nam reprehenderit ea placeat
                        accusantium libero eveniet officiis voluptatem, minus recusandae nihil qui perspiciatis?
                    </p>
                    <h3 className="heading-3 mb-sm">Lorem ipsum dolor sit amet consectetur.</h3>
                    <p className="paragraph mb-sm">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa nostrum tempore dolores unde
                        molestiae sequi dolor nulla ad illo. Voluptatum ab laborum est nam reprehenderit ea placeat
                        accusantium libero eveniet officiis voluptatem, minus recusandae nihil qui perspiciatis?
                    </p>

                    <a href="#" className="btn-text mb-sm">learn more &rarr;</a>
                </div>
                <div className="col-1-of-2">
                    <div className="composition">
                        <img src={about1} alt="" className="composition__photo composition__photo--p1" />
                        <img src={about2} alt="" className="composition__photo composition__photo--p2" />
                        <img src={about3} alt="" className="composition__photo composition__photo--p3" />
                    </div>
                </div>
            </div>
    </section>
  )
}

export default About