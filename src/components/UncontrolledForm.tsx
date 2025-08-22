import { formFields, selectOptions } from '../utils/formFields';
import FormField from './FormFields/FormField';
import FormInput from './FormFields/FormInput';
import FormSelect from './FormFields/FormSelect';

function UncontrolledForm({ onSuccess }: { onSuccess: () => void }) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formdata = new FormData(e.currentTarget);
    const data = Object.fromEntries(formdata.entries());
    console.log(data);
    console.log('Uncontrolled form submitted');
    onSuccess();
  };
  return (
    <form id="modal-form" onSubmit={handleSubmit}>
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
                name={field.id}
                options={selectOptions[field.id] || []}
              />
            ) : (
              <FormInput id={field.id} type={field.type} name={field.id} />
            )}
          </FormField>
        );
      })}
    </form>
  );
}

export default UncontrolledForm;
