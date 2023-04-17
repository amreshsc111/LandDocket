import React, { useState, useEffect } from 'react'
import LandRegistrationContext from '../../context/LandRegistrationContext'
import AllLandCard from '../components/AllLandCard';

export default function RequestLand() {
    const {getAllLands,landsInfo} = useContext(LandRegistrationContext);
	//  to load the address when loading the page
	// remove react strict mode in main jsx or else data would be shown two times
	useEffect(() => {
	    getAllLands();
	}, []);

    return (
        <div>
            <div>
                <h1>Avaliable Lands</h1>
                <button onClick={getAllLands}>Available Lands</button>
            </div>
            <div>
                {
                    landsInfo.map((land, i) => {
                        // to view unverified data
                        // the current user should not be the owner of the availble land to perform selling transaction
                        if(land.isVerified)
                        {
                            return <AllLandCard key={i}{...land}/>
                        }
                    })
                }
            </div>
        </div>
    )
}