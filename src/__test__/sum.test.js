/* global test, expect */

import sum from '../js/sum';

test('should sum', () => {
  const result = sum(3, 3);

  expect(result).toBe(6);
});
