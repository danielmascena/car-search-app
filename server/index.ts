import mock from 'xhr-mock';
import { getCars, getCar } from './controllers/cars';
import { getColors } from './controllers/colors';
import { getManufacturers } from './controllers/manufacturers';

mock.setup();
mock.get(/\/api\/cars\/[0-9]/, getCar);
mock.get(/\/api\/cars/, getCars);
mock.get(/\/api\/colors/, getColors);
mock.get(/\/api\/manufacturers/, getManufacturers);
