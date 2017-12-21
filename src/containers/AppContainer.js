var React = require('react');
var Home = require('../components/Home');
var Header = require('../components/Header');

function AppContainer() {
    return (
            <div className="mdl-layout mdl-js-layout">
                <Header />
                <main className="mdl-layout__content fullView">
                  <Home />
                </main>
            </div>
    );
};

module.exports = AppContainer;
