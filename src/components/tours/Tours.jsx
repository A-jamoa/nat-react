import React from 'react'
import "./Tour.scss"

const Tours = () => {
  return (
    <section className="section-tours">
            <div className="u-text-center mb-lg">
                <h2 className="heading-secondary">Most Popular Projects</h2>
            </div>

            <div className="row">
                <div className="col-1-of-3">
                    <div className="card">
                        <div className="card__side card__side--front">
                            <div className="card__pic card__pic--1">
                                &nbsp;
                            </div>
                            <h4 className="card__heading">
                                <span className="card__heading--span card__heading--span-1">
                                    Heading title
                                </span>
                            </h4>
                            <div className="card__description">
                                <ul>
                                    <li>Full stack app</li>
                                    <li>With: React, Express, NodeJs, MongoDB</li>
                                    <li>Created by LazizbekDev</li>
                                    <li>Difficutly: hard</li>
                                </ul>
                            </div>
                        </div>
                        <div className="card__side card__side--back card__side--back-1">
                            <div className="card__info">
                                <div className="card__price--box">
                                    <p className="card__price--title">only</p>
                                    <p className="card__price__value">$599</p>
                                </div>
                                <a href="/#" className="btn btn--white btn--animated">watch now</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-1-of-3">
                    <div className="card">
                        <div className="card__side card__side--front">
                            <div className="card__pic card__pic--2">
                                &nbsp;
                            </div>
                            <h4 className="card__heading">
                                <span className="card__heading--span card__heading--span-2">
                                    Heading title
                                </span>
                            </h4>
                            <div className="card__description">
                                <ul>
                                    <li>Full stack app</li>
                                    <li>With: React, Express, NodeJs, MongoDB</li>
                                    <li>Created by LazizbekDev</li>
                                    <li>Difficutly: hard</li>
                                </ul>
                            </div>
                        </div>
                        <div className="card__side card__side--back card__side--back-2">
                            <div className="card__info">
                                <div className="card__price--box">
                                    <p className="card__price--title">only</p>
                                    <p className="card__price__value">$599</p>
                                </div>
                                <a href="/#" className="btn btn--white btn--animated">watch now</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-1-of-3">
                    <div className="card">
                        <div className="card__side card__side--front">
                            <div className="card__pic card__pic--3">
                                &nbsp;
                            </div>
                            <h4 className="card__heading">
                                <span className="card__heading--span card__heading--span-3">
                                    Heading title
                                </span>
                            </h4>
                            <div className="card__description">
                                <ul>
                                    <li>Full stack app</li>
                                    <li>With: React, Express, NodeJs, MongoDB</li>
                                    <li>Created by LazizbekDev</li>
                                    <li>Difficutly: hard</li>
                                </ul>
                            </div>
                        </div>
                        <div className="card__side card__side--back card__side--back-3">
                            <div className="card__info">
                                <div className="card__price--box">
                                    <p className="card__price--title">only</p>
                                    <p className="card__price__value">$599</p>
                                </div>
                                <a href="/#" className="btn btn--white btn--animated">watch now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default Tours