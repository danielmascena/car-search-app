# Design

[https://github.com/squirreljuror/api-design-and-styles/blob/master/design-and-style-guide.pdf]()

# Task for Frontend Engineer

The following document describes the requirements, resources and expectations related
to the task for the JavaScript Engineer role.

# Requirements

The application must meet the following requirements:

- Fetch all available cars
- Implement pagination with limit of 10
- Allow the user to filter the cars by manufacturer or color
- Allow the user to sort the car by mileage
- Show the details of a selected car
- Add/Remove a car to/from the favorites collection using local storage

# Technical requirements

- Create a SPA using **ReactJS**
- Use redux for application state (optional)
- Use react-router-dom to manage routing
- Make tests green
- Use TypeScript, `any` types are not allowed
- Use react-testing-library for component tests

# Resources

For the UI, please use the design and style guide as a visual guide for your
application and implement the styles yourself from scratch instead of using a library
like Bootstrap or Material UI.

[https://github.com/squirreljuror/api-design-and-styles/blob/master/design-and-style-guide.pdf]()

For the application data, please use following methods:

`axios({ url: '/api/cars?page=1&sort=desc&manufacturer=Audi&color=red' })` to fetch cars

```javascript
{
  cars: [{
    stockNumber: 12345,
    manufacturerName: 'Audi',
    modelName: 'A5',
    color: 'red',
    mileage: {
      number: 223;
      unit: 1;
    },
    fuelType: 'Benzin',
    pictureUrl: '/images/car.svg'
  }],
  totalPageCount: 20,
  totalCarsCount: 100
}
```

`axios({ url: '/api/cars/1' })` to fetch one car by stockNumber

```javascript
{
  stockNumber: 12345,
  manufacturerName: 'Audi',
  modelName: 'A5',
  color: 'red',
  mileage: {
    number: 223;
    unit: 1;
  },
  fuelType: 'Benzin',
  pictureUrl: '/images/car.svg'
}
```

`axios({ url: '/api/colors' })` to fetch colors

```javascript
['red', 'green'];
```

`axios({ url: '/api/manufacturers' })` to fetch manufacturers

```javascript
{
  uuid: '123-231',
  name: 'BMW',
  models: [{
    uuid: '234-1222',
    name: 'A5'
  }]
}
```

Note: Using of `axios` or other xhr based library is mandatory. (fetch api is not supported)

# Our expectations

The most important things for us when evaluating your solution are:

- Make all tests green
- Use best practices
- Clear code organization and project structure
- A well developed UI/UX

Feel free to choose the techniques you feel more comfortable with and
the most important thing: _Have fun!_
