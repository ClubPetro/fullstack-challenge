import React, { useEffect } from 'react';
import { IconButton, Snackbar } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import { MdClose } from 'react-icons/md';

import { ToastMessage, useToast } from '../../../hooks/toast';

interface ToastProps {
  message: ToastMessage;
}

const Toast: React.FC<ToastProps> = ({ message }) => {
  const { removeToast } = useToast();

  useEffect(() => {
    const timer = setTimeout(() => {
      removeToast(message.id);
    }, 6000);

    return () => {
      clearTimeout(timer);
    };
  }, [message.id, removeToast]);

  return (
    <Snackbar
      key={message.id}
      open
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
    >
      <Alert
        elevation={6}
        variant="filled"
        severity={message.type}
        action={() => (
          <IconButton
            size="small"
            color="inherit"
            onClick={() => removeToast(message.id)}
          >
            <MdClose fontSize="small" />
          </IconButton>
        )}
      >
        {message.description}
      </Alert>
    </Snackbar>
  );
};

export default Toast;
