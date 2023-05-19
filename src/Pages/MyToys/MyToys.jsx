import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProviders';

const MyToys = () => {
    const {user} = useContext(AuthContext);

    return (
        <div>
            <h3>My Toys Page</h3>
        </div>
    );
};

export default MyToys;