import { Card } from '@/components/ui/card';
import React from 'react';

const Row3 = () => {
  return (
    <>
      <Card className="bg-white p-4" style={{ gridArea: 'g' }}>Box G</Card>
      <Card className="bg-white p-4" style={{ gridArea: 'h' }}>Box H</Card>
      <Card className="bg-white p-4" style={{ gridArea: 'i' }}>Box I</Card>
      <Card className="bg-white p-4" style={{ gridArea: 'j' }}>Box J</Card>
    </>
  );
};

export default Row3;
