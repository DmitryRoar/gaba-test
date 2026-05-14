import type { FC } from 'react';

import { getCartsByUser } from '@entities/Cart/api/server';

import { formatCurrency, pluralize } from '@lib';
import { Card, CardContent, EmptyState, Typography } from '@ui';

interface Props {
  userId: number;
}

const CartListByUser: FC<Props> = async ({ userId }) => {
  const data = await getCartsByUser(userId);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-baseline gap-2">
        <Typography variant="h3" as="h3">
          Shopping carts
        </Typography>
        <Typography variant="caption" tone="muted" as="span">
          {data.total} total
        </Typography>
      </div>

      {data.carts.length === 0 ?
        <EmptyState title="No carts yet" description="This user hasn’t started shopping." />
      : <div className="flex flex-col gap-3">
          {data.carts.map((cart) => (
            <Card key={cart.id}>
              <CardContent className="flex flex-row items-center justify-between gap-4 py-4">
                <div className="flex flex-col gap-1">
                  <Typography variant="body" weight="semibold">
                    Cart #{cart.id}
                  </Typography>
                  <Typography variant="caption" tone="muted">
                    {pluralize(cart.totalProducts, 'product')} | {cart.totalQuantity} items
                  </Typography>
                </div>
                <div className="flex flex-col items-end gap-1">
                  <Typography variant="body" weight="semibold">
                    {formatCurrency(cart.discountedTotal)}
                  </Typography>
                  <Typography variant="caption" tone="muted">
                    was {formatCurrency(cart.total)}
                  </Typography>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      }
    </div>
  );
};

export default CartListByUser;
