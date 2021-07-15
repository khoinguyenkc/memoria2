import React, { Component } from 'react';

 class InstagramCarousel extends Component {
    renderImages = () => {
        const imageArray = this.props.pictures.map( (pic, idx) => { 
            const tag = (idx === 0 ) ? "carousel-item active" : "carousel-item";
            console.log(tag)
            return   (
                <div class={tag}>
                <img src={pic.url} class="d-block w-100" alt="..."></img>
          </div>)
        })

        return imageArray
    
        
    }

    renderIndicators = () => {
        const indicatorsArray = this.props.pictures.map( (pic, idx) => { 
            let buttonElem;
            if (idx === 0) {
                buttonElem =  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>

            } else {
                buttonElem = <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={idx} aria-label={`Slide ${idx+1}`}></button>

            }
            return   buttonElem
        })


        return indicatorsArray
    }
    
    render() {
        // props.pictures
        return (
            <div class="container">
                {/* <h4>instagram carousel component</h4> */}
            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
            {/* <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button> */}
            {this.renderIndicators()}
        </div>

            <div class="carousel-inner">
            {/* <div class="carousel-item active">
                <img src="https://epfilms.tv/wp-content/uploads/2018/07/leonadrd.jpg" class="d-block w-100" alt="..."></img>
              </div> */}

÷              {/* <div class="carousel-item">
                <img src="https://cdn.taschen.com/media/images/1640/leibovitz_su_int_open008_02615_1402201532_id_774359.jpg" class="d-block w-100" alt="..."></img>
              </div>
              <div class="carousel-item">
                <img src="https://aestheticamagazine.com/wp-content/uploads/2016/01/kate-blanchet-by-annie-leibovitz-2004.jpg" class="d-block w-100" alt="..."></img>
              </div> */}
              {this.renderImages()}
            </div>
        
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>

            </div>

        )
    }
}

export default InstagramCarousel;
