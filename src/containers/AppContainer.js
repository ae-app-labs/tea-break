import React from 'react';
import Home from '../components/Home';
import Header from '../components/Header';

class AppContainer extends React.Component{
    constructor(props){
        super(props);
    }
    
    render() {
        return (
            <div className="mdl-layout mdl-js-layout">
                <Header />
                <main className="mdl-layout__content fullView">
                  <Home/>
                </main>
            </div>
        );
    }
}


export default AppContainer;