import NavBar from "./navbar";

const Layout = (Children) => {
  return (
    <div className="w-screen ">
      <NavBar />
      <Children />
    </div>
  );
};

export default Layout;
