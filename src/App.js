import React,{Component} from 'react';
import MainNavBar from './component/nav/MainNavBar'
import NavBar1 from './component/nav/NavBar1'
// import MainBody from './component/MainBody'
import './App.css'

class App extends Component {

    render(){
        return(
            <div className=''>
              <MainNavBar />
              <NavBar1 />
            
            </div>
        )
    }
}

export default App
