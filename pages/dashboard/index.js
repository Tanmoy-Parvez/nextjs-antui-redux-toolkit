import DashboardLayout from " @/components/Layouts/DashboardLayout";

const DashboardHomePage = () => {
    return (
        <div>
            <h1>Welcome to dashboard home page</h1>
        </div>
    );
};

export default DashboardHomePage;

DashboardHomePage.getLayout = function getLayout(page) {

    return <DashboardLayout>{page}</DashboardLayout>
}