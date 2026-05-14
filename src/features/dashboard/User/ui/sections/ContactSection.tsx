import type { FC } from 'react';

import { type UserDetail } from '@entities';

import { Card, CardContent, CardHeader, CardTitle, DetailList, DetailRow } from '@ui';

interface Props {
  user: UserDetail;
}

const ContactSection: FC<Props> = ({ user }) => (
  <Card>
    <CardHeader>
      <CardTitle>Contact</CardTitle>
    </CardHeader>
    <CardContent>
      <DetailList>
        <DetailRow label="Email" value={user.email} />
        <DetailRow label="Phone" value={user.phone} />
        <DetailRow label="Username" value={user.username} />
        <DetailRow label="University" value={user.university} />
      </DetailList>
    </CardContent>
  </Card>
);

export default ContactSection;
