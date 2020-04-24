import React, { Component } from 'react'

export class Home extends Component {
    render() {
        return (
            <div className='container'>

                <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="d-block w-100" src={require("../../assets/feedback_img.jpeg")} alt="First slide" />
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src="..." alt="Second slide" />
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src="..." alt="Third slide" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home
