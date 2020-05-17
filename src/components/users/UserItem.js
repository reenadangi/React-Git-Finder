import React from 'react';
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
                    <a href={html_url} className="btn btn-dark btn-sm my-1">More </a>
                </div>    
            </div>
        )
    
}

export default UserItem
