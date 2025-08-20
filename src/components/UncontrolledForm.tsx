function UncontrolledForm({ onSuccess }: { onSuccess: () => void }) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Uncontrolled form submitted');
    onSuccess();
  };
  return (
    <form id="modal-form" onSubmit={handleSubmit}>
      <label className="block mb-2">Uncontrolled Input</label>
      <input type="text" className="border p-2 rounded w-full" />
    </form>
  );
}

export default UncontrolledForm;
