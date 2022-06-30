import React from 'react'
import { RiTreasureMapLine } from 'react-icons/ri'
import "./Feature.scss"

const Feature = () => {
  return (
    <section className="section-feature">

            <div className="row">

                <div className="col-1-of-4">
                    <div className="feature-box">
                        <span className="icon">🌎</span>
                        <h3 className="title">Lorem ipsum dolor sit</h3>
                        <p className="descr">Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque molestiae
                            recusandae repellendus accusamus minus est inventore ratione aspernatur.</p>
                    </div>
                </div>

                <div className="col-1-of-4">
                    <div className="feature-box">
                        <span className="icon">🧭</span>
                        <h3 className="title">Lorem ipsum dolor sit</h3>
                        <p className="descr">Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque molestiae
                            recusandae repellendus accusamus minus est inventore ratione aspernatur.</p>
                    </div>
                </div>

                <div className="col-1-of-4">
                    <div className="feature-box">
                        <span className="icon">❤</span>
                        <h3 className="title">Lorem ipsum dolor sit</h3>
                        <p className="descr">Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque molestiae
                            recusandae repellendus accusamus minus est inventore ratione aspernatur.</p>
                    </div>
                </div>

                <div className="col-1-of-4">
                    <div className="feature-box">
                        <span className="icon"><RiTreasureMapLine size='2rem' /></span>
                        <h3 className="title">Lorem ipsum dolor sit</h3>
                        <p className="descr">Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque molestiae
                            recusandae repellendus accusamus minus est inventore ratione aspernatur.</p>
                    </div>
                </div>

            </div>

        </section>
  )
}

export default Feature