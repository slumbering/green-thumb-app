import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// const Root = () => {
//     return (
//         <Router>
//             {/* <Route exact path="/" component={Login} /> */}
//             <App />
            
//         </Router>
//     )
// }

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
