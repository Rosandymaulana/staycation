import React from 'react'
import { Fade } from 'react-awesome-reveal';

import ImageHero from 'assets/images/img-hero.jpg'
import ImageHero_ from 'assets/images/img-hero-frame.jpg'

import Button from 'elements/Button'

import formatNumber from 'utils/formatNumber'

export default function Hero(props) {

    function showMostPicked() {
        window.scrollTo({
            top: props.refMostPicked.current.offsetTop - 30,
            behavior: "smooth",
        });
    }

    return (
        <Fade bottom>
            <section className='container pt-4'>
                <div className="row align-items-center">
                    <div className="col-9" style={{ width: 530 }}>
                        <h1 className="fw-bolder line-height-1 mb-3">
                            Forget Busy Work, <br />
                            Start Next Vacation
                        </h1>
                        <p className="mb-5 font-weight-light fw-light w-75" >
                            we provide what you need to enjoy your holiday with family. Time to
                            make another memorable moments.
                        </p>
                        <Button onClick={showMostPicked} className="btn px-5" hasShadow isPrimary={showMostPicked}>
                            Show Me Now
                        </Button>


                        <div className="row mt-5">
                            <div className="col-auto" style={{ marginRight: 35 }}>
                                <img width="36" height="36"
                                    src="assets/images/icons/icon-traveler.svg"
                                    alt={`${props.data.travelers} Travelers`} />
                                <h6 className="mt-3 fw-bold">
                                    {formatNumber(props.data.travelers)} <span className="fw-light">
                                        Travelers
                                    </span>
                                </h6>
                            </div>
                            <div className="col-auto" style={{ marginRight: 35 }}>
                                <img width="36" height="36"
                                    src="assets/images/icons/icon-treasure.svg"
                                    alt={`${props.data.treasures} Treasure`} />
                                <h6 className="mt-3 fw-bold">
                                    {formatNumber(props.data.treasures)} <span className="fw-light">
                                        Treasure
                                    </span>
                                </h6>
                            </div>
                            <div className="col-auto" style={{ marginRight: 35 }}>
                                <img width="36" height="36"
                                    src="assets/images/icons/icon-cities.svg"
                                    alt={`${props.data.cities} Cities`} />
                                <h6 className="mt-3 fw-bold">
                                    {formatNumber(props.data.cities)} <span className="fw-light">
                                        Cities
                                    </span>
                                </h6>
                            </div>
                        </div>
                    </div>

                    <div className="col-6">
                        <div style={{ width: 520, height: 410 }}>
                            <img
                                src={ImageHero}
                                alt="Room with couches"
                                className="img-fluid position-absolute"
                                style={{ margin: "-30px 0 0 180px", zIndex: 1 }}
                            />
                            <img
                                src={ImageHero_}
                                alt="Room with couches frame"
                                className="img-fluid position-absolute"
                                style={{ margin: "0 -15px -15px 210px" }}
                            />
                        </div>
                    </div>

                </div>
            </section >
        </Fade>
    )
}
