import { Card } from '@/components/ui/card';
import React from 'react';

const Row2 = () => {
  return (
    <>
      <Card className="bg-zinc-800 p-4 border-0 shadow-xl shadow-black/70 drop-shadow-2xl" style={{ gridArea: 'd' }}>Box D</Card>
      <Card className="bg-zinc-800 p-4 border-0 shadow-xl shadow-black/70 drop-shadow-2xl" style={{ gridArea: 'e' }}>Box E</Card>
      <Card className="bg-zinc-800 p-4 border-0 shadow-xl shadow-black/70 drop-shadow-2xl" style={{ gridArea: 'f' }}>Box F</Card>
    </>
  );
};

export default Row2;
