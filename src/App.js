import React, {Component} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import UserProfile from './components/UserProfile';
import LogIn from './components/Login';
import Debit from './components/debit';

class App extends Component {

  constructor() {
    super();

    this.state = {
      accountBalance: 14568.27,
      currentUser: {
        userName: 'Sebastian_S',
        memberSince: '08/23/99',
      }
    }
  }
  LogIn = (Info) => {
    const newUser = {...this.state.currentUser}
    newUser.userName = Info.userName
    this.setState({currentUser: newUser})
  }

  render() {

    const HomeComponent = () => (<Home accountBalance={this.state.accountBalance}/>);
    const UserProfileComponent = () => (
        <UserProfile userName={this.state.currentUser.userName} memberSince={this.state.currentUser.memberSince}/>);
   const LogInComponent = () => (<LogIn user={this.state.currentUser} LogIn={this.LogIn} {...this.props}/>);

    return (
        <Router>
          <div>
            <Routes>
            <Route exact path="/UserProfile" element={<UserProfileComponent/>}/>
            <Route exact path="/LogIn" element={<LogInComponent/>}/>
            <Route exact path="/" element={<HomeComponent/>}/>
            </Routes>
          </div>
        </Router>
    );
  }

}

export default App;