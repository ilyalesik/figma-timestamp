import * as React from 'react'
import styled from "styled-components";
import {PrimaryButton, SecondaryButton, InputWithIcon, AdjustIcon, Input, SectionTitle, Divider} from "figma-ui-components"

const SectionContainer = styled.div`
    padding: 8px;
`;

const ButtonsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    
    & > * + * {
        margin-left: 8px;
    }
`;

export const Form = () => {
    const [value, setValue] = React.useState("ddd D MMM HH:MM");

    const onCreate = () => {
        parent.postMessage({ pluginMessage: { type: 'create-clock', format: value } }, '*')
    };

    const onCancel = () => {
        parent.postMessage({ pluginMessage: { type: 'cancel' } }, '*')
    };
    return <div>
        <SectionContainer>
            <SectionTitle>Format</SectionTitle>
            <InputWithIcon icon={<AdjustIcon />} input={<Input value={value} onChange={(e) => setValue(e.target.value)} />} />
        </SectionContainer>
        <Divider />
        <SectionContainer>
            <ButtonsContainer>
                <SecondaryButton onClick={onCancel}>Cancel</SecondaryButton>
                <PrimaryButton onClick={onCreate}>Create</PrimaryButton>
            </ButtonsContainer>
        </SectionContainer>

    </div>
};
