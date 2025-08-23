import { useForm } from 'react-hook-form';
import FormField from './FormFields/FormField';
import FormInput from './FormFields/FormInput';
import type { FormValues } from '../types/formTypes';
import { formFields, selectOptions } from '../utils/formFields';
import FormSelect from './FormFields/FormSelect';
import { yupResolver } from '@hookform/resolvers/yup';
import { formSchema } from '../validation/formSchema';
import { useEffect } from 'react';
import FormAutocomplete from './FormFields/FormAutocomplete';

interface ControlledFormProps {
  onSuccess: () => void;
  onValidChange: (isValid: boolean) => void;
}

function ControlledForm({ onSuccess, onValidChange }: ControlledFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormValues>({
    resolver: yupResolver(formSchema),
    mode: 'onChange',
  });

  useEffect(() => {
    onValidChange(isValid);
  }, [isValid, onValidChange]);

  const onSubmit = (data: FormValues) => {
    console.log('Controlled form submitted', data);
    onSuccess();
  };

  return (
    <form id="modal-form" onSubmit={handleSubmit(onSubmit)}>
      {formFields.map((field) => {
        return (
          <FormField
            key={field.id}
            label={field.label}
            id={field.id}
            isRow={field.type === 'checkbox'}
            error={errors[field.id]}
          >
            {field.type === 'select' ? (
              <>
                {field.id === 'country' ? (
                  <FormAutocomplete
                    id="country"
                    register={register('country')}
                    error={errors.country}
                    options={selectOptions.country.map((opt) => opt.label)}
                  />
                ) : (
                  <FormSelect
                    id={field.id}
                    register={register(field.id)}
                    options={selectOptions[field.id] || []}
                    error={errors[field.id]}
                  />
                )}
              </>
            ) : (
              <FormInput
                id={field.id}
                type={field.type}
                register={register(field.id)}
                error={errors[field.id]}
              />
            )}
          </FormField>
        );
      })}
    </form>
  );
}

export default ControlledForm;
