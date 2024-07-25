import { Modal, ModalDialog, DialogTitle, Divider, DialogContent, Button, DialogActions } from '@mui/joy'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { clearModalConfig, popModal } from '../../../redux/layoutSlice/layoutSlice';
import { modalMap } from '..';
import { HiExclamationTriangle } from 'react-icons/hi2';

function ConfirmActionModal({text, confirmText, confirmAction}) {
    const dispatch = useDispatch()
    const {modals} = useSelector((state)=>state.layoutState) 
  return (
    <Modal open={modals.some((modal)=>modal.key===modalMap.confirmActionModal)} onClose={() => {
        dispatch(popModal(modalMap.confirmActionModal))
        dispatch(clearModalConfig())
        }}>
    <ModalDialog variant="outlined" role="alertdialog">
      <DialogTitle>
        <HiExclamationTriangle />
        Confirmation
      </DialogTitle>
      <Divider />
      <DialogContent>
        <p className='font-sans'>
        {text}
        </p>
      </DialogContent>
      <DialogActions>
        <Button variant="solid" color="danger"  onClick={confirmAction}>
          {confirmText}
        </Button>
        <Button variant="plain" color="neutral" onClick={()=>{
            dispatch(popModal(modalMap.confirmActionModal))
            dispatch(clearModalConfig())
            }} >
          Cancel
        </Button>
      </DialogActions>
    </ModalDialog>
  </Modal>
  )
}

export default ConfirmActionModal