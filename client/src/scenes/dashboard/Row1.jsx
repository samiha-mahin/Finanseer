import { Card } from '@/components/ui/card';
import React from 'react';

const Row1 = () => {
  return (
    <>
      <Card className="bg-zinc-700 p-4 border-0 shadow-xl shadow-black/70 drop-shadow-2xl" style={{ gridArea: 'a' }}>Box A</Card>
      <Card className="bg-zinc-700 p-4 border-0 shadow-xl shadow-black/70 drop-shadow-2xl" style={{ gridArea: 'b' }}>Box B</Card>
      <Card className="bg-zinc-700 p-4 border-0 shadow-xl shadow-black/70 drop-shadow-2xl" style={{ gridArea: 'c' }}>Box C</Card>
    </>
  );
};

export default Row1;

