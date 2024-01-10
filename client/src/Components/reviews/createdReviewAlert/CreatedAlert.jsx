import { useContext, useEffect, useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import { CreatedAlertContext } from '../../../contexts/alertContext';

function CreatedAlert() {
  const [showAlert, setShowAlert] = useState(true)
  const { changeCreatedReviewState } = useContext(CreatedAlertContext)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowAlert(false)
      changeCreatedReviewState(false)
    }, 5000)

    return () => clearTimeout(timeout)
  }, [changeCreatedReviewState])


  return (
    <>
      {showAlert && [
        'success'
      ].map((variant) => (
        <Alert key={variant} variant={variant}>
          You successfully created a new review! Check it out.
        </Alert>
      ))
      }
    </>
  );
}

export default CreatedAlert;