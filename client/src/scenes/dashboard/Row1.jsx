import { Card } from '@/components/ui/card';
import React from 'react';

const Row1 = () => {
  return (
    <>
      <Card className="bg-white p-4" style={{ gridArea: 'a' }}>Box A</Card>
      <Card className="bg-white p-4" style={{ gridArea: 'b' }}>Box B</Card>
      <Card className="bg-white p-4" style={{ gridArea: 'c' }}>Box C</Card>
    </>
  );
};

export default Row1;

