import React from 'react'

const Carausal = () => {
  return (
      <div style={{marginTop:"-2rem",marginBottom:"3rem"}}>
      <div
        id="carouselExampleIndicators"
        class="carousel slide"
        data-ride="carousel"
      >
        <ol class="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            class="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              style={{
                height: "500px",
                width: "100%",
              }}
              class="d-block w-100"
              src="https://www.themealdb.com/images/media/meals/qxytrx1511304021.jpg"
              alt="First slide"
            />
          </div>
          <div class="carousel-item">
            <img
              style={{
                height: "500px",
                width: "100%",
              }}
              class="d-block w-100"
              src="https://www.themealdb.com/images/media/meals/qrqywr1503066605.jpg"
              alt="Second slide"
            />
          </div>
          <div class="carousel-item">
            <img
              style={{
                height: "500px",
                width: "100%",
              }}
              class="d-block w-100"
              src="https://www.themealdb.com/images/media/meals/k29viq1585565980.jpg"
              alt="Third slide"
            />
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
}

export default Carausal
