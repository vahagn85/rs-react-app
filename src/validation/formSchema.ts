import * as yup from 'yup';
import type { FormValues } from '../types/formTypes';
import countries from '../data/countries.json';

export const formSchema: yup.ObjectSchema<FormValues> = yup.object().shape({
  name: yup
    .string()
    .trim('Must not contain leading or trailing whitespace.')
    .strict(true)
    .required('Name is required')
    .matches(/^[A-Z]/, 'Name must start with an uppercase letter')
    .min(2, 'Name must be at least 2 characters'),
  age: yup
    .number()
    .typeError('Age must be a number')
    .required('Age is required')
    .integer('Age must be number')
    .positive('Age must be positive'),
  email: yup
    .string()
    .trim('Must not contain leading or trailing whitespace.')
    .strict(true)
    .email('Please enter a valid email')
    .required('Email is required'),
  password: yup
    .string()
    .trim('Password must not contain leading or trailing whitespace.')
    .strict(true)
    .required('Password is required')
    .matches(/[0-9]/, 'Password must contain at least one number (0-9).')
    .matches(
      /[A-Z]/,
      'Password must contain at least 1 uppercase letter (A-Z).'
    )
    .matches(/[a-z]/, 'Password must contain at least 1 lowercase letter')
    .matches(
      /[^A-Za-z0-9]/,
      'Password must contain at least 1 special character'
    ),
  confirmPassword: yup
    .string()
    .required('Please confirm your password')
    .oneOf([yup.ref('password')], 'Passwords must match'),
  gender: yup.string().required('Please select a gender'),
  terms: yup
    .boolean()
    .required('Terms is required')
    .oneOf([true], 'You must accept the T&C'),
  picture: yup
    .mixed<FileList>()
    .required('Picture is required')
    .test('fileType', 'Incorrect file format (Only: jpeg,png)', (value) => {
      if (value instanceof FileList && value.length > 0) {
        return ['image/jpeg', 'image/png'].includes(value[0].type);
      } else if (value instanceof File) {
        return ['image/jpeg', 'image/png'].includes(value.type);
      }
      return false;
    })
    .test('fileSize', 'File size is too large (max:1MB)', (value) => {
      if (value instanceof FileList && value.length > 0) {
        return value[0].size <= 1 * 1024 * 1024;
      } else if (value instanceof File) {
        return value.size <= 1 * 1024 * 1024;
      }
      return false;
    }),
  country: yup
    .string()
    .required('Country is required')
    .oneOf(
      countries.map((item) => item.name),
      'Please select a valid country'
    ),
});
