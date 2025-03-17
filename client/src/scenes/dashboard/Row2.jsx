import { Card } from '@/components/ui/card';
import React from 'react';

const Row2 = () => {
  return (
    <>
      <Card className="bg-white p-4" style={{ gridArea: 'd' }}>Box D</Card>
      <Card className="bg-white p-4" style={{ gridArea: 'e' }}>Box E</Card>
      <Card className="bg-white p-4" style={{ gridArea: 'f' }}>Box F</Card>
    </>
  );
};

export default Row2;
