import { useRef } from 'react';
import { formFields, selectOptions } from '../utils/formFields';
import FormField from './FormFields/FormField';
import FormInput from './FormFields/FormInput';
import FormSelect from './FormFields/FormSelect';
import { validateData } from '../validation/validateData';
import FormAutocomplete from './FormFields/FormAutocomplete';
import { useFormStore } from '../store/formStore';
import type { FormValues } from '../types/formTypes';
import { fileToBase64 } from '../utils/fileToBase64';

function UncontrolledForm({ onSuccess }: { onSuccess: () => void }) {
  const formRef = useRef({} as HTMLFormElement);
  const addData = useFormStore((store) => store.addDataUncontrolled);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();

      if (!formRef.current) return;

      formRef.current
        .querySelectorAll('.error-msg')
        .forEach((el) => el.remove());

      const formData = new FormData(formRef.current);
      const raw = Object.fromEntries(formData.entries());
      const data = {
        ...raw,
        terms: formData.has('terms'),
      };

      const result = await validateData(data);

      if (!result.isValid && formRef.current) {
        Object.entries(result.errors ?? {}).forEach(([field, message]) => {
          const input = formRef.current?.querySelector<
            HTMLInputElement | HTMLSelectElement
          >(`[name="${field}"]`);
          if (input) {
            const span = document.createElement('span') as HTMLSpanElement;
            span.className = 'error-msg absolute top-full text-red-500 text-xs';
            span.textContent = message;
            input.insertAdjacentElement('afterend', span);
          }
        });
      } else {
        const newData = { ...result.data } as FormValues;
        if (newData.picture instanceof File) {
          newData.picture = await fileToBase64(newData.picture);
        }
        addData(newData);
        onSuccess();
      }
    } catch (error) {
      void error;
    }
  };
  return (
    <form id="modal-form" onSubmit={handleSubmit} ref={formRef}>
      {formFields.map((field) => {
        return (
          <FormField
            key={field.id}
            label={field.label}
            id={field.id}
            isRow={field.type === 'checkbox'}
          >
            {field.type === 'select' ? (
              <>
                {field.id === 'country' ? (
                  <FormAutocomplete id="country" name="country" />
                ) : (
                  <FormSelect
                    id={field.id}
                    name={field.id}
                    options={selectOptions[field.id] || []}
                  />
                )}
              </>
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
