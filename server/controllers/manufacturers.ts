import { manufacturers } from '../mocks/manufacturers';
import { MockRequest, MockResponse } from 'xhr-mock';

export function getManufacturers(req: MockRequest, res: MockResponse) {
  return res.status(201).body(JSON.stringify({ manufacturers }));
}
