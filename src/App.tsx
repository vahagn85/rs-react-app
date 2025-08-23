import Button from './components/Button';
import Modal from './components/Modal';
import useModal from './hooks/useModal';
import UncontrolledForm from './components/UncontrolledForm';
import ControlledForm from './components/ControlledForm';
import { useState } from 'react';

function App() {
  const { isShow, toggleModal } = useModal();
  const [modalType, setModalType] = useState<
    'uncontrolled' | 'controlled' | null
  >(null);
  const [isFormValid, setIsFormValid] = useState(false);

  const handlerModal = (type: 'uncontrolled' | 'controlled') => {
    setModalType(type);
    toggleModal();
  };
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-3xl mb-10">React Forms</h1>
        <div className="flex  gap-4">
          <Button onClick={() => handlerModal('uncontrolled')}>
            Form - Uncontrolled{' '}
          </Button>
          <Button onClick={() => handlerModal('controlled')}>
            Form - React Hook Form{' '}
          </Button>
        </div>
      </div>
      <Modal
        isOpen={isShow}
        title={
          modalType === 'uncontrolled'
            ? 'Form - Uncontrolled'
            : 'Form - React Hook Form'
        }
        onClose={toggleModal}
        isSubmitDisabled={modalType === 'controlled' && !isFormValid}
      >
        {modalType === 'uncontrolled' && (
          <UncontrolledForm onSuccess={toggleModal} />
        )}
        {modalType === 'controlled' && (
          <ControlledForm
            onSuccess={toggleModal}
            onValidChange={setIsFormValid}
          />
        )}
      </Modal>
    </>
  );
}

export default App;
