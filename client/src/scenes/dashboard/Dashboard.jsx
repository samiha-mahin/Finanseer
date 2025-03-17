import React from 'react';
import Row1 from './Row1';
import Row2 from './Row2';
import Row3 from './Row3';

const Dashboard = () => {
  return (
    <div
      className="w-full h-full grid gap-6 p-4
        sm:grid-cols-1 sm:grid-rows-[repeat(24,_80px)] 
        md:grid-cols-1 md:grid-rows-[repeat(24,_80px)] 
        lg:grid-cols-3 lg:grid-rows-[repeat(10,_minmax(60px,_1fr))] 
        xl:grid-cols-3 xl:grid-rows-[repeat(10,_minmax(60px,_1fr))] 
        2xl:grid-cols-3 2xl:grid-rows-[repeat(10,_minmax(60px,_1fr))]"
      style={{
        gridTemplateColumns: "repeat(3, minmax(370px, 1fr))",
        gridTemplateRows: "repeat(10, minmax(60px, 1fr))",
        gridTemplateAreas: `
          "a b c"
          "a b c"
          "d e f"
          "d e f"
          "g h i"
          "g h i"
          "g h j"
        `,
      }}
    >
      <Row1 />
      <Row2 />
      <Row3 />
    </div>
  );
};

export default Dashboard;
