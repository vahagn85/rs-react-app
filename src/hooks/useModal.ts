import { useState } from 'react';

const useModal = () => {
  const [isShow, setIsShow] = useState<boolean>(false);

  function toggleModal() {
    setIsShow(!isShow);
  }

  return {
    isShow,
    toggleModal,
  };
};

export default useModal;
