import RootLayout from " @/components/Layouts/RootLayout";

const HomePage = () => {
  return (
    <div style={{ "minHeight": "100vh" }}>
      <h1>This is home page</h1>
    </div>
  );
};

export default HomePage;

HomePage.getLayout = function getLayout(page) {
  return (

    <RootLayout>{page}</RootLayout>

  )
}