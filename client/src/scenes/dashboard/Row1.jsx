import { Card } from '@/components/ui/card';
import { useGetKpisQuery } from '@/state/api';
import React from 'react';

const Row1 = () => {
    const {data} = useGetKpisQuery();
  return (
    <>
      <Card className="bg-zinc-800 p-4 border-0 shadow-xl shadow-black/70 drop-shadow-2xl" style={{ gridArea: 'a' }}>Box A</Card>
      <Card className="bg-zinc-800 p-4 border-0 shadow-xl shadow-black/70 drop-shadow-2xl" style={{ gridArea: 'b' }}>Box B</Card>
      <Card className="bg-zinc-800 p-4 border-0 shadow-xl shadow-black/70 drop-shadow-2xl" style={{ gridArea: 'c' }}>Box C</Card>
    </>
  );
};

export default Row1;

