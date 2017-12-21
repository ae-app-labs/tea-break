import TeaBreak from '../fire'

const React = require('react')

class Table extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            usersData : []
        }
    }
    
    componentDidMount(){
      TeaBreak.init();
      
      TeaBreak.userValues( data => {
          // console.log( JSON.stringify(data, null, 3) );
          this.setState({
              usersData: data
          });
      });
    }
    
    render(){
        
        var rows = [];
        if(this.state.usersData){
           this.state.usersData.forEach( function(user){
                rows.push(
                    <tr>
                        <td className="mdl-data-table__cell--non-numeric">{user.name}</td>
                        <td>{user.count}</td>
                        <td>Empty</td>
                    </tr>
                );                            
            });
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
                {rows}
            </tbody>
          </table>
        )
      }
    }

export default Table
