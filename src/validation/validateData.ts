import { ValidationError } from 'yup';
import { formSchema } from './formSchema';

export async function validateData(data: unknown) {
  try {
    const validated = await formSchema.validate(data, {
      abortEarly: false,
    });
    return { isValid: true, data: validated };
  } catch (error) {
    if (error instanceof ValidationError) {
      const fieldErrors: Record<string, string> = {};

      error.inner.forEach((err) => {
        if (err.path && !fieldErrors[err.path]) {
          fieldErrors[err.path] = err.message;
        }
      });

      return { isValid: false, errors: fieldErrors };
    }

    throw error;
  }
}
