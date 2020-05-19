// rce
import React,{ useState,useContext } from 'react';
import GithubContex from '../../context/github/githubContext';

import AlertContex from '../../context/alert/alertContext';

const Search=()=>{
    const githubContext=useContext(GithubContex);
    const alertContext=useContext(AlertContex);


    const [text,setText]=useState('');
    const onChange=(e)=>{
        setText(e.target.value);
    }
    const onSubmit=(e)=>{
        e.preventDefault();
        if(text===''){
            console.log("in alert")
            alertContext.setAlert("Enter valid input",'light');
            console.log("I am able to set",alertContext.msg)
        }    
        else{
        githubContext.searchUsers(text)
        setText('')
        
        }

    }
    
        return (
            <div>
                <form className="form" onSubmit={onSubmit}>
                    <input type="text" name="text" placeholder="Search User.." value=
                    {text} onChange={onChange}/>
                    <input type="submit" value="Search" className="btn btn-dark btn-block"/>
                </form>
               
               { githubContext.users.length>0 &&(
               <button className="btn btn-white btn-block" onClick={githubContext.clearUsers}>Clear</button>
               )}
            </div>
        );
    
}

export default Search
