import { Card } from '@/components/ui/card';
import React from 'react';

const Row3 = () => {
  return (
    <>
      <Card className="bg-zinc-800 p-4 border-0 shadow-xl shadow-black/70 drop-shadow-2xl" style={{ gridArea: 'g' }}>Box G</Card>
      <Card className="bg-zinc-800 p-4 border-0 shadow-xl shadow-black/70 drop-shadow-2xl" style={{ gridArea: 'h' }}>Box H</Card>
      <Card className="bg-zinc-800 p-4 border-0 shadow-xl shadow-black/70 drop-shadow-2xl"style={{ gridArea: 'i' }}>Box I</Card>
      <Card className="bg-zinc-800 p-4 border-0 shadow-xl shadow-black/70 drop-shadow-2xl" style={{ gridArea: 'j' }}>Box J</Card>
    </>
  );
};

export default Row3;
