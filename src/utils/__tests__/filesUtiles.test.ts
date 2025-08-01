import { generateCSV } from '../filesUtiles';
describe('generateCSV Util', () => {
  it('should return empty string for empty array', () => {
    expect(generateCSV([])).toBe('');
  });

  it('should generate CSV for objects', () => {
    const items = [
      { name: 'Item1', age: 25 },
      { name: 'Item2', age: 33 },
    ];
    const result = generateCSV(items);

    expect(result).toBe('name;age\n"Item1";25\n"Item2";33');
  });
});
