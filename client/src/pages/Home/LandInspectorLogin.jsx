import React, { useContext } from 'react'
import { LandRegistrationContext } from '../context/LandRegistrationContext';
import { Navigate } from 'react-router-dom';
import { Button } from "@material-tailwind/react";

export default function LandInspectorLogin() {
	const {connectWallet, isAdmin,currentAccount, checkAdmin} = useContext(LandRegistrationContext);
	// const isAdmin= checkAdmin();
	// console.log("inside Admin login page:"+ isAdmin);
	
    return (
	    <>
	        <div className="flex items-center gap-4">
	        {/* {!currentAccount && (
	            <button className="app-button_login" onClick={connectWallet}>
	              Login
	            </button>
	        ) } */}
	        {!currentAccount && (
	            <Button size="lg" color="amber" className="flex items-center gap-3" onClick={connectWallet}>
					<img src="/src/metamask.svg" alt="metamask" className="h-6 w-6" />
	            	Connect with Metamask
	            </Button>
	        )}
	
	        {(currentAccount) && (
	            <Button size="lg" color="blue" className="flex items-center gap-3" onClick={checkAdmin}>
	            	<img src="/src/checkmark.svg" alt="checkmark" className="h-6 w-6" />
					Check if admin
	            </Button>
	        )}
	
	        {isAdmin && (
	           <Navigate to='/pages/Dashboard/LIPDashboard/Index'></Navigate>
	        )}  
	    </div>
	    </>
	)
}	