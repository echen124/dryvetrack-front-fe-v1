import React from 'react';
import InsuranceTracker from '../components/InsuranceTracker';
import MileageTracker from '../components/MileageTracker';
// import InsuranceTracker from '../styling/InsuranceTracker';
// import MileageTracker from '../styling/MileageTracker';
import Warranty from '../components/Warranty';
import {Container} from '../styling/VehicleStatusInfo'


const VehicleStatusInfo = ( {data, vehicleInfo} ) => {
    return(
        <Container>
            <InsuranceTracker data={data} vehicleInfo={vehicleInfo} />
            <MileageTracker data={data} vehicleInfo={vehicleInfo} />
            {/* <Warranty data={data} vehicleInfo={vehicleInfo} /> */}
        </Container>
    )
}

export default VehicleStatusInfo;