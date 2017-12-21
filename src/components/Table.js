const React = require('react')

class Table extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            usersData : []
        }
    }
    
    render(){
        
        var rows = [];
        if(this.props.usersData){
           this.props.usersData.forEach( function(user){
                rows.push(
                    <tr>
                        <td className="mdl-data-table__cell--non-numeric">{user.name}</td>
                        <td>{user.count}</td>
                        <td>Empty</td>
                    </tr>
                );                            
            }).bind(this);
        }
        
        return(
          <table className="mdl-data-table mdl-js-data-table mdl-data-table--selectable mdl-shadow--2dp">
            <thead>
            <tr>
              <th className="mdl-data-table__cell--non-numeric">Name</th>
              <th>Count</th>
              <th>Third Column</th>
            </tr>
            </thead>
            <tbody>
                ${this.rows}
            </tbody>
          </table>
        )
      }
    }

module.exports = Table
