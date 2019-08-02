import * as React from 'react'
import * as ReactDOM from 'react-dom'

const App = () => {
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
        <button onClick={onCreate}>Create</button>
        <button onClick={onCancel}>Cancel</button>
    </div>
};

ReactDOM.render(<App />, document.getElementById('root'));
