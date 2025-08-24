import type { FormValues } from '../types/formTypes';

export const formFields: Array<{
  id: keyof FormValues;
  label: string;
  type?: string;
}> = [
  { id: 'name', label: 'Name', type: 'text' },
  { id: 'age', label: 'Age', type: 'number' },
  { id: 'email', label: 'Email', type: 'email' },
  { id: 'gender', label: 'Gender', type: 'select' },
  { id: 'picture', label: 'Picture', type: 'file' },
  { id: 'country', label: 'Country', type: 'select' },
  { id: 'password', label: 'Password', type: 'password' },
  { id: 'confirmPassword', label: 'Confirm Password', type: 'password' },
  { id: 'terms', label: 'Terms and conditions', type: 'checkbox' },
];

export const selectOptions: Record<
  string,
  Array<{ value: string; label: string }>
> = {
  gender: [
    { value: 'male', label: 'Male' },
    { value: 'female', label: 'Female' },
  ],
};
