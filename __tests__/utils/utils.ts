import formatDate from '../../src/Utils/utils';

describe('formatDate', () => {
  it('formats a date string correctly', () => {
    const dateString = '2023-04-27T12:00:00Z';
    const formattedDate = formatDate(dateString);

    expect(formattedDate).toMatch(/27 de abril de 2023/);
  });
});
