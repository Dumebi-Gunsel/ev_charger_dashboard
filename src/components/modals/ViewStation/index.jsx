import { Modal, ModalDialog , DialogTitle, DialogContent, Typography, Stack, Divider, Card, Button} from '@mui/joy'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setError, setMessage, setShowSnackbar, popModal, pushModal, setModalConfig  } from '../../../redux/layoutSlice/layoutSlice';
import StatusPill from '../../StatusPill/index';
import { useDeleteChargingStationMutation } from '../../../redux/stationsSlice/stationsActions';
import { modalMap } from '..';
import EditStationModal from '../EditStationModal';
import ConfirmActionModal from '../ConfirmActionModal';

function ViewStation() {
    const { modals } = useSelector((state) => state.layoutState)
    const [deleteChargingStation,{isError:isDeleteError, isLoading:isDeleting, error:deleteError, data:deleteResponse}] = useDeleteChargingStationMutation()
    
    const dispatch = useDispatch()

    useEffect(()=>{
        if(!isDeleting){
            if(isDeleteError){
                dispatch(setError(deleteError))
                dispatch(setShowSnackbar(true))
            }if(deleteResponse){
                dispatch(setMessage(deleteResponse))
                dispatch(setShowSnackbar(true))
                dispatch(popModal())
            }
        }
    }, [isDeleting, isDeleteError, deleteError, dispatch, deleteResponse])

    const station = modals.find(modal=>modal.key===modalMap.viewStationModal)?.data

    return (
        <>
        
        <Modal open={modals.some((modal)=>modal.key===modalMap.viewStationModal)}  onClose={() => dispatch(popModal())} >
           <ModalDialog maxWidth={'50vw'} minWidth={'50vw'}> 
              {station ? <> <DialogTitle>View Charger</DialogTitle>
              <DialogContent>
                <p className='font-medium'>{station.name}</p> 
                <p className='text-xs truncate cursor-default'>Charge Box ID : {station.id}</p>
                </DialogContent>
                <Stack direction={'column'} sx={{paddingTop: '20px'}} spacing={2}>
                <Typography level='body-sm'>
                 Type:  {station.type}
                </Typography>
                <Typography level='body-sm'>
                 Location:  {station.location?.latitude??0} , {station.location?.longitude??0}
                </Typography>
                <Divider/>
                <Typography width={'100%'} textAlign={'center'} level='h4' fontSize={'16px'}>Outlets</Typography>  
                <Stack direction={'row'} justifyContent={'space-evenly'} >
                
                 {
                    station.outlets.map((outlet, _idx)=>{
                      return  <Card size='lg' variant='outlined' sx={{minHeight:'200px', width:'200px'}}>
                            <Stack direction={'column'} spacing={2} justifyContent={'center'} alignItems={'center'}>
                                <Typography>{outlet.name}</Typography>
                                <Typography display={'flex'} flexDirection={'column'} alignItems={'center'}>{outlet.totalSessions} <Typography level='body-xs' fontWeight={'700'}>total sessions</Typography></Typography>
                
                                <Typography display={'flex'} flexDirection={'column'} alignItems={'center'}>{outlet.totalChargeTime} <Typography level='body-xs' fontWeight={'700'}>total charge time</Typography></Typography>
                                <StatusPill status={station.status}/>
                            </Stack>
                        </Card>
                    })
                 }
                </Stack>
                <Divider/>
                <Stack direction={'row'} justifyContent={'space-between'} spacing={2} sx={{paddingTop:'20px'}}>
                 <Button disabled={isDeleting} sx={{flex:1}} onClick={()=>{
                    dispatch(pushModal({key:modalMap.editStationModal, data: station}))
                 }}>Edit Station</Button>
                 <Button loading={isDeleting} sx={{flex:1}} color='danger' onClick={()=>{
                  deleteChargingStation(station._id)
                 }}>Delete Station</Button>
                </Stack>
                </Stack>
                </> : 
            <div className='h-full w-full flex items-center justify-center'>
                <Typography level='body-md'>
                Something wen't wrong, please try again
                </Typography>
                </div>}
           </ModalDialog>
        </Modal>
        <EditStationModal/>
        <ConfirmActionModal/>
        </>
    )
}

export default ViewStation