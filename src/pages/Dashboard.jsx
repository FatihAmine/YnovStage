import React from "react";


export default function Dashbard() {
    return (
      <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="bg-white shadow-md p-4 flex justify-between items-center">
          {/* Left side: Menu button */}
          <button
            data-drawer-target="separator-sidebar"
            data-drawer-toggle="separator-sidebar"
            aria-controls="separator-sidebar"
            type="button"
            className="inline-flex items-center p-2 text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          >
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clipRule="evenodd"
                fillRule="evenodd"
                d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
              ></path>
            </svg>
          </button>
  
          {/* Right side: Account info and notifications */}
          <div className="flex items-center space-x-4">
            {/* Add New (Plus icon) */}
            <button className="p-2 rounded-full hover:bg-gray-100 focus:outline-none">
              <svg
                className="w-6 h-6 text-gray-600"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 5v14M5 12h14"></path>
              </svg>
            </button>
  
            {/* Notification Bell */}
            <button className="p-2 rounded-full hover:bg-gray-100 focus:outline-none">
              <svg
                className="w-6 h-6 text-gray-600"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11c0-2.97-2.167-5.432-5-5.91V4a2 2 0 10-4 0v1.09C6.167 5.568 4 8.03 4 11v3.159c0 .538-.214 1.053-.595 1.437L2 17h5m3 0v1a3 3 0 006 0v-1m-6 0a3 3 0 006 0"></path>
              </svg>
            </button>
  
            {/* Account Name and Email */}
            <div className="flex items-center space-x-2">
              <div className="text-right">
                <p className="text-sm font-medium text-gray-800">Name</p>
                <p className="text-xs text-gray-500">Email</p>
              </div>
              <div className="w-8 h-8 rounded-full bg-teal-500 flex items-center justify-center text-white">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5.121 17.804A13.937 13.937 0 0112 15c2.464 0 4.786.893 6.879 2.804M15 10a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </nav>
        <div>
            <button data-drawer-target="separator-sidebar" data-drawer-toggle="separator-sidebar" aria-controls="separator-sidebar" type="button" className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
            <span className="sr-only">Open sidebar</span>
            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
            </svg>
            </button>  

            <aside id="separator-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
                
            <div className="h-full px-3 py-4 overflow-y-auto bg-white dark:bg-Lgreen shadow-2xl">
            <img src="/ynovimg.png" alt="" className="w-[150px] ml-[40px]" />
            <ul className="space-y-2 font-medium">
              <li>
                <p className="flex items-center p-2 text-[20px] text-gray-900 rounded-lg dark:text-white group mt-28">
                  <span className="ms-3">Payment</span>
                </p>
              </li>
              <li>
                <a href="Todo" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-500 dark:text-gray-200" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 11 12 14 22 4" />
                    <path d="M21 21H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h12" />
                  </svg>
                  <span className="ms-3 whitespace-nowrap">To Do</span>
                </a>
              </li>
              <li>
                <a href="done" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-500 dark:text-gray-200" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span className="ms-3 whitespace-nowrap">Done</span>
                </a>
              </li>
              <li>
                <a href="Submit" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-500 dark:text-gray-200" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                  <span className="ms-3 whitespace-nowrap">Submit</span>
                </a>
              </li>
              <li>
                <p className="flex items-center p-2 text-[20px] text-gray-900 rounded-lg dark:text-white group">
                  <span className="ms-3 whitespace-nowrap">Request</span>
                </p>
              </li>
            </ul>

            <ul className=" space-y-2 font-medium  border-gray-200 dark:border-gray-700">
              <li>
                <a href="Alldoc" className="flex items-center p-2 text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-500 dark:text-gray-200" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M14 10h4v4" />
                    <path d="M10 14H6v-4" />
                  </svg>
                  <span className="ms-3">All documents</span>
                </a>
              </li>
              <li>
                <a href="Submitdoc1" className="flex items-center p-2 text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-500 dark:text-gray-200" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M19 11h-6M13 7h6m-6 8h6" />
                    <path d="M15 19V5" />
                  </svg>
                  <span className="ms-3">Submit</span>
                </a>
              </li>
              <li>
                <p className="flex items-center p-2 text-gray-900 transition duration-75 rounded-lg  dark:text-white group">
                  <span className="ms-3">Absence</span>
                </p>
              </li>
              <li>
                <a href="AbsenceStat" className="flex items-center p-2 text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-500 dark:text-gray-200" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 12h18M3 6h18M3 18h18" />
                  </svg>
                  <span className="ms-3">Absence statement</span>
                </a>
              </li>
              <li>
                <a href="Justification" className="flex items-center p-2 text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-500 dark:text-gray-200" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 8v8" />
                    <path d="M8 12h8" />
                  </svg>
                  <span className="ms-3">Justification</span>
                </a>
              </li>
            </ul>
          </div>
        </aside>
        <div className="bg-gray-200 p-6 h-[873px]">
            <div className="bg-white p-6 rounded-lg shadow-md mb-6 ml-[340px] mr-[100px]">
              <h2 className="text-xl font-bold mb-4">All Payments</h2>
              <table className="w-full table-auto">
                <thead>
                  <tr>
                    <th className="text-left p-2">Name</th>
                    <th className="text-left p-2">Class</th>
                    <th className="text-left p-2">Status</th>
                    <th className="text-left p-2">Date</th>
                    <th className="text-left p-2">Bill</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t">
                    <td className="p-2">John Doe</td>
                    <td className="p-2">B2</td>
                    <td className="p-2 text-green-500">✔ Complete</td>
                    <td className="p-2">14/02/2024</td>
                    <td className="p-2">
                      <button className="bg-blue-500 text-white px-4 py-1 rounded">Download</button>
                    </td>
                  </tr>

                </tbody>
              </table>
            </div>

          
            <div className="bg-white p-6 rounded-lg shadow-md mb-6 ml-[340px] mr-[100px]">
              <h2 className="text-xl font-bold mb-4">Folders</h2>
              <div className="grid grid-cols-5 gap-4">
              
                <div className="text-center">
                  <div className="text-blue-500">
              
                    <svg className="w-12 h-12 mx-auto" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path d="M10 4H4v16h16V6H12l-2-2z" />
                    </svg>
                  </div>
                  <p className="mt-2">Results 2024</p>
                </div>
              
              </div>
            </div>

          
            <div className="bg-white p-6 rounded-lg shadow-md mb-6 ml-[340px] mr-[100px]">
              <h2 className="text-xl font-bold mb-4">Recent Files</h2>
              <table className="w-full table-auto">
                <thead>
                  <tr>
                    <th className="text-left p-2">Name</th>
                    <th className="text-left p-2">Uploaded By</th>
                    <th className="text-left p-2">Date</th>
                    <th className="text-left p-2">Download</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t">
                    <td className="p-2">Sequence Data</td>
                    <td className="p-2">jdoe</td>
                    <td className="p-2">27/07/2023</td>
                    <td className="p-2">
                      <button className="bg-blue-500 text-white px-4 py-1 rounded">Download</button>
                    </td>
                  </tr>
                
                </tbody>
              </table>
            </div>

            
            <div className="bg-white p-6 rounded-lg shadow-md ml-[340px] mr-[100px]">
              <h2 className="text-xl font-bold mb-4">Absence Statement</h2>
              <table className="w-full table-auto">
                <thead>
                  <tr>
                    <th className="text-left p-2">Name</th>
                    <th className="text-left p-2">Class</th>
                    <th className="text-left p-2">Status</th>
                    <th className="text-left p-2">Date</th>
                    <th className="text-left p-2">Reason</th>
                    <th className="text-left p-2">Certificate</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t">
                    <td className="p-2">John Doe</td>
                    <td className="p-2">B2</td>
                    <td className="p-2 text-red-500">✘ Absent</td>
                    <td className="p-2">14/02/2024</td>
                    <td className="p-2">Medical</td>
                    <td className="p-2">
                      <button className="bg-blue-500 text-white px-4 py-1 rounded">Download</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
      </div>
      </div>
);}