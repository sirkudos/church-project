import React,{Component} from 'react';
import {Button } from 'react-bootstrap' 

class MainBody extends Component {
    
    render() { 
        return ( 
          
         <div className='container'>
            <div className="row">
                <div className="col-md-4">col-8
                <div className="card card-style" >
                <img src="..." class="card-img-top" alt="..."/>
                <div className="card-body">
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
              </div>
               </div>
               <div className="col-md-4">
                  <ul>
                    <li>helllo</li>
                    <li>helllo</li>
                    <li>helllo</li>
                    <li>helllo</li>
                  </ul>
               </div>
              <div className="col-md-4">
              <ul>
              <li>helllo jjsdjsdjjhdheuesjndcjdd</li>
              <li>helllo</li>
              <li>helllo</li>
              <li>helllo</li>
            </ul>
              </div>
            </div>
         </div>

         );
    }
}
 
export default MainBody;