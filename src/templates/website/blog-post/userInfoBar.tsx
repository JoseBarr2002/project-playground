export default function UserInfoBar() {
    return (
      <div className="bg-white border-b">
        <div className="container mx-auto py-2 px-4">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-4">
              <span className="font-medium">110 Mini Storage</span>
              <span className="text-gray-500">Facility ID: 6638</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-gray-500">Logged in as:</span>
              <span className="text-[#3E97CB]">matt cabra</span>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  