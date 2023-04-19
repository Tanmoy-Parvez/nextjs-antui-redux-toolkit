import DashboardLayout from ' @/components/Layouts/DashboardLayout';
import React from 'react';

const AdminPage = () => {
    return (
        <div>
            <h1>This is admin page</h1>
        </div>
    );
};

export default AdminPage;

AdminPage.getLayout = function getLayout(page) {
    return <DashboardLayout>{page}</DashboardLayout>
}