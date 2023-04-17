import React, { useState, useContext, useEffect } from 'react'
import LandRegistrationContext from '../../context/LandRegistrationContext'
import UserCard from '../components/UserCard';

var userTable=[];
var usersAddresses=[];

export default function Dashboard() {
    const {getUserData,usersInfo} = useContext(LandRegistrationContext);
	//  to load the address when loading the page
	// remove react strict mode in main jsx or else data would be shown two times
	useEffect(()=>{
	    getUserData();
	}, []);

	return (
		<div>
			<div>
				<h1>User Details</h1>
				<button onClick={getUserData}>User Details</button>
			</div>
			<div>
				{
            		usersInfo.map((user,i)=>{
                	// to view unverified data
                		if(!user.isVerified)
                		{
                    		return <UserCard key={i}{...user}/>
                		}
            		})

        		}
			</div>
		</div>
  	)
}