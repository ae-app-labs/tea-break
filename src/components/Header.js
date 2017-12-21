var React = require('react');

var Header = function () {
    return (
      <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
      <header className="mdl-layout__header">
      <div className="mdl-layout__header-row">
        <span className="mdl-layout-title">Tea Break</span>
        <div className="mdl-layout-spacer"></div>
        <nav className="mdl-navigation mdl-layout--large-screen-only">
          <form action="#">
            <div className="mdl-textfield mdl-js-textfield mdl-textfield--expandable">
              <label className="mdl-button mdl-js-button mdl-button--icon" htmlFor="sample6">
                <i className="material-icons">search</i>
              </label>
              <div className="mdl-textfield__expandable-holder">
                <input className="mdl-textfield__input" type="text" id="sample6"></input>
                <label className="mdl-textfield__label" htmlFor="sample-expandable">Expandable Input</label>
              </div>
            </div>
          </form>
        </nav>
      </div>
      </header>
      </div>
    )
};

module.exports = Header;
