import { Modal, ModalDialog } from '@mui/joy'
import React from 'react'
import StationsMap from '../../Map'
import { useDispatch, useSelector } from 'react-redux';
import { modalMap } from '..';
import { popModal } from '../../../redux/layoutSlice/layoutSlice';

function StationsMapModal() {
    const dispatch = useDispatch();
    const {modals} = useSelector((state)=>state.layoutState)


  return (
    <Modal open={modals.some((modal)=>modal.key===modalMap.stationMapModal)} onClose={() => dispatch(popModal())}>
        <ModalDialog  minWidth={'70vw'} sx={{height:'70vh'}} >
            <StationsMap/>
        </ModalDialog>
    </Modal>
  )
}

export default StationsMapModal