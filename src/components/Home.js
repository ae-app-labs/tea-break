import Table from './Table';
const React = require('react')

function Home (){
    return (
      <div className="page-content">
            <div className="mdl-grid">
              <div className="mdl-cell mdl-cell--2-col"></div>
              <div className="mdl-cell mdl-cell--8-col">

        <div id="p2" className="mdl-progress mdl-js-progress mdl-progress__indeterminate"></div>
        <br/><br/><br/>

        <Table />

              </div>
              <div className="mdl-cell mdl-cell--2-col"></div>
            </div>
        </div>
    )
}

export default Home
