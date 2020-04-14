import React,{Component} from 'react';
import  './MainNavBar.css'

class NavBar1 extends Component {

    render(){
        return(
            <div className='container' >
              
            <form className='mt-mt'>
            <div className="row">
            <div className="md-form  col-md-3  container">
            <label for="inputState" className='txt-c txt-40'>Parroquias</label>
             <select id="inputState" class="form-control f-w rounded-pill">
              <option selected>Lugary ciudad</option>
               <option>...</option>
                </select>
                </div>
             
              <div className="md-form  col-md-3  container">
               <label for="inputState" className='txt-c'>sacerdotes</label>
                <select id="inputState" class="form-control f-w rounded-pill">
                 <option selected>Misas Yactos depiedad</option>
                  <option>...</option>
                   </select>
                   </div>
              

                   <div className="md-form  col-md-2  container">
                     <label for="inputState" className='txt-c'>movimientos</label>
                      <select id="inputState" class="form-control w-3f rounded-pill">
                        <option selected>Mas opciones</option>
                        <option>...</option>
                       </select>
                   </div>
         

                <div className="md-form  col-md-4 container ">
                  <label for="inputZip"></label>
                    <input    type="button" value='Puscar Parroquias' class="form-control f-w 
                    bg-danger rounded-pill text-white btn-mt btn-s" id="inputZip"/>
           </div>

           </div>
      </form>
           
         <hr className='mt-md-100' />  

            
    </div>
        )
    }
}


export default NavBar1