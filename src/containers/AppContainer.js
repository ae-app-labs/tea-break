import TeaBreak from '../fire'

var React = require('react');
var Home = require('../components/Home');
var Header = require('../components/Header');

class AppContainer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            speed: 10,
            usersData : []
        }
    }
    
    componentDidMount(){
      TeaBreak.init();
      
      TeaBreak.userValues( data => {
          console.log( JSON.stringify(data, null, 3) );
          this.setState({
              usersData: data
          });
      });
    }
    
    render() {
        return (
            <div className="mdl-layout mdl-js-layout">
                <Header />
                <main className="mdl-layout__content fullView">
                  <Home userData={this.props.usersData}/>
                </main>
            </div>
        );
    }
}


export default AppContainer;