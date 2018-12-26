import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    state = {}
    render() {
        return (
            <div>
                <h1>I am the App. LOL</h1>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
