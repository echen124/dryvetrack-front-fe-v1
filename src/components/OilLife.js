import React from 'react'
import styled from 'styled-components'

const Container = styled.div``

const OilLife = ({ mileageList, oilChangeInterval }) => {
    let oilArr = mileageList.filter(p => p.oilChangeStartInterval === true);
    let mileArr = mileageList.filter(p => p.oilChangeStartInterval === false);
    let rem = 0;

    const determineOilLife = () => {

        if (oilArr.length === 0) {
            return "100% oil life";
        }

        if (Number(oilArr[oilArr.length - 1].lastMileage) + Number(oilArr[oilArr.length - 1].oilChangeInterval) < mileArr[mileArr.length - 1].lastMileage) {
            return "Change your oil!";
        }

        if (Number(oilArr[oilArr.length - 1].lastMileage) + Number(oilArr[oilArr.length - 1].oilChangeInterval) >= mileArr[mileArr.length - 1].lastMileage) {
            let interval = oilArr[oilArr.length - 1].oilChangeInterval;
            let lastOilChange = oilArr[oilArr.length - 1].lastMileage;
            let currentMileage = mileArr[mileArr.length - 1].lastMileage;
            // console.log({ interval, lastOilChange, currentMileage })

            let oilLife = (1 - ((currentMileage - lastOilChange) / interval)) * 100;
            rem = (1 - ((currentMileage - lastOilChange) / interval)) * 100;

            if (oilLife > 100) {
                return "100% oil life";
            }

            return Math.round(oilLife) + "% oil life";
        }

    }


    return (
        <Container>
            {determineOilLife()}
        </Container>
    )
}

export default OilLife;