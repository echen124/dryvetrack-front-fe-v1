import React from "react";
import { IndividualWarranty, WarrantyTitle, WarrantyTitleText, WarrantyProviderContainer, WarrantyProviderText, WarrantyDetailsContainer, WarrantyDetailsText } from '../styling/WarrantyCard'

const WarrantyCard = ({title, provider, date, detail}) => {
    return (
        <IndividualWarranty>
            <WarrantyTitle>
                <WarrantyTitleText>{title}</WarrantyTitleText>
            </WarrantyTitle>
            <WarrantyProviderContainer>
                <WarrantyProviderText>{provider} - {date}</WarrantyProviderText>
            </WarrantyProviderContainer>
            <WarrantyDetailsContainer>
                <WarrantyDetailsText>
                    {detail}
                </WarrantyDetailsText>
            </WarrantyDetailsContainer>
        </IndividualWarranty>
    )
}

export default WarrantyCard;