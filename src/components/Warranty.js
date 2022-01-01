import React, { useState, useEffect } from 'react';
import WarrantyCard from './WarrantyCard';
import WarrantyForm from './WarrantyForm';
import { Container, TitleContainer, TitleText, MainContainer, WarrantyContainer, ButtonContainer, Button } from "../styling/Warranty";
// import { getVehicle, updateVehicle } from '../services/vehicle';
import { getAllVehicles, updateVehicle } from '../services/vehicle';
import moment from 'moment';


const Warranty = ({ data, vehicleInfo }) => {
    const [formStatus, setFormStatus] = useState(false);
    const [buttonStatus, setButtonStatus] = useState("Add Warranty Information");
    const [warrantyList, setWarrantyList] = useState([]);
    const [title, setTitle] = useState("")
    const [warrantyProvider, setWarrantyProvider] = useState("")
    const [details, setDetails] = useState("")
    const id = window.location.hash.substring(17, window.location.hash.length)

    useEffect(() => {
        getAllVehicles(sessionStorage.getItem('userKey'))
            .then(data => {
                //console.log(data.data.data.vehicleInfo)
                data.data.data.vehicleInfo.forEach(d => {
                    if (id === d.id) {
                        setWarrantyList(d.warrantyInfo)
                    }
                })
                // const tempArr = data.warrantyInfo.map(x => x);
            })
    }, [])

    const handleTitle = (e) => {
        //console.log(e.target.value)
        setTitle(e.target.value)
    }

    const handleProvider = (e) => {
        setWarrantyProvider(e.target.value)
    }

    const handleDetails = (e) => {
        setDetails(e.target.value)
    }

    const cancelWarrantyContainer = (e) => {
        e.preventDefault()
        setFormStatus(false);
    }


    const openFormStatus = () => {
        if (!formStatus) {
            setFormStatus(true);
            setButtonStatus("Add Warranty!")
        } else {
            setFormStatus(false);
            setButtonStatus("Add Warranty Information")
            submitWarrantyDetails()
        }
    }

    const submitWarrantyDetails = () => {
        if (title === "" || details === "" || warrantyProvider === "") {
            alert("Please enter warranty information!")
        } else {
            const newWarranty = {
                warrantyTitle: title,
                warrantyProvider: warrantyProvider,
                warrantyDetail: details,
                warrantyDate: moment().format('L')
            }

            warrantyList.push(newWarranty)
            data.warrantyInfo = warrantyList
            //console.log(vehicleInfo)

            updateVehicle(id, vehicleInfo, sessionStorage.getItem('userKey'))
                .then(data => {
                    // const tempArr = data.warrantyInfo.map(x => x);
                    //console.log(data.data.vehicleInfo)
                    // setWarrantyList(tempArr)

                    data.data.vehicleInfo.forEach(d => {
                        if (id === d.id) {
                            //console.log(d)
                            setWarrantyList(d.warrantyInfo)
                        }
                    })
                })
        }

    }

    const openForm = () => {
        if (formStatus) {
            return (
                <WarrantyForm handleTitle={handleTitle} handleProvider={handleProvider} handleDetails={handleDetails} cancelWarrantyContainer={cancelWarrantyContainer} />
            )
        }
    }


    return (
        <Container>
            <TitleContainer>
                <TitleText>Warranty Tracker</TitleText>
            </TitleContainer>
            <MainContainer>
                <ButtonContainer>
                    <Button onClick={() => openFormStatus()}>{buttonStatus}</Button>
                </ButtonContainer>
                {openForm()}
            </MainContainer>
            <WarrantyContainer>
                {warrantyList.map(d => {
                    return (
                        <WarrantyCard key={d.warrantyTitle + d.warrantyProvider + d.warrantyDetail} title={d.warrantyTitle} provider={d.warrantyProvider} date={d.warrantyDate} detail={d.warrantyDetail} />
                    )
                })}
            </WarrantyContainer>
        </Container>
    )
}

export default Warranty;