import React from "react";

const Sidebar = () => {
  return (
    <div className="h-screen bg-black text-white font-semibold">
      <div className="p-4 flex pb-8 border-b-2 border-gray-800">
        <img src="src/assets/saral.png" className="h-12 w-12" />
        <h2 className="text-xl pt-2 font-semibold">SARAL</h2>
      </div>
      <div class="flex p-4">
        <img
          class="mr-2"
          src="https://cdn-icons-png.flaticon.com/128/2163/2163350.png"
          style={{ maxHeight: "30px" }}
        />
        <h5 style={{ color: "white" }}>SARAL Home</h5>
      </div>

      <div class="flex p-4">
        <img
          class="mr-2"
          src="https://cdn-icons-png.flaticon.com/128/954/954591.png"
          style={{ maxHeight: "30px" }}
        />
        <h5 style={{ color: "white" }}>Discovery</h5>
      </div>

      <div class="flex p-2 m-2 bg-white text-black rounded-lg">
        <img
          class="mr-2"
          src="https://cdn-icons-png.flaticon.com/128/1006/1006555.png"
          style={{ maxHeight: "30px" }}
        />
        <h5>Relationships</h5>
      </div>

      <div class="flex p-4">
        <img
          class="mr-2"
          src="https://cdn-icons-png.flaticon.com/128/4472/4472515.png"
          style={{ maxHeight: "30px" }}
        />
        <h5 style={{ color: "white" }}>Lists</h5>
      </div>

      <div class="flex p-4">
        <img
          class="mr-2"
          src="https://cdn-icons-png.flaticon.com/128/2374/2374449.png"
          style={{ maxHeight: "30px" }}
        />
        <h5 style={{ color: "white" }}>Email Drips</h5>
      </div>

      <div class="flex p-4">
        <img
          class="mr-2"
          src="https://cdn-icons-png.flaticon.com/128/3256/3256394.png"
          style={{ maxHeight: "30px" }}
        />
        <h5 style={{ color: "white" }}>Applications</h5>
      </div>

      <div class="flex p-4">
        <img
          class="mr-2"
          src="https://cdn-icons-png.flaticon.com/128/939/939354.png"
          style={{ maxHeight: "30px" }}
        />
        <h5 style={{ color: "white" }}>Performance</h5>
      </div>

      <div class="flex p-4">
        <img
          class="mr-2"
          src="https://cdn-icons-png.flaticon.com/128/6190/6190871.png"
          style={{ maxHeight: "30px" }}
        />
        <h5 style={{ color: "white" }}>Social Listening</h5>
      </div>

      <div class="flex p-4">
        <img
          class="mr-2"
          src="https://cdn-icons-png.flaticon.com/128/8983/8983163.png"
          style={{ maxHeight: "30px" }}
        />
        <h5 style={{ color: "white" }}>Payments</h5>
      </div>
    </div>
  );
};

export default Sidebar;
