import type { FC } from 'react';

import { type UserDetail } from '@entities';

import { Card, CardContent, CardHeader, CardTitle, DetailList, DetailRow } from '@ui';

interface Props {
  user: UserDetail;
}

const PersonalSection: FC<Props> = ({ user }) => (
  <Card>
    <CardHeader>
      <CardTitle>Personal</CardTitle>
    </CardHeader>
    <CardContent>
      <DetailList>
        <DetailRow label="Maiden name" value={user.maidenName} />
        <DetailRow label="Age" value={user.age} />
        <DetailRow label="Gender" value={user.gender} />
        <DetailRow label="Birth date" value={user.birthDate} />
        <DetailRow label="Blood group" value={user.bloodGroup} />
        <DetailRow label="Height / weight" value={`${user.height} cm / ${user.weight} kg`} />
        <DetailRow label="Eye color" value={user.eyeColor} />
        <DetailRow label="Hair" value={`${user.hair.color} | ${user.hair.type}`} />
      </DetailList>
    </CardContent>
  </Card>
);

export default PersonalSection;
