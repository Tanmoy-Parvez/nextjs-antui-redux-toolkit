import RootLayout from ' @/components/Layouts/RootLayout';
import React from 'react';

const Users = () => {
    return (
        <div>
            <h1>This is users page</h1>
        </div>
    );
};

export default Users;


Users.getLayout = function getLayout(page) {
    return (

        <RootLayout>{page}</RootLayout>

    )
}