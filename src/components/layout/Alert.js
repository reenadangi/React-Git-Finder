// racf
import React,{useContext} from 'react'
import AlertContext from '../../context/alert/alertContext'

export const Alert = () => {
    const alertContext=useContext(AlertContext);
    const {alert}=alertContext;
    console.log("this is ",alertContext.alert) 
    return (
       
       alert != null &&(
           <div className={`alert alert-${alert.type}`}>
               <i className="fas fas-info-circle">
                   {alert.msg}
                   
               </i>
              
           </div>
       )
       

       
           
    )
}
export default Alert;

