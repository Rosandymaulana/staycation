import React, { Component } from 'react'
import InputDate from 'elements/Form/InputDate'
import Breadcrumb from 'elements/Breadcrumb'
import PageDetailTitle from 'parts/PageDetailTitle'

export default class Example extends Component {
    // state = {
    //     value: {
    //         startDate: new Date(),
    //         endDate: new Date(),
    //         key: "selection"
    //     }
    // }

    // handleChange = e => {
    //     this.setState({ [e.target.name]: e.target.value })
    // }

    render() {
        const breadcrumb = [
            { pageTitle: "Home", pageHref: "" },
            { pageTitle: "House Details", pageHref: "" }
        ]

        return (
            <div className="container" >
                <div
                    className="row align-items-center justify-content-center"
                    style={{ height: "100vh" }}
                >
                    <div className="col-auto">
                        <Breadcrumb data={breadcrumb} />

                    </div>
                </div>
            </div>
        )
    }
}

