import AppSidebar from "./appSidebar";
import Header from "./header";

const RootLayout = ({ children }) => (
  <>
    <AppSidebar />
    <main className="w-full">
      <Header />
      <section>{children}</section>
    </main>
  </>
);

export default RootLayout;
