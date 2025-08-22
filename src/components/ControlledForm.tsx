import { useForm } from 'react-hook-form';
import FormField from './FormFields/FormField';
import FormInput from './FormFields/FormInput';
import type { FormValues } from '../types/formTypes';
import { formFields, selectOptions } from '../utils/formFields';
import FormSelect from './FormFields/FormSelect';

function ControlledForm({ onSuccess }: { onSuccess: () => void }) {
  const { register, handleSubmit } = useForm<FormValues>();

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
          >
            {field.type === 'select' ? (
              <FormSelect
                id={field.id}
                register={register(field.id)}
                options={selectOptions[field.id] || []}
              />
            ) : (
              <FormInput
                id={field.id}
                type={field.type}
                register={register(field.id)}
              />
            )}
          </FormField>
        );
      })}
    </form>
  );
}

export default ControlledForm;
