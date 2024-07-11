import { Modal , ModalDialog, DialogTitle, DialogContent, Stack,FormControl, FormLabel, Input, Button, Select, Option} from '@mui/joy';
import React, { useState } from 'react'
import { useLayoutContext } from '../../context/LayoutProvider';

const initFormState = {
    name: '',
    location: '',
    type:'',
    numberOfOutlets: 0,
    chargerTypes: [],
    powerOutput: '',
    connectorTypes: [],
    operatingHours: {
      start: '',
      end: ''
    },
    costPerKwh: '',
    flatFee: '',
    ratePlan: '',
    franchiseeInfo: {
        name: '',
        email: '',
        phone: '',
    },
    paymentMethods: [],
    notes: ''
}

const locations = ['Lefkosa', 'Girne', 'Magusa', 'Iskele', 'Guzelyurt','Lefke']
const chargerTypes = ["Gunsel EV Charger Mark II - Type 2", "Gunsel EV Charger Mark II - Type 1", "Gunsel EV Charger Mark I - Type 2", "Gunsel EV Charger Mark I - Type 1"]

function AddStation() {
const {isAddStationModalOpen, setAddStation} = useLayoutContext()
const [formData, setFormData] = useState(initFormState)
const handleChargerTypesChange = (event) => {
    const { value } = event.target;
    const { numberOfOutlets, chargerTypes } = formData;

    let updatedChargerTypes = [...chargerTypes];

    if (updatedChargerTypes.includes(value)) {
      updatedChargerTypes = updatedChargerTypes.filter(type => type !== value);
    } else {
      if (updatedChargerTypes.length < numberOfOutlets) {
        updatedChargerTypes.push(value);
      } else {
        updatedChargerTypes.shift();
        updatedChargerTypes.push(value);
      }
    }

    setFormData({ ...formData, chargerTypes: updatedChargerTypes });
  };
  return (
    <Modal open={isAddStationModalOpen} onClose={() => setAddStation(false)} >
        <ModalDialog maxWidth={'50vw'} minWidth={'50vw'}>
        <DialogTitle><p className='font-sans'>Add a New Charging Station</p></DialogTitle>
        <DialogContent><p className='font-sans'>Please provide the necessary details for the new charging station.</p></DialogContent>
        <form
            onSubmit={(event) => {
              event.preventDefault();
              setAddStation(false);
            }}
            
          >
            <Stack spacing={2}>
              <FormControl>
                <FormLabel><p className='font-sans'>Station Name</p></FormLabel>
                <Input autoFocus required onChange={(e)=>{setFormData({...formData,name:e.target.value})}}/>
              </FormControl>
              <FormControl>
                <FormLabel><p className='font-sans'>Location</p></FormLabel>
                <Select value={formData.location} placeholder="Select a location…" onChange={(event, value)=>{setFormData({...formData,location:value})}}>
                    {
                        locations.sort((a,b)=>a.localeCompare(b)).map((location)=><Option key={location} value={location}>{location}</Option>)
                    }
                </Select>
              </FormControl>
              <FormControl>
                <FormLabel><p className='font-sans'>Type</p></FormLabel>
                <Select value={formData.type} placeholder="Select a type…" onChange={(event, value)=>{setFormData({...formData,type:value})}}>
                    <Option value={'commercial'}>Commercial</Option>
                    <Option value={'personal'}>Personal</Option>
                </Select>
              </FormControl>
              <FormControl>
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
              </FormControl>
              <Button type="submit" style={{background:'#0081AF'}}><p className='font-sans'>Submit</p></Button>
            </Stack>
          </form>
        </ModalDialog>
      </Modal>
  )
}

export default AddStation