import Button from './components/Button';
import Modal from './components/Modal';
import useModal from './hooks/useModal';
import UncontrolledForm from './components/UncontrolledForm';
import ControlledForm from './components/ControlledForm';
import { useEffect, useState } from 'react';
import { useFormStore } from './store/formStore';
import ResultForm from './components/ResultForm';
import type { FormValues } from './types/formTypes';

function App() {
  const { isShow, toggleModal } = useModal();
  const [modalType, setModalType] = useState<
    'uncontrolled' | 'controlled' | null
  >(null);
  const [isFormValid, setIsFormValid] = useState(false);
  const { dataRHF, dataUncontrolled, clearUpdated, updated } = useFormStore();

  const handlerModal = (type: 'uncontrolled' | 'controlled') => {
    setModalType(type);
    toggleModal();
  };
  useEffect(() => {
    if (updated) {
      const timer = setTimeout(() => {
        clearUpdated();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [updated, clearUpdated]);
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-3">
        <h1 className="text-3xl mb-10">React Forms</h1>
        <div className="grid md:grid-cols-2 gap-4 w-full max-w-2xl mb-10">
          <div>
            <ResultForm
              title="Uncontrolled Result"
              data={dataUncontrolled as FormValues}
              updated={updated === 'uncontrolled'}
              renderBtn={() => (
                <Button
                  onClick={() => handlerModal('uncontrolled')}
                  className="mt-auto"
                >
                  Form - Uncontrolled
                </Button>
              )}
            />
          </div>

          <div>
            <ResultForm
              title="React Hook Form Result"
              data={dataRHF as FormValues}
              updated={updated === 'rhf'}
              renderBtn={() => (
                <Button
                  onClick={() => handlerModal('controlled')}
                  className="mt-auto"
                >
                  Form - React Hook Form{' '}
                </Button>
              )}
            />
          </div>
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
