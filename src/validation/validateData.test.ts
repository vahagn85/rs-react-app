import { validateData } from './validateData';
import type { FormValues } from '../types/formTypes';
import { mockData } from '../test-utils/mockData';

describe('validateData', () => {
  it('should return valid for correct data', async () => {
    const file = new File(['dummy content'], 'avatar.png', {
      type: 'image/png',
    });
    const mockDataWithFile: FormValues = {
      ...mockData,
      picture: file,
    };
    const result = await validateData(mockDataWithFile);

    expect(result.isValid).toBe(true);
    expect(result.data).toEqual(mockDataWithFile);
  });

  it('should return errors for invalid data', async () => {
    const invalidMockData = {
      ...mockData,
      name: 'john',
      email: 'invalid-email',
      password: 'short',
    };

    const result = await validateData(invalidMockData);

    expect(result.isValid).toBe(false);
    expect(result.errors).toBeDefined();
    expect(result.errors?.name).toBeDefined();
    expect(result.errors?.email).toBeDefined();
    expect(result.errors?.password).toBeDefined();
  });
});
