import React from "react";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100 p-6 w-full">
      <h1 className="text-2xl font-bold mb-4">Welcome back to BookNest!</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5  mb-6">
        {/* Book Inventory */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Book Inventory</h2>
          <p className="text-lg font-medium">Total Books: 150+</p>
          <div className="mt-4">
            <h3 className="text-lg font-semibold mb-2">Low Stock Alerts</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Enough Already</li>
              <li>Ash's Cabin</li>
            </ul>
            <h3 className="text-lg font-semibold mt-4 mb-2">
              Recent Additions
            </h3>
            <ul className="list-disc list-inside space-y-2">
              <li>The BookShop</li>
              <li>Bluff: The Poems</li>
            </ul>
          </div>
        </div>

        {/* Best-Selling Books */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Best-Selling Books</h2>
          <div className="mt-4">
            <ul className="space-y-4">
              <li className="border-b border-gray-200 pb-2">
                <p className="text-md font-semibold">Lets's Go Coco</p>
                <p className="text-gray-600">Sales: ₹10,000</p>
              </li>
              <li className="border-b border-gray-200 pb-2">
                <p className="text-md font-semibold">Baking Yesteryear</p>
                <p className="text-gray-600">Sales: ₹8,000</p>
              </li>
              <li className="border-b border-gray-200 pb-2">
                <p className="text-md font-semibold">Wisteria</p>
                <p className="text-gray-600">Sales: ₹6,500</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
