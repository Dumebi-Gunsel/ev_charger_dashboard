import React, { useEffect } from 'react'
import { useAddChargingStationMutation, useGetChargingStationsQuery } from '../../redux/stationsSlice/stationsActions';
import { useDispatch, useSelector } from 'react-redux';
import { setData, setError, setLoading } from '../../redux/stationsSlice/stationsSlice';

function useStations(action, payload) {
    const {data: apiData, error:apiError, isLoading: isStationsLoading} = useGetChargingStationsQuery();
    const [addChargingStation, {isError: isAddStationError, isLoading:isAddingStation, isSuccess: isAddingStationSuccess}] = useAddChargingStationMutation()
    const {data, error, loading} = useSelector((state)=>state.stationsState)
    const dispatch = useDispatch()


    useEffect(()=>{
        switch(action){
            case 'ADD_STATION':
                if(payload.addStation){
                    addChargingStation(payload.addStation)
                }
                break;
            case 'GET_STATIONS':
                    if(isStationsLoading){
                        dispatch(setLoading(isStationsLoading))
                    }
                    else if(apiError){
                        dispatch(setLoading(isStationsLoading))
                        dispatch(setError(apiError))
                    }else if(apiData){
                        dispatch(setLoading(isStationsLoading))
                        dispatch(setData(apiData))
                    }
                break;
            case 'GET_STATIONS_BY_ID':
                break;
            case 'DELETE_STATION':
                break;
            case 'UPDATE_STATION':
                break;
           
        }
       
    },[apiData,apiError,isStationsLoading, isAddingStation, isAddStationError, isAddingStationSuccess])
  return {loading, data, error, isSuccess}
}

export default useStations