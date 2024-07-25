import { Modal , ModalDialog, DialogTitle, DialogContent, Stack,FormControl, FormLabel, Input, Button, Select, Option, Textarea} from '@mui/joy';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { popModal, setError, setMessage, setShowSnackbar } from '../../../redux/layoutSlice/layoutSlice.js';
import { useAddChargingStationMutation, useGetChargingStationsQuery } from '../../../redux/stationsSlice/stationsActions.js';
import { modalMap } from '../index.js';

const initFormState = {
    name: '',
    chargeBoxId: '', 
    chargeBoxName: '',
    ocppProtocol:'',
    location: {
        latitude: 0,
        longitude:0
    },
    note: '',
    description: '',
    // location: '',
    // type:'',
    // numberOfOutlets: 0,
    // chargerTypes: [],
    // powerOutput: '',
    // connectorTypes: [],
    // operatingHours: {
    //   start: '',
    //   end: ''
    // },
    // costPerKwh: '',
    // flatFee: '',
    // ratePlan: '',
    // franchiseeInfo: {
    //     name: '',
    //     email: '',
    //     phone: '',
    // },
    // paymentMethods: [],
    // notes: ''
}



function AddStation() {
const dispatch = useDispatch();
const {modals} = useSelector((state)=>state.layoutState)
const [formData, setFormData] = useState(initFormState)
const [addChargingStation, { data,  isError: isAddStationError, isLoading:isAddingStation, isSuccess: isAddingStationSuccess, error: addStationError}] = useAddChargingStationMutation()



useEffect(()=>{
    if(isAddStationError){
        dispatch(setError(addStationError.error.message))
        dispatch(setShowSnackbar(true))
    }if(isAddingStationSuccess){
      
        setFormData(initFormState)
        dispatch(setMessage(data))
        dispatch(setShowSnackbar(true))
        dispatch(popModal())

    }
}, [isAddingStationSuccess, isAddingStation, isAddStationError ])



  return (
    <Modal open={modals.some((modal)=>modal.key===modalMap.addStationModal)} onClose={() => dispatch(popModal())} >
        <ModalDialog maxWidth={'50vw'} minWidth={'50vw'}>
        <DialogTitle><p className='font-sans'>Add a New Charging Station</p></DialogTitle>
        <DialogContent><p className='font-sans'>Please provide the necessary details for the new charging station.</p></DialogContent>
        <form
            onSubmit={(event) => {
              event.preventDefault();
              console.log(formData);
              addChargingStation(formData);
            }}
            
          >
            <Stack spacing={2}>
              <FormControl>
                <FormLabel><p className='font-sans'>Station Name</p></FormLabel>
                <Input value={formData.chargeBoxName} placeholder='Station Name' autoFocus required onChange={(e)=>{setFormData({...formData,chargeBoxName:e.target.value})}}/>
              </FormControl>
              <FormControl>
                <FormLabel><p className='font-sans'>Description</p></FormLabel>
                <Input value={formData.description} placeholder='Description...' onChange={(e)=>{setFormData({...formData,description:e.target.value})}}/>
              </FormControl>
              <FormControl>
                <FormLabel><p className='font-sans'>Station ID</p></FormLabel>
                <Input value={formData.chargeBoxId} placeholder='Station ID' required onChange={(e)=>{setFormData({...formData,chargeBoxId:e.target.value.toUpperCase()})}}/>
              </FormControl>
              <FormControl>
                <FormLabel><p className='font-sans'>OCCP Protocol</p></FormLabel>
                <Select value={formData.ocppProtocol} placeholder="Select a protocol…" onChange={(event, value)=>{setFormData({...formData,ocppProtocol:value})}}>
                    <Option value={'OCCP 1.6J'}>OCCP 1.6J</Option>
                    <Option disabled value={'OCCP 2.0J'}>OCCP 2.0J</Option>
                </Select>
              </FormControl>
              
              <FormLabel><p className='font-sans'>Location Coordinates</p></FormLabel>
                <Stack direction={'row'} spacing={2}>
                <FormControl sx={{
                    width:'100%'
                }}>
                <Input placeholder='Latitude...' 
                value={formData.location.latitude}
                required
                onChange={(e)=>{setFormData({...formData,location:{...formData.location,latitude:e.target.valueAsNumber}})}}
                type='number'
                
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
                value={formData.location.longitude}
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
                />
                  </FormControl>
                </Stack>
            
              {/* <FormControl>
                <FormLabel><p className='font-sans'>Location</p></FormLabel>
                <Select value={formData.location} placeholder="Select a location…" onChange={(event, value)=>{setFormData({...formData,location:value})}}>
                    {
                        locations.sort((a,b)=>a.localeCompare(b)).map((location)=><Option key={location} value={location}>{location}</Option>)
                    }
                </Select>
              </FormControl> */}
              {/* <FormControl>
                <FormLabel><p className='font-sans'>Note</p></FormLabel>
                <Textarea value={formData.note} placeholder='Add a note...' minRows={4} onChange={(e)=>{setFormData({...formData,note:e.target.value})}}/>
              </FormControl> */}
              {/* <FormControl>
                <FormLabel><p className='font-sans'>No. of outlets</p></FormLabel>
                <Input type='number' required onChange={(e)=>{setFormData({...formData,numberOfOutlets:parseInt(e.target.value)})}}/>
              </FormControl>
              <FormControl>
                <FormLabel><p className='font-sans'>Charger Types</p></FormLabel>
                <Select value={formData.chargerTypes} multiple placeholder="Select charger types…" onChange={handleChargerTypesChange}>
                    {
                        chargerTypes.map((type)=><Option key={type} value={type}>{type}</Option>)
                    }
                </Select>
              </FormControl> */}
              <Button loading={isAddingStation} type="submit" style={{background:'#0081AF'}}><p className='font-sans'>Submit</p></Button>
            </Stack>
          </form>
        </ModalDialog>
      </Modal>
  )
}

export default AddStation