import * as React from 'react'
import * as ReactDOM from 'react-dom'
import {Form} from "./components/form/Form";
import {TypographyStyles, BaseStyles} from "figma-ui-components"

const App = () => {
    return <>
        <BaseStyles />
        <TypographyStyles />
        <Form/>
    </>
};

ReactDOM.render(<App />, document.getElementById('root'));
