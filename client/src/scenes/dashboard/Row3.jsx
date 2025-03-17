import { Card } from '@/components/ui/card';
import React from 'react';

const Row3 = () => {
  return (
    <>
      <Card className="bg-zinc-700 p-4 border-0" style={{ gridArea: 'g' }}>Box G</Card>
      <Card className="bg-zinc-700 p-4 border-0" style={{ gridArea: 'h' }}>Box H</Card>
      <Card className="bg-zinc-700 p-4 border-0" style={{ gridArea: 'i' }}>Box I</Card>
      <Card className="bg-zinc-700 p-4 border-0" style={{ gridArea: 'j' }}>Box J</Card>
    </>
  );
};

export default Row3;
