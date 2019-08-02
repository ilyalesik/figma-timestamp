import * as React from 'react'
import {PrimaryButton, SecondaryButton} from "figma-ui-components"

export const Form = () => {
    const [value, setValue] = React.useState("ddd D MMM HH:MM");

    const onCreate = () => {
        parent.postMessage({ pluginMessage: { type: 'create-clock', format: value } }, '*')
    };

    const onCancel = () => {
        parent.postMessage({ pluginMessage: { type: 'cancel' } }, '*')
    };
    return <div>
        <h2>Clock Creator</h2>
        <p>Format: <input id="format" value={value} onChange={(e) => setValue(e.target.value)} /></p>
        <PrimaryButton onClick={onCreate}>Create</PrimaryButton>
        <SecondaryButton onClick={onCancel}>Cancel</SecondaryButton>
    </div>
};
