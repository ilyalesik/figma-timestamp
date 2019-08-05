import * as React from 'react'
import * as ReactDOM from 'react-dom'
import {Form} from "./components/form/Form";
import {TypographyStyles, BaseStyles} from "figma-ui-components"
import {GlobalStyles} from "./GlobalStyles";

const App = () => {
    return <>
        <GlobalStyles />
        <BaseStyles />
        <TypographyStyles />
        <Form/>
    </>
};

ReactDOM.render(<App />, document.getElementById('root'));
