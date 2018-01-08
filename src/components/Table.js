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
          const users = [];

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

          // Variant 2
          const dataValues = data.val();
          const keys = Object.keys(dataValues)
          keys.forEach( function(key){
            var user = {
              id : key,
              name : dataValues[key].name,
              count : dataValues[key].count
            }
            users.push(user);
          });

          // Variant 3
          /*
            data.forEach(function(childSnapshot) {
              var item = childSnapshot.val();
              item['.key'] = childSnapshot.key;
              users.push(item);
            }.bind(this));
          */

          // addUsers(users);
          this.setState({usersData: users });
      });
    }

    render(){
        const listOfUsers = this.state.usersData.map(position =>
            <tr key={position.id}>
                <td>{position.id}</td>
                <td className="mdl-data-table__cell--non-numeric">{position.name}</td>
                <td>{position.count}</td>
            </tr>
        );

        return(
          <table className="mdl-data-table mdl-js-data-table mdl-shadow--2dp">
            <thead>
            <tr>
              <th>Id</th>
              <th className="mdl-data-table__cell--non-numeric">Name</th>
              <th>Count</th>
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
