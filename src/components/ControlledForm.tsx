import { useForm } from 'react-hook-form';

interface FormValues {
  name: string;
}

function ControlledForm({ onSuccess }: { onSuccess: () => void }) {
  const { register, handleSubmit } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => {
    console.log('Controlled form submitted', data);
    onSuccess();
  };

  return (
    <form id="modal-form" onSubmit={handleSubmit(onSubmit)}>
      <label className="block mb-2">Controlled Input</label>
      <input
        {...register('name')}
        type="text"
        className="border p-2 rounded w-full"
      />
    </form>
  );
}

export default ControlledForm;
