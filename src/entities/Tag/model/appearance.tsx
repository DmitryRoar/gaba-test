import { capitalize } from '@lib';
import { type ChipProps } from '@ui';

import { type Tag } from '../types';

export interface TagBadge {
  color: ChipProps['color'];
  label: string;
}

export const getTagBadge = (slug: Tag['slug']): TagBadge => ({
  color: 'accent',
  label: capitalize(slug),
});
