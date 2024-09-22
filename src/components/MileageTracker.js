import React, { useState, useEffect } from 'react';
import IndividualMileage from './IndividualMileage';
import OilLife from './OilLife';
import { Container, TitleContainer, TitleText, DescriptionText, MileageContainer, MileageLeft, CurrentMileage, CurrentMileageTitle, LastUpdatedTitle, LastUpdatedText, CurrentMileageText, LastUpdated, MileageRight, MileageTitle, MileageHistory, MileageButtonContainer, MileageButton } from '../styling/MileageTracker'
import { OilContainer, OilTop, OilBottom, OilTitle, OilSubtitle, OilButtonContainer, OilButton, OilUpdateContainer, OilCurrentMileageContainer, OilInput, OilLabel, OilSelect, OilOption, OilSelectionContainer } from '../styling/OilChangeTracker'
import moment from 'moment';
import { getAllVehicles, getVehicleByOwnerAndVin, updateVehicle, updateVehicleMileage } from '../services/vehicle';
// import { getVehicle, updateVehicle } from '../services/vehicle';


const MileageTracker = ({ data, vehicleInfo }) => {
    const [containerStatus, setContainerStatus] = useState(false);
    const [mileageUpdateContainer, setMileageUpdateContainer] = useState(false);
    const [buttonText, setButtonText] = useState("Update Oil Change");
    const [mileageText, setMileageText] = useState("Update Mileage");
    const [oilInterval, setOilInterval] = useState("8000");
    const [mileage, setMileage] = useState(0);
    const [oilIsUpdated, setoilIsUpdated] = useState(false);
    const [lastMileage, setLastMileage] = useState("1");
    const [lastUpdated, setLastUpdated] = useState("2");
    const [mileageList, setMileageList] = useState([]);

    //console.log(data)

    const id = window.location.hash.substring(17, window.location.hash.length)

    useEffect(() => {
        getVehicleByOwnerAndVin(id)
            .then(response => {
                //console.log(response.data.currentMileage)
                setMileage(response.data.currentMileage)
                //console.log(response.data.data.vehicleInfo)
                // response.data.data.vehicleInfo.forEach(d => {
                //     //console.log(d.id)
                //     if (d.id === id) {
                //         setLastMileage(d.mileageInformation[d.mileageInformation.length - 1].lastMileage)
                //         setLastUpdated(d.mileageInformation[d.mileageInformation.length - 1].lastUpdated)
                //         setMileageList(d.mileageInformation)
                //     }
                // })
                // setLastMileage(response.mileageInformation[response.mileageInformation.length - 1].lastMileage)
                // setLastUpdated(response.mileageInformation[response.mileageInformation.length - 1].lastUpdated)
                // setMileageList(response.mileageInformation)
            });
    }, []);

    useEffect(() => {
        if (oilIsUpdated) {
            //console.log(typeof mileage)
            const mileageToInt = Number(mileage)
            console.log(mileageToInt)
            updateVehicleMileage(id, {NewMileage: mileageToInt})
                .then(response => {
                    //console.log(response.data.currentMileage)
                    console.log(response)
                    // setMileage(response.data.currentMileage)
                    //console.log(response.data.data.vehicleInfo)
                    // response.data.data.vehicleInfo.forEach(d => {
                    //     //console.log(d.id)
                    //     if (d.id === id) {
                    //         setLastMileage(d.mileageInformation[d.mileageInformation.length - 1].lastMileage)
                    //         setLastUpdated(d.mileageInformation[d.mileageInformation.length - 1].lastUpdated)
                    //         setMileageList(d.mileageInformation)
                    //     }
                    // })
                    // setLastMileage(response.mileageInformation[response.mileageInformation.length - 1].lastMileage)
                    // setLastUpdated(response.mileageInformation[response.mileageInformation.length - 1].lastUpdated)
                    // setMileageList(response.mileageInformation)
                });
        }
    }, [oilIsUpdated]);

    const updateOilLife = () => {
        if (containerStatus) {
            setContainerStatus(false);
            setButtonText("Update Oil Change")
            updateOilChange()
        } else {
            setContainerStatus(true)
            setButtonText("Update!")
        }
    }

    const updateNewMileage = () => {
        if (mileageUpdateContainer) {
            setMileageUpdateContainer(false);
            setButtonText("Update Mileage")
            updateMileage()
        } else {
            setMileageUpdateContainer(true)
            setMileageText("Update!")
        }
    }

    const showContainer = () => {
        if (containerStatus) {
            return (
                Update()
            )
        }
    }

    const showMilesContainer = () => {
        if (mileageUpdateContainer) {
            return (
                UpdateMileageContainer()
            )
        }
    }

    const cancelContainer = () => {
        setContainerStatus(false);
        setButtonText("Update Oil Change")
    }

    const cancelMilesContainer = () => {
        setMileageUpdateContainer(false);
        setMileageText("Update Mileage")
    }

    const handleOilChangeInterval = (e) => {
        setOilInterval(e.target.value);
    };

    const handleMiles = (e) => {
        setMileage(e.target.value);
    };

    const updateOilChange = () => {
        // if (Number(mileage) !== 0) {

        //     const newMileageObject = {
        //         lastUpdated: moment().format('L'),
        //         lastMileage: mileage,
        //         oilChangeStartInterval: true,
        //         oilChangeInterval: oilInterval
        //     }

        //     data.mileageInformation.push(newMileageObject);

        //     updateVehicle(id, vehicleInfo, sessionStorage.getItem('userKey'))
        //         .then(response => {
        //             response.data.vehicleInfo.forEach(d => {
        //                 if (d.id === id) {
        //                     setLastMileage(d.mileageInformation[d.mileageInformation.length - 1].lastMileage)
        //                     setLastUpdated(d.mileageInformation[d.mileageInformation.length - 1].lastUpdated)
        //                     setMileageList(d.mileageInformation)
        //                 }
        //             })
        //         })

        //     // updateVehicle(id, data)
        //     //     .then(response => {
        //     //         setLastMileage(response.mileageInformation[response.mileageInformation.length - 1].lastMileage)
        //     //         setLastUpdated(response.mileageInformation[response.mileageInformation.length - 1].lastUpdated)
        //     //         setMileageList(response.mileageInformation)
        //     //     });
        // }
        console.log("test")
        setoilIsUpdated(true)
    }

    const enterUpdateMiles = (miles) => {
        if (Number(miles) !== 0) {
            //console.log("working")
            const mileageUpdate = {
                lastUpdated: moment().format('L'),
                lastMileage: mileage,
                oilChangeStartInterval: false
            }

            let newList = { ...data }
            newList.mileageInformation.push(mileageUpdate)
            //console.log(newList)

            updateVehicle(id, vehicleInfo, sessionStorage.getItem('userKey'))
                .then(response => {
                    //console.log(response.data)
                    response.data.vehicleInfo.forEach(d => {
                        //console.log(d.id)
                        if (d.id === id) {
                            setLastMileage(d.mileageInformation[d.mileageInformation.length - 1].lastMileage)
                            setLastUpdated(d.mileageInformation[d.mileageInformation.length - 1].lastUpdated)
                            setMileageList(d.mileageInformation)
                        }
                    })
                    // setLastMileage(response.mileageInformation[response.mileageInformation.length - 1].lastMileage)
                    // setLastUpdated(response.mileageInformation[response.mileageInformation.length - 1].lastUpdated)
                    // setMileageList(response.mileageInformation)
                })
            setMileage(0);
        }
    }

    const updateMileage = () => {
        enterUpdateMiles(mileage)
    }

    const Update = () => {
        return (
            <OilUpdateContainer>
                <OilCurrentMileageContainer>
                    <OilLabel>Current Mileage</OilLabel>
                    <OilInput type="text" onChange={handleMiles}></OilInput>
                </OilCurrentMileageContainer>
                <OilSelectionContainer>
                    <OilLabel>Oil Change Interval</OilLabel>
                    <OilSelect onChange={handleOilChangeInterval}>
                        <OilOption value="8000">8000km</OilOption>
                        <OilOption value="12000">12000km</OilOption>
                        <OilOption value="16000">16000km</OilOption>
                    </OilSelect>
                </OilSelectionContainer>
                <OilButtonContainer>
                    <OilButton onClick={() => cancelContainer()}>Cancel</OilButton>
                </OilButtonContainer>
            </OilUpdateContainer>
        )
    }

    const UpdateMileageContainer = () => {
        return (
            <OilUpdateContainer>
                <OilCurrentMileageContainer>
                    <OilLabel>New Mileage</OilLabel>
                    <OilInput type="text" onChange={handleMiles}></OilInput>
                </OilCurrentMileageContainer>
                <OilButtonContainer>
                    <OilButton onClick={() => cancelMilesContainer()}>Cancel</OilButton>
                </OilButtonContainer>
            </OilUpdateContainer>
        )
    }


    return (
        <Container>
            <TitleContainer>
                <TitleText>Mileage Tracker</TitleText>
                <DescriptionText>Be sure to update your mileage frequently to generate the most accurate recommendations!</DescriptionText>
            </TitleContainer>
            <MileageContainer>
                <MileageLeft>
                    <CurrentMileage>
                        <CurrentMileageTitle>Current Mileage:</CurrentMileageTitle>
                        <CurrentMileageText>{mileage}</CurrentMileageText>
                    </CurrentMileage>
                    {/* <LastUpdated>
                        <LastUpdatedTitle>Last Updated</LastUpdatedTitle>
                        <LastUpdatedText>{lastUpdated}</LastUpdatedText>

                        <MileageButtonContainer>
                            <MileageButton onClick={() => updateNewMileage()}>{mileageText}</MileageButton>
                        </MileageButtonContainer>
                        {showMilesContainer()}

                    </LastUpdated> */}
                </MileageLeft>
                {/* <MileageRight>
                    <MileageTitle>Mileage History</MileageTitle>
                    <MileageHistory>
                        {
                            mileageList.map(data => {
                                return (
                                    <IndividualMileage key={data.lastMileage} lastUpdate={data.lastUpdated} lastMileage={data.lastMileage} />
                                )
                            })
                        }
                    </MileageHistory>
                </MileageRight> */}
            </MileageContainer>
            <OilContainer>
                <OilTop>
                    <OilTitle>Oil Life Tracker every {oilInterval} KM</OilTitle>
                </OilTop>
                <OilBottom>
                    <OilSubtitle>
                        <OilLife currentMileage={mileage} oilChangeInterval={oilInterval} />
                    </OilSubtitle>
                </OilBottom>
                <OilButtonContainer>
                    <OilButton onClick={() => updateOilLife()}>{buttonText}</OilButton>
                </OilButtonContainer>
                {showContainer()}
            </OilContainer>
        </Container>
    )
}

export default MileageTracker;