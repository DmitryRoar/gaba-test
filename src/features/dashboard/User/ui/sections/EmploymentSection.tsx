import type { FC } from 'react';

import { type UserDetail } from '@entities';

import { Card, CardContent, CardHeader, CardTitle, DetailList, DetailRow } from '@ui';

interface Props {
  user: UserDetail;
}

const EmploymentSection: FC<Props> = ({ user }) => (
  <Card>
    <CardHeader>
      <CardTitle>Employment</CardTitle>
    </CardHeader>
    <CardContent>
      <DetailList>
        <DetailRow label="Company" value={user.company.name} />
        <DetailRow label="Department" value={user.company.department} />
        <DetailRow label="Title" value={user.company.title} />
      </DetailList>
    </CardContent>
  </Card>
);

export default EmploymentSection;
