import AppSidebar from "./appSidebar"
import Header from "./header"

const RootLayout = ({ children }) => (
  <>
    <AppSidebar />
    <div className="flex flex-col flex-1 overflow-hidden">
      <Header />
      <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 dark:bg-gray-900">
        <div className="container mx-auto px-6 py-8">{children}</div>
      </main>
    </div>
  </>
)

export default RootLayout

