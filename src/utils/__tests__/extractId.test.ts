import { extractIdFromUrl } from '../extractId';

describe('extractId Util', () => {
  it('should extract numeric ID from URL', () => {
    expect(extractIdFromUrl('https://test.dev/test/5/')).toBe(5);
  });

  it('should extract ID even if URL has no trailing slash', () => {
    expect(extractIdFromUrl('https://test.dev/test/10')).toBe(10);
  });

  it('should return null if URL is empty', () => {
    expect(extractIdFromUrl('')).toBeNull();
  });

  it('should return NaN if URL ends with non-numeric', () => {
    expect(extractIdFromUrl('https://test.dev/test/abc')).toBeNaN();
  });
});
