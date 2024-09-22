import React from 'react'
import styled from 'styled-components'

const Container = styled.div``

const OilLife = ({ oilChangeInterval, currentMileage }) => {
    // let oilArr = mileageList.filter(p => p.oilChangeStartInterval === true);
    // let mileArr = mileageList.filter(p => p.oilChangeStartInterval === false);
    // let rem = 0;

    const determineOilLife = () => {

        // if (oilArr.length === 0) {
        //     return "100% oil life";
        // }

        // if (Number(oilArr[oilArr.length - 1].lastMileage) + Number(oilArr[oilArr.length - 1].oilChangeInterval) < mileArr[mileArr.length - 1].lastMileage) {
        //     return "Change your oil!";
        // }

        // if (Number(oilArr[oilArr.length - 1].lastMileage) + Number(oilArr[oilArr.length - 1].oilChangeInterval) >= mileArr[mileArr.length - 1].lastMileage) {
        //     let interval = oilArr[oilArr.length - 1].oilChangeInterval;
        //     let lastOilChange = oilArr[oilArr.length - 1].lastMileage;
        //     let currentMileage = mileArr[mileArr.length - 1].lastMileage;
        //     // console.log({ interval, lastOilChange, currentMileage })

        //     let oilLife = (1 - ((currentMileage - lastOilChange) / interval)) * 100;
        //     rem = (1 - ((currentMileage - lastOilChange) / interval)) * 100;

        //     if (oilLife > 100) {
        //         return "100% oil life";
        //     }

        //     return Math.round(oilLife) + "% oil life";
        // }


        // Calculate the percentage of oil life remaining
        if (currentMileage < 0 || oilChangeInterval <= 0) {
            throw new Error("Mileage and oil change interval must be positive values.");
        }

        const oilLifeUsed = (currentMileage / oilChangeInterval) * 100;

        // Ensure oil life used does not exceed 100%
        const oilLifeRemaining = Math.max(0, 100 - oilLifeUsed);

        return Math.round(oilLifeRemaining) + "% oil life";

    }


    return (
        <Container>
            {determineOilLife()}
        </Container>
    )
}

export default OilLife;