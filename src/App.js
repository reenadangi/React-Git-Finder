import React,{ Component } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar'
import Users from './components/users/Users'
import Search from './components/users/Search'
import Axios from 'axios';
class App extends Component {
  state={
    users:[],
    loading:false
  }
  async componentDidMount(){
    this.setState({loading:true});
    const res=await Axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    this.setState({
      users:res.data,
      loading:false});
    console.log(this.state.users)
  }
  searchUsers=async text=>{
    console.log("In search"+text)
    const res=await Axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    console.log(res)
    this.setState({
      users:res.data.items,
      loading:false});
    console.log(this.state.users)
  }
  render(){
  return (
   <div className='App'>
     <Navbar />
     <div className="container">
     <Search searchUsers={this.searchUsers}/> 
     <Users loading={this.state.loading} users={this.state.users}/>

     </div>
     
   </div>

  );
      
  }
}
export default App;
