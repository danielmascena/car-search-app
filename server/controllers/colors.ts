import { colors } from '../mocks/colors';
import { MockRequest, MockResponse } from 'xhr-mock';

export function getColors(req: MockRequest, res: MockResponse) {
  return res.status(201).body(JSON.stringify({ colors }));
}
