import React from "react";

const Sidebar = () => {
  return (
    <div className="h-screen fixed bg-black text-white font-semibold -mr-10">
      <div className="pl-4 pt-6 flex pb-4 border-b border-gray-900">
        <img src="src/assets/saral.png" className="h-12 w-12" />
        <h2 className="text-xl pt-2 font-semibold">HARSHIL</h2>
      </div>
      <button class="flex p-2 m-2 rounded-lg hover:bg-gray-900">
        <img
          class="mr-2"
          src="https://cdn-icons-png.flaticon.com/128/2163/2163350.png"
          style={{ maxHeight: "30px" }}
        />
        <h5 className="text-white">HT Home</h5>
      </button>

      <button class="flex p-2 m-2 rounded-lg hover:bg-gray-900 ">
        <img
          class="mr-2"
          src="https://cdn-icons-png.flaticon.com/128/954/954591.png"
          style={{ maxHeight: "30px" }}
        />
        <h5 className="text-white">Discovery</h5>
      </button>

      <button class="flex p-2 m-2 bg-white text-black rounded-lg ">
        <img
          class="mr-2"
          src="https://cdn-icons-png.flaticon.com/128/1006/1006555.png"
          style={{ maxHeight: "30px" }}
        />
        <h5>Relationships</h5>
      </button>

      <button class="flex p-2 m-2 rounded-lg hover:bg-gray-900">
        <img
          class="mr-2"
          src="https://cdn-icons-png.flaticon.com/128/4472/4472515.png"
          style={{ maxHeight: "30px" }}
        />
        <h5 className="text-white">Lists</h5>
      </button>

      <button class="flex p-2 m-2 rounded-lg hover:bg-gray-900">
        <img
          class="mr-2"
          src="https://cdn-icons-png.flaticon.com/128/2374/2374449.png"
          style={{ maxHeight: "30px" }}
        />
        <h5 className="text-white">Email Drips</h5>
      </button>

      <button class="flex p-2 m-2 rounded-lg hover:bg-gray-900">
        <img
          class="mr-2"
          src="https://cdn-icons-png.flaticon.com/128/3256/3256394.png"
          style={{ maxHeight: "30px" }}
        />
        <h5 className="text-white">Applications</h5>
      </button>

      <button class="flex p-2 m-2 rounded-lg hover:bg-gray-900">
        <img
          class="mr-2"
          src="https://cdn-icons-png.flaticon.com/128/939/939354.png"
          style={{ maxHeight: "30px" }}
        />
        <h5 className="text-white">Performance</h5>
      </button>

      <button class="flex p-2 m-2 rounded-lg hover:bg-gray-900">
        <img
          class="mr-2"
          src="https://cdn-icons-png.flaticon.com/128/6190/6190871.png"
          style={{ maxHeight: "30px" }}
        />
        <h5 className="text-white">Social Listening</h5>
      </button>

      <button class="flex p-2 m-2 rounded-lg hover:bg-gray-900">
        <img
          class="mr-2"
          src="https://cdn-icons-png.flaticon.com/128/8983/8983163.png"
          style={{ maxHeight: "30px" }}
        />
        <h5 className="text-white">Payments</h5>
      </button>
    </div>
  );
};

export default Sidebar;
