import { cars, ICar } from '../mocks/cars';
import { MockRequest, MockResponse } from 'xhr-mock';

const ITEMS_PER_PAGE = 10;

function paginate(collection: Array<ICar> = [], page = 1) {
  const start = (page - 1) * ITEMS_PER_PAGE;
  const end = start + ITEMS_PER_PAGE;

  return collection.slice(start, end);
}

function filterByProperty(
  propertyName: 'manufacturerName' | 'color',
  propertyValue: string | null,
  collection: Array<ICar>
) {
  if (propertyValue) {
    return collection.filter(function(item) {
      return item[propertyName].toLowerCase() === propertyValue.toLowerCase();
    });
  }

  return collection;
}

export function getCar(req: MockRequest, res: MockResponse) {
  const url = req.url();
  const stockNumber = url.path ? url.path.match(/(\d+)/) : [];

  const car = stockNumber
    ? cars.find(function(eachCar) {
        return eachCar.stockNumber === Number(stockNumber[0]);
      })
    : null;

  if (car) {
    return res.status(201).body(JSON.stringify({ car }));
  } else {
    return res.status(404);
  }
}

export function getCars(req: MockRequest, res: MockResponse) {
  const url = req.url();
  const query = new URLSearchParams(url.query);
  let filteredCars = cars;
  const page = query.get('page');
  const sort = query.get('sort');
  const manufacturer = query.get('manufacturer');
  const color = query.get('color');

  filteredCars = filterByProperty(
    'manufacturerName',
    manufacturer,
    filteredCars
  );
  filteredCars = filterByProperty('color', color, filteredCars);

  if (sort && ['asc', 'des'].includes(sort)) {
    filteredCars.sort(function(a, b) {
      if (sort === 'asc') {
        return a.mileage.number - b.mileage.number;
      }

      return b.mileage.number - a.mileage.number;
    });
  } else {
    filteredCars.sort(function(a, b) {
      return a.stockNumber - b.stockNumber;
    });
  }

  return res.status(201).body(
    JSON.stringify({
      cars: paginate(filteredCars, Number(page || 1)),
      totalPageCount: Math.ceil(filteredCars.length / ITEMS_PER_PAGE),
      totalCarsCount: filteredCars.length
    })
  );
}
