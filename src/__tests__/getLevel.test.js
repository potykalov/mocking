jest.mock('../js/http.js');

import getLevel from '../js/getLevel.js';
import fetchData from '../js/http.js';

const userId = 1;

describe('getLevel', () => {
  it('returns the user level for a successful server response', () => {
    fetchData.mockReturnValue({
      status: 'ok',
      level: 10,
    });

    const expected = 'Ваш текущий уровень: 10';
    const received = getLevel(userId);

    expect(received).toBe(expected);
  });

  it('returns an error message for an unsuccessful server response', () => {
    fetchData.mockReturnValue({
      status: 'error',
    });

    const received = getLevel(userId);
    const expected = 'Информация об уровне временно недоступна';

    expect(received).toBe(expected);
  });
});
