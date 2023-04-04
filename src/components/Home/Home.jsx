import React from 'react';
import { Outlet, useNavigation } from 'react-router-dom';
import Header from '../Header/Header';

const Home = () => {
    const navigation = useNavigation();
    return (
        <div>
            <Header></Header>
            {/* <h3>This is real Home page</h3> */}
            <div>
                {navigation.state==='loading'?'Spinner Loading':' '}
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;