import { Button, DialogContent, DialogTitle, FormControl, FormLabel, Input, Modal, ModalDialog, Option, Select, Stack, Textarea } from '@mui/joy'
import React, { useEffect, useState } from 'react'
import { useUpdateChargingStationMutation } from '../../../redux/stationsSlice/stationsActions';
import { useDispatch, useSelector } from 'react-redux';
import { modalMap } from '..';
import { popModal, setError, setMessage, setShowSnackbar } from '../../../redux/layoutSlice/layoutSlice';

function EditStationModal() {
    const dispatch = useDispatch()
    const [updateChargingStation, {data,  isError: isUpdateStationError, isLoading:isUpdatingStation, isSuccess: isUpdatingStationSuccess, error: updateStationError}] = useUpdateChargingStationMutation()
    const {modals} = useSelector((state)=>state.layoutState)
    const prevFormData = modals.find(modal=>modal.key===modalMap.editStationModal)?.data
    const [formData, setFormData] = useState();

    useEffect(()=>{
        if(isUpdateStationError){
            dispatch(setError(updateStationError.error.message))
            dispatch(setShowSnackbar(true))
        }if(isUpdatingStationSuccess){
            dispatch(setMessage(data))
            dispatch(setShowSnackbar(true))
            dispatch(popModal())
        }
    }, [isUpdatingStationSuccess, isUpdatingStation, updateStationError ])

    useEffect(()=>{
        setFormData({...prevFormData, ocppProtocol:prevFormData?.type})
    }, [modals])



  return (
    <div>
        <Modal open={modals.some(modal=>modal.key===modalMap.editStationModal)} onClose={()=>{dispatch(popModal())}}>
            <ModalDialog>
                <DialogTitle><p className='font-sans'>Edit Charging Station</p></DialogTitle>
                <DialogContent><p className='font-sans'>Make changes to registered charging stations</p></DialogContent>
                <form
            onSubmit={(event) => {
              event.preventDefault();
              updateChargingStation({chargerId:formData?._id, patchData: {...formData}});
            }}
            
          >
            <Stack spacing={2}>
              <FormControl>
                <FormLabel><p className='font-sans'>Station Name</p></FormLabel>
                <Input value={formData?.chargeBoxName} placeholder='Station Name' autoFocus required onChange={(e)=>{setFormData({...formData,chargeBoxName:e.target.value})}}/>
              </FormControl>
              <FormControl>
                <FormLabel><p className='font-sans'>Description</p></FormLabel>
                <Input value={formData?.description} placeholder='Description...' onChange={(e)=>{setFormData({...formData,description:e.target.value})}}/>
              </FormControl>
              <FormControl>
                <FormLabel><p className='font-sans'>OCCP Protocol</p></FormLabel>
                <Select value={formData?.ocppProtocol} placeholder="Select a protocol…" onChange={(event, value)=>{setFormData({...formData,ocppProtocol:value})}}>
                    <Option value={'OCCP 1.6J'}>OCCP 1.6J</Option>
                    <Option value={'OCCP 2.0J'}>OCCP 2.0J</Option>
                </Select>
              </FormControl>
              
              <FormLabel><p className='font-sans'>Location Coordinates</p></FormLabel>
                <Stack direction={'row'} spacing={2}>
                <FormControl sx={{
                    width:'100%'
                }}>
                <Input placeholder='Latitude...' 
                required
                onChange={(e)=>{setFormData({...formData,location:{...formData.location,latitude:e.target.valueAsNumber}})}}
                type='number'
                value={formData?.location?.latitude}
                slotProps={{
                    input: {
                      min: -90,
                      max: 90,
                      step:"any",
                    },
                  }}
                />
                </FormControl>
                <FormControl  sx={{
                    width:'100%'
                }}>
                <Input placeholder='Longitude...' 
                required
                onChange={(e)=>{setFormData({...formData,location:{...formData.location,longitude:e.target.valueAsNumber}})}}
                type='number'
                slotProps={{
                    input: {
                      min: -180,
                      max: 180,
                      step:"any",
                    },
                  }}
                  value={formData?.location?.longitude}
                />
                  </FormControl>
                </Stack>
              <FormControl>
                <FormLabel><p className='font-sans'>Note</p></FormLabel>
                <Textarea value={formData?.note} placeholder='Add a note...' minRows={4} onChange={(e)=>{setFormData({...formData,note:e.target.value})}}/>
              </FormControl>
              <Button loading={isUpdatingStation} type="submit" style={{background:'#0081AF'}}><p className='font-sans'>Submit</p></Button>
            </Stack>
          </form>
            </ModalDialog>
        </Modal>
    </div>
  )
}

export default EditStationModal