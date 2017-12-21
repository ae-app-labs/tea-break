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
          const users = [];
          
          console.log(data.val());
          
          data.forEach( function(snap){
              // console.log(snap.key);
              users.push({
                  id : snap.key,
                  name : snap.val().name,
                  count : snap.val().count
              });
          });
          
          this.setState({
              usersData: users
          });
          // console.log("End userValues callback" + this.state.usersData);
      });
    }
    
    render(){
        
        const listOfUsers = this.state.usersData.map(position => {
            console.log(position.name);
            <tr>
                <td className="mdl-data-table__cell--non-numeric">{position.name}</td>
                <td>{position.count}</td>
                <td>{position.id}</td>
            </tr>
        });
        
        // console.log("in render " + this.state.usersData);
        
        return(
          <table className="mdl-data-table mdl-js-data-table mdl-data-table--selectable mdl-shadow--2dp">
            <thead>
            <tr>
              <th className="mdl-data-table__cell--non-numeric">Name</th>
              <th>Count</th>
              <th>Id</th>
            </tr>
            </thead>
            <tbody>
                {listOfUsers}
            </tbody>
          </table>
        )
      }
    }

export default Table
