import { Modal , ModalDialog, DialogTitle, DialogContent, Stack,FormControl, FormLabel, Input, Button, Select, Option, Textarea} from '@mui/joy';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { popModal, setError, setMessage, setShowSnackbar } from '../../../redux/layoutSlice/layoutSlice.js';
import { useAddChargingStationMutation, useGetChargingStationsQuery } from '../../../redux/stationsSlice/stationsActions.js';
import { modalMap } from '../index.js';
import { propertyTypes, stationAmmenities } from '../../../data.js';

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
    propertyType:null,
    propertyName: null,
    parkingSpaces: 0,
    state: null,
    city: null,
    postalCode: null,
    country: null,
    ammenities: []
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



function CreateStation() {
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
        <DialogTitle><p className='font-sans'>Create new station</p></DialogTitle>
        <DialogContent><p className='font-sans'>Fill out the form below to register your charging station and join our network.</p></DialogContent>
        <form
            onSubmit={(event) => {
              event.preventDefault();
              console.log(formData);
              //addChargingStation(formData);
            }}
            
          >
            <Stack spacing={2}>
              <FormControl>
                <FormLabel><p className='font-sans'>Property Name</p></FormLabel>
                <Input value={formData.propertyName} placeholder='Property Name' autoFocus required onChange={(e)=>{setFormData({...formData,propertyName:e.target.value})}}/>
              </FormControl>
              <FormControl>
                <FormLabel><p className='font-sans'>Property Type</p></FormLabel>
                <Select value={formData.propertyType} placeholder="Select a property type…" onChange={(event, value)=>{setFormData({...formData,propertyType:value})}}>
                    {
                        propertyTypes.map(p=><Option value={p}>{p}</Option>)
                    }
                </Select>
              </FormControl>
              <FormControl>
                <FormLabel><p className='font-sans'>Available Parking Spaces</p></FormLabel>
                <Input 
                type='number'
                required
                slotProps={{
                    input: {
                      min: 1,
                      step:1,
                    },
                  }}
                value={formData.parkingSpaces} 
                placeholder='Available Parking Spaces...' onChange={(e)=>{setFormData({...formData,parkingSpaces:e.target.value})}}/>
              </FormControl>
              <Stack direction={'row'} gap={2}>
              <FormControl sx={{width:"100%"}}>
                <FormLabel><p className='font-sans'>City</p></FormLabel>
                <Input value={formData.city} placeholder='City'  required onChange={(e)=>{setFormData({...formData,city:e.target.value})}}/>
              </FormControl>
              <FormControl sx={{width:"100%"}}>
                <FormLabel><p className='font-sans'>State</p></FormLabel>
                <Input value={formData.state} placeholder='State'  required onChange={(e)=>{setFormData({...formData,state:e.target.value})}}/>
              </FormControl>
              </Stack>
              <Stack direction={'row'} gap={2}>
              <FormControl sx={{width:"100%"}}>
                <FormLabel><p className='font-sans'>Country</p></FormLabel>
                <Input value={formData.country} placeholder='Country'  required onChange={(e)=>{setFormData({...formData,country:e.target.value})}}/>
              </FormControl>
              <FormControl sx={{width:"100%"}}>
                <FormLabel><p className='font-sans'>Postal Code</p></FormLabel>
                <Input value={formData.postalCode} placeholder='Postal Code'  required onChange={(e)=>{setFormData({...formData,postalCode:e.target.value})}}/>
              </FormControl>
              </Stack>
              <FormControl>
                <FormLabel><p className='font-sans'>Do you have any onsite ammenities</p></FormLabel>
                <Select multiple value={formData.ammenities} placeholder="Select ammenities…" onChange={(event, value)=>{setFormData({...formData,ammenities:value})}}>
                    {
                        stationAmmenities.map(a=><Option value={a}>{a.substring(0,1).toUpperCase()+a.substring(1)}</Option>)
                    }
                </Select>
              </FormControl>
              <FormControl>
                <FormLabel><p className='font-sans'>Additional Information</p></FormLabel>
                <Textarea minRows={4} value={formData.propertyName} placeholder='Do you have any additional information about your property?'  required onChange={(e)=>{setFormData({...formData,propertyName:e.target.value})}}/>
              </FormControl>
              <Button loading={isAddingStation} type="submit" style={{background:'#0081AF'}}><p className='font-sans'>Submit</p></Button>
            </Stack>
          </form>
        </ModalDialog>
      </Modal>
  )
}

export default CreateStation