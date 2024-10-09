import React from 'react';
import Title from './Title';
import { tourCard } from '../data';
const Tours = () => {
  return (
    <section className="section" id="tours">
      <Title title="featured" subTitle="tours" />

      <div className="section-center featured-center">
        {tourCard.map(
          ({ id, tourDate, tourTitle, tourDescription, location, duration, price, image }) => {
            return (
              <article className="tour-card" key={id}>
                <div className="tour-img-container">
                  <img src={image} className="tour-img" alt="" />
                  <p className="tour-date">{tourDate}</p>
                </div>
                <div className="tour-info">
                  <div className="tour-title">
                    <h4>{tourTitle}</h4>
                  </div>
                  <p>{tourDescription}</p>
                  <div className="tour-footer">
                    <p>
                      <span>
                        <i className="fas fa-map"></i>
                      </span>{' '}
                      {location}
                    </p>
                    <p>{duration}</p>
                    <p>{price}</p>
                  </div>
                </div>
              </article>
            );
          }
        )}
      </div>
    </section>
  );
};

export default Tours;
