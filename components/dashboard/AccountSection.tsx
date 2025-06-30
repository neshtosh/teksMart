import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const MOCK_USER = {
  name: 'Jane Mwangi',
  email: 'jane@teqsmart.co.ke',
  company: 'TeqSmart Solutions Ltd.',
  kraPin: 'A123456789B',
  phone: '+254 712 345678',
};

export default function AccountSection() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Account Information</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div><strong>Name:</strong> {MOCK_USER.name}</div>
        <div><strong>Email:</strong> {MOCK_USER.email}</div>
        <div><strong>Company:</strong> {MOCK_USER.company}</div>
        <div><strong>KRA PIN:</strong> {MOCK_USER.kraPin}</div>
        <div><strong>Phone:</strong> {MOCK_USER.phone}</div>
        <Button variant="outline" className="mt-4">Edit Profile</Button>
      </CardContent>
    </Card>
  );
} 