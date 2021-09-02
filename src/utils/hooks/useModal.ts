import { useState } from 'react';

//modal custom hook
const useModal = (isVisible: boolean): [boolean, () => void, () => void] => {
  const [value, setValue] = useState<boolean>(isVisible);
  const openModal = () => {
    setValue(true);
  };
  const closeModal = () => {
    setValue(false);
  };

  return [value, openModal, closeModal];
};

export default useModal;