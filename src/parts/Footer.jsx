import React from 'react'
import Button from 'elements/Button'
import IconText from 'parts/iconText'

export default function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-auto" style={{ width: 400 }}>
                        <IconText />
                        <p className="brand-tagline">
                            We kaboom your beauty holiday instantly and memorable.
                        </p>
                    </div>
                    <div className="col-2">
                        <h6 className="mt-2">For Beinners</h6>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <Button className='text-decoration-none' type="link" href="/register">
                                    New Account
                                </Button>
                            </li>
                            <li className="list-group-item">
                                <Button className='text-decoration-none' type="link" href="/properties">
                                    Start Booking a Room
                                </Button>
                            </li>
                            <li className="list-group-item">
                                <Button className='text-decoration-none' type="link" href="/use-payments">
                                    Use Payments
                                </Button>
                            </li>
                        </ul>
                    </div>
                    <div className="col-2" style={{ margin: '0 60px 0 60px' }}>
                        <h6 className="mt-2">Explore Us</h6>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <Button className='text-decoration-none' type="link" href="/careers">
                                    Our Careers
                                </Button>
                            </li>
                            <li className="list-group-item">
                                <Button className='text-decoration-none' type="link" href="/privacy">
                                    Privacy
                                </Button>
                            </li>
                            <li className="list-group-item">
                                <Button className='text-decoration-none' type="link" href="/terms">
                                    Terms & Conditions
                                </Button>
                            </li>
                        </ul>
                    </div>
                    <div className="col-2">
                        <h6 className="mt-2">Connect Us</h6>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <Button
                                    className='text-decoration-none'
                                    isExternal
                                    type="link"
                                    href="mailto:rosandy1118@gmail.com"
                                >
                                    support@staycation.id
                                </Button>
                            </li>
                            <li className="list-group-item">
                                <Button className='text-decoration-none' isExternal type="link" href="tel:+6295397738345">
                                    021 - 2208 - 1996
                                </Button>
                            </li>
                            <li className="list-group-item">
                                <span>Staycation, Kemang, Jakarta</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="col text-center copyrights">
                        Copyright 2019 • All rights reserved • Staycation
                    </div>
                </div>
            </div>
        </footer>
    )
}
