// components/VehicleScheduleTable.js
import 'tailwindcss/tailwind.css';
import Header from '@/app/components/Header';
import Navbar from '@/app/components/Navbar';
export default function VehicleScheduleTable() {
    return (
      <>
      <Header/>
      <Navbar/>
        <div className="relative w-full flex flex-col min-w-0 break-words shadow-lg mb-6 mt-4">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex-grow">
              <h3 className="text-center text-blue-500 font-bold text-xl p-4 m-4 border-b-2 border-gray-800">
                Green vehicle schedule for in-campus movement from POD Buildings to Health Center and vice-a-versa (Monday to Saturday)
              </h3>
            </div>
          </div>
          <div className="block bg-transparent m-4 p-4 w-full overflow-x-auto">
            <table className="w-full text-center border-collapse">
              <thead>
                <tr className="border border-gray-300">
                  <th className="text-md px-6 py-3 border border-gray-300">Sr. No.</th>
                  <th className="text-md px-6 py-3 border border-gray-300">Departure Time</th>
                  <th className="text-md px-6 py-3 border border-gray-300">Green Vehicle No</th>
                  <th className="text-md px-6 py-3 border border-gray-300">Route</th>
                  <th className="text-md px-6 py-3 border border-gray-300">Users</th>
                  <th className="text-md px-6 py-3 border border-gray-300">Remarks</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { id: 1, time: '10:00', vehicleNo: '01 & 02', route: 'POD Buildings to Health Center', users: 'All', remarks: 'Via Carbon Building, JC Bose Hall' },
                  { id: 2, time: '10:30', vehicleNo: '01 & 02', route: 'POD Buildings to Health Center', users: 'All', remarks: 'Via Carbon Building, JC Bose Hall' },
                  { id: 3, time: '11:00', vehicleNo: '01 & 02', route: 'POD Buildings to Health Center', users: 'All', remarks: 'Via Carbon Building, JC Bose Hall' },
                  { id: 4, time: '11:30', vehicleNo: '01 & 02', route: 'POD Buildings to Health Center', users: 'All', remarks: 'Via Carbon Building, JC Bose Hall' },
                  { id: 5, time: '12:00', vehicleNo: '01 & 02', route: 'POD Buildings to Health Center', users: 'All', remarks: 'Via Carbon Building, JC Bose Hall' },
                  { id: 6, time: '12:30', vehicleNo: '01 & 02', route: 'POD Buildings to Health Center', users: 'All', remarks: 'Via Carbon Building, JC Bose Hall' },
                ].map((entry) => (
                  <tr key={entry.id} className="border border-gray-300">
                    <th className="text-md px-6 py-3 border border-gray-300">{entry.id.toString().padStart(2, '0')}</th>
                    <td className="text-md px-6 py-3 border border-gray-300">{entry.time}</td>
                    <td className="text-md px-6 py-3 border border-gray-300">{entry.vehicleNo}</td>
                    <td className="text-md px-6 py-3 border border-gray-300">{entry.route}</td>
                    <td className="text-md px-6 py-3 border border-gray-300">{entry.users}</td>
                    <td className="text-md px-6 py-3 border border-gray-300">{entry.remarks}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </>
    );
  }
  