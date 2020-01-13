import React, { FunctionComponent } from 'react';

import { wordCapitalize, mileageFormat } from '../helpers';
import { ICar } from '../types';

interface CarListItemProps {
  car: ICar;
  indexCar?: number;
}

const CarListItem: FunctionComponent<CarListItemProps> = ({
  car,
  indexCar = car.stockNumber,
  children
}) => {
  const {
    manufacturerName,
    stockNumber,
    modelName,
    color,
    fuelType,
    pictureUrl,
    mileage: { number, unit }
  } = car;

  return (
    <article key={indexCar} className="car-container">
      <figure className="car-pic">
        <img src={pictureUrl} alt={manufacturerName} />
      </figure>
      <section className="car-content">
        <div>
          <h1 className="car-heading" data-testid="car_heading">
            {manufacturerName + ' ' + modelName}
          </h1>
          <p className="car-details">
            Stock #{' '}
            {` ${stockNumber} - ${mileageFormat(number) +
              ' ' +
              unit.toUpperCase()} - ${fuelType} - ${wordCapitalize(
              color
            )}`}{' '}
          </p>
        </div>
        <div>{children}</div>
      </section>
    </article>
  );
};

export default CarListItem;
