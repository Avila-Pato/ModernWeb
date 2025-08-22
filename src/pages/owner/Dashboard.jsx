import React, { useEffect, useState } from "react";
import { useAppContext } from "../../context/AppContext";
import { assets, dummyDashboardData } from "../../assets/data";

const Dashboard = () => {
  const { user, currency } = useAppContext();
  const [dashboardData, setDashboardData] = useState({
    bookings: [],
    totalBookings: 0,
    totalRevenue: 0,
  });

  const getDashboardData = async () => {
    setDashboardData(dummyDashboardData);
  };

  useEffect(() => {
    getDashboardData();
  }, [user]);

  return (
    <div className="md:px-8 py-6 xl:py-8 mx-1 sm:mx-3 h-[97vh] overflow-y-auto lg:w-11/12 bg-white shadow rounded-xl">
      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
        {/* Total Bookings */}
        <div className="flex items-center gap-4 p-5 bg-[#fff4d2] rounded-xl shadow-sm">
          <img src={assets.house} alt="House" className="hidden sm:block w-8 h-8" />
          <div>
            <h4 className="text-2xl font-bold text-gray-800">
              {(dashboardData.totalBookings ?? 0).toString().padStart(2, "0")}
            </h4>
            <p className="text-sm font-medium text-secondary">Ventas totales</p>
          </div>
        </div>

        {/* Total Revenue */}
        <div className="flex items-center gap-4 p-5 bg-[#d1e8ff] rounded-xl shadow-sm">
          <img src={assets.dollar} alt="Dollar" className="hidden sm:block w-8 h-8" />
          <div>
            <h4 className="text-2xl font-bold text-gray-800">
              {currency}
              {(dashboardData.totalRevenue ?? 0).toLocaleString()}
            </h4>
            <p className="text-sm font-medium text-secondary">Ganancias</p>
          </div>
        </div>
      </div>

      {/* Latest Bookings Table */}
      <div className="mt-6 overflow-hidden rounded-xl border border-slate-200 shadow-sm">
        <div className="bg-secondary px-6 py-3 border-b border-slate-200">
          <div className="grid grid-cols-[0.5fr_2fr_2fr_1fr_1fr] text-left text-sm font-semibold text-gray-700">
            <span className="hidden lg:block">#</span>
            <span>Propiedad</span>
            <span>Fechas</span>
            <span>Cantidad</span>
            <span>Estado</span>
          </div>
        </div>

        <div className="divide-y divide-slate-200">
          {dashboardData.bookings.length === 0 ? (
            <p className="p-6 text-center text-gray-500">No hay reservas disponibles.</p>
          ) : (
            dashboardData.bookings.map((booking, index) => (
              <div
                key={booking._id || index}
                className="grid grid-cols-[0.5fr_2fr_2fr_1fr_1fr] items-center px-6 py-4 bg-white text-sm hover:bg-gray-50 transition-colors"
              >
                <span className="hidden lg:block text-gray-500">{index + 1}</span>

                {/* Property */}
                <div className="flex items-center gap-3 min-w-0">
                  <img
                    src={booking.property.images[0]}
                    alt={booking.property.title}
                    className="w-12 h-12 object-cover rounded-lg flex-shrink-0"
                  />
                  <p className="text-gray-800 font-medium truncate">
                    {booking.property.title}
                  </p>
                </div>

                {/* Dates */}
                <div className="text-gray-600">
                  {new Date(booking.checkInDate).toLocaleDateString()} –{" "}
                  {new Date(booking.checkOutDate).toLocaleDateString()}
                </div>

                {/* Price */}
                <div className="font-medium text-gray-800">
                  {currency}
                  {booking.totalPrice.toLocaleString()}
                </div>

                {/* Status */}
                <div className="flex justify-start">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium
                      ${
                        booking.isPaid
                          ? "bg-green-100 text-green-800"
                          : "bg-red-100 text-red-800"
                      }
                    `}
                  >
                    {booking.isPaid ? "Completo" : "Pendiente"}
                  </span>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;