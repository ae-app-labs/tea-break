import TeaBreak from '../fire'

const React = require('react')

class Table extends React.Component{
    constructor(props){
        super(props);
        this.addUsers = this.addUsers.bind(this)
        this.state = {
            usersData : []
        }
    }

    addUsers(users){
      this.setState({usersData: users });
    }

    componentDidMount(){
      TeaBreak.init();

      TeaBreak.userValues( data => {
          // console.log( JSON.stringify(data, null, 3) );
          const users = [];
          //console.log(data.val());

          // Variant 2
          const keys = Object.keys(data.val())
          console.log(keys)
          for(userSnap in keys){
            var user = {
              id : userSnap.key,
              name : userSnap.val().name,
              count : userSnap.val().count
            }
            users.push(user);
          }

          // Variant 1
          /*
          data.forEach( function(snap){
              // console.log(snap.key);
              users.push({
                  id : snap.key,
                  name : snap.val().name,
                  count : snap.val().count
              });
          });
          */

          // Variant 3
          /*
            data.forEach(function(childSnapshot) {
              var item = childSnapshot.val();
              item['.key'] = childSnapshot.key;
              users.push(item);
            }.bind(this));
          */

          addUsers(users);
      });
    }

    render(){
        const listOfUsers = this.state.usersData.map(position =>
            <tr>
                <td className="mdl-data-table__cell--non-numeric">{position.name}</td>
                <td>{position.count}</td>
                <td>{position.id}</td>
            </tr>
        );

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
