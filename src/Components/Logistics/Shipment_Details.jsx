import './Shipment_Details.css'
import React from 'react'
'use client';
import {
    AreaChart,
    Area,
    ResponsiveContainer,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
  } from 'recharts';
const Shipment_Details = () => {
    const productSales = [
        {
          name: 'Jan',
          product1: 4000,
          product2: 2400,
        },
        {
          name: 'Feb',
          product1: 3000,
          product2: 2210,
        },
        {
          name: 'Mar',
          product1: 2000,
          product2: 3290,
        },
        {
          name: 'Apr',
          product1: 2780,
          product2: 2000,
        },
        {
          name: 'May',
          product1: 1890,
          product2: 2181,
        },
        {
          name: 'Jun',
          product1: 2390,
          product2: 4000,
        },
      ];
    return (
        <>
            <div className="main-sec"> 
                <div className='delivery-status'>
                  <div>
                    <p>Shipment Details Graph</p>
                  </div>
                <ResponsiveContainer width="95%" height="70%">
                <AreaChart width={500} height={400} data={productSales}>
                <YAxis />
        <XAxis dataKey="name" />
        <CartesianGrid strokeDasharray="5 5" />

        <Tooltip />
        <Legend />
                <Area
                type="monotone"
                dataKey="product1"
                stroke="#7c3aed" fill="#8b5cf6"
                />
                <Area
                type="monotone"
                dataKey="product2"
                stroke="#2563eb" fill="#3b82f6"
                />
                </AreaChart>
                </ResponsiveContainer>
                </div>
                <div className='Down-four'>
                    <div className='Address'>
                        <h3>
                            Details
                        </h3>
                        <p>
                            <b>Sender</b>
                        </p>
                        <p>Dr.Kamlesh Gupta</p>
                        <p>
                            <b>Receiver</b>
                        </p>
                        <p>Dr.Saluja Sharma</p>
                    </div>
                    <div className='Carrier'>
                    <h3>
                            Carrier
                        </h3>
                        <p>
                            <b>Delivered by</b>
                        </p>
                        <p>Blue Star</p>
                        <p>
                            <b>Product</b>
                        </p>
                        <p>Road Denmark</p>
                    </div>
                    </div>
                    
            </div>
        </>
    );
}
// const CustomTooltip = ({ active, payload, label }) => {
//   if (active && payload && payload.length) {
//     return (
//       <div className="p-4 bg-slate-500 flex flex-col gap-4 rounded-md">
//         <p className="text-small text-sm">{label}</p>
//         <p className="text-sm text-blue-100">
//           Product 1:
//           <span className="sm-1">${payload[0].value}</span>
//         </p>
//         <p className="text-sm text-indigo-100">
//           Product 2:
//           <span className="sm-1">${payload[1].value}</span>
//         </p>
//       </div>
//     );
//   }
// };

export default Shipment_Details