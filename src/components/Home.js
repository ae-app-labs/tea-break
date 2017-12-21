const React = require('react')
var Table = require('./Table');

class Home extends React.Component{
    constructor(props){
        super(props);
    }
    
    render(){
        return (
          <div className="page-content">
                    <div className="mdl-grid">
                      <div className="mdl-cell mdl-cell--2-col"></div>
                      <div className="mdl-cell mdl-cell--8-col">

                <div id="p2" className="mdl-progress mdl-js-progress mdl-progress__indeterminate"></div>
                <br/><br/><br/>

                <Table userData={this.props.usersData}/>

                      </div>
                      <div className="mdl-cell mdl-cell--2-col"></div>
                    </div>
                </div>
        )
  }
}

module.exports = Home
