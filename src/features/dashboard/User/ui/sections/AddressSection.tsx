import type { FC } from 'react';

import { type UserDetail } from '@entities';

import { Card, CardContent, CardHeader, CardTitle, DetailList, DetailRow } from '@ui';

interface Props {
  user: UserDetail;
}

const AddressSection: FC<Props> = ({ user }) => (
  <Card>
    <CardHeader>
      <CardTitle>Address</CardTitle>
    </CardHeader>
    <CardContent>
      <DetailList>
        <DetailRow label="Street" value={user.address.address} />
        <DetailRow label="City" value={user.address.city} />
        <DetailRow label="State" value={`${user.address.state} (${user.address.stateCode})`} />
        <DetailRow label="Postal code" value={user.address.postalCode} />
        <DetailRow label="Country" value={user.address.country} />
        <DetailRow
          label="Coordinates"
          value={`${user.address.coordinates.lat}, ${user.address.coordinates.lng}`}
        />
      </DetailList>
    </CardContent>
  </Card>
);

export default AddressSection;
