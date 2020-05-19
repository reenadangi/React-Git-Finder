import React from 'react';
import { Link } from 'react-router-dom'
const UserItem=({user:{login,avatar_url,html_url}})=>{ 
    
        // this will help us desructing state so that we dont have to use this.state...
        // const{login,avatar_url,html_url}=props.user;
        return (
            <div className="card text-center">
                <img 
                src={avatar_url} 
                className="round-img" 
                style={{width:'60px'}}alt=""/>
                <h3>{login}</h3>
                <div>
                    {/* this goes to actual profile */}
                    {/* <a href={html_url} className="btn btn-dark btn-sm my-1">More </a> */}
                    <Link to={`/user/${login}`} className="btn btn-dark btn-sm my-1" >About</Link>
                </div>    
            </div>
        )
    
}

export default UserItem
