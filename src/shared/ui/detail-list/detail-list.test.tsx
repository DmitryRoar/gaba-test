import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { DetailList, DetailRow } from './detail-list';

const renderRow = (props: Parameters<typeof DetailRow>[0]) =>
  render(
    <DetailList>
      <DetailRow {...props} />
    </DetailList>,
  );

describe('DetailList', () => {
  it('renders a semantic description list', () => {
    const { container } = renderRow({ label: 'Email', value: 'a@b.com' });
    expect(container.querySelector('dl')).not.toBeNull();
    expect(container.querySelector('dt')?.textContent).toBe('Email');
    expect(container.querySelector('dd')?.textContent).toBe('a@b.com');
  });
});

describe('DetailRow', () => {
  it('renders numeric values including zero', () => {
    renderRow({ label: 'Count', value: 0 });
    expect(screen.getByText('0')).toBeInTheDocument();
  });

  it.each([null, undefined, ''])('shows default placeholder for %p', (value) => {
    renderRow({ label: 'Phone', value });
    expect(screen.getByText('—')).toBeInTheDocument();
  });

  it('honors custom placeholder', () => {
    renderRow({ label: 'Phone', value: null, placeholder: 'N/A' });
    expect(screen.getByText('N/A')).toBeInTheDocument();
  });

  it('applies extra className to row container', () => {
    const { container } = renderRow({ label: 'Email', value: 'x', className: 'custom-row' });
    expect(container.querySelector('.custom-row')).not.toBeNull();
  });
});
