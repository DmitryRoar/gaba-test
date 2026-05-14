'use client';

import type { FC, KeyboardEvent, MouseEvent, ReactNode } from 'react';
import { useRef, useState } from 'react';

import { cn } from '@utils';

import { Button } from '../button';
import { CheckIcon, ChevronDownIcon } from '../icon';
import { PopoverContent, PopoverDialog } from '../popover';
import { ListBox, ListBoxItem } from '../select/select';
import { Tag, TagGroup, TagGroupList } from '../tag-group';

export interface MultiSelectOption {
  id: string;
  label: string;
}

export interface MultiSelectProps {
  options: readonly MultiSelectOption[];
  value: readonly string[];
  onChange: (next: string[]) => void;
  placeholder?: string;
  emptyText?: ReactNode;
  isDisabled?: boolean;
  isLoading?: boolean;
  className?: string;
  'aria-label'?: string;
}

const MultiSelect: FC<MultiSelectProps> = ({
  options,
  value,
  onChange,
  placeholder = 'Select…',
  emptyText = 'No options',
  isDisabled,
  isLoading,
  className,
  'aria-label': ariaLabel,
}) => {
  const triggerRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  const selected = options.filter((option) => value.includes(option.id));
  const isEmpty = selected.length === 0;
  const locked = isDisabled || isLoading;

  const handleRemove = (keys: Set<unknown>) => {
    const removed = new Set([...keys].map(String));
    onChange(value.filter((id) => !removed.has(id)));
  };

  const handleSelect = (keys: Set<unknown> | 'all') => {
    if (keys === 'all') {
      onChange(options.map((option) => option.id));
      return;
    }
    onChange([...keys].map(String));
  };

  const toggle = () => {
    if (!locked) setIsOpen((open) => !open);
  };

  const onFieldClick = (event: MouseEvent<HTMLDivElement>) => {
    if ((event.target as Element).closest('button')) return;
    toggle();
  };

  const onFieldKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.target !== event.currentTarget) return;
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      toggle();
      return;
    }
    if (event.key === 'ArrowDown' && !isOpen) {
      event.preventDefault();
      setIsOpen(true);
    }
  };

  return (
    <>
      <div
        ref={triggerRef}
        role="button"
        tabIndex={locked ? -1 : 0}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-disabled={locked || undefined}
        aria-label={ariaLabel}
        data-state={isOpen ? 'open' : 'closed'}
        data-disabled={locked || undefined}
        onClick={onFieldClick}
        onKeyDown={onFieldKeyDown}
        className={cn(
          'border-border bg-surface relative flex min-h-11 w-full cursor-pointer flex-wrap items-center gap-1.5 rounded-2xl border p-1.5 pr-9 transition-colors',
          'focus-visible:ring-primary/30 focus-visible:ring-2 focus-visible:outline-none',
          'data-[state=open]:border-primary data-[state=open]:ring-primary/30 data-[state=open]:ring-2',
          'data-[disabled]:cursor-not-allowed data-[disabled]:opacity-60',
          className,
        )}
      >
        {isEmpty ?
          <span className="text-fg-muted px-1.5 text-sm">{placeholder}</span>
        : <TagGroup
            aria-label={ariaLabel ? `${ariaLabel} selected` : 'Selected'}
            onRemove={locked ? undefined : handleRemove}
            className="contents"
          >
            <TagGroupList items={selected} className="flex flex-wrap items-center gap-1.5">
              {(item) => <Tag id={item.id}>{item.label}</Tag>}
            </TagGroupList>
          </TagGroup>
        }
        <ChevronDownIcon
          size={14}
          aria-hidden
          className={cn(
            'text-fg-muted absolute top-1/2 right-3 -translate-y-1/2 transition-transform duration-200',
            isOpen && 'rotate-180',
          )}
        />
      </div>

      <PopoverContent
        triggerRef={triggerRef}
        isOpen={isOpen}
        onOpenChange={setIsOpen}
        placement="bottom start"
        className={cn(
          'bg-bg-elevated border-border min-w-[var(--trigger-width)] overflow-hidden rounded-2xl border shadow-xl',
          'data-[entering]:animate-in data-[entering]:fade-in-0 data-[entering]:zoom-in-95 data-[entering]:duration-150',
          'data-[exiting]:animate-out data-[exiting]:fade-out-0 data-[exiting]:zoom-out-95 data-[exiting]:duration-100',
        )}
      >
        <PopoverDialog className="p-0 outline-none">
          {options.length === 0 ?
            <div className="text-fg-muted px-4 py-3 text-sm">{emptyText}</div>
          : <>
              <div className="border-border text-fg-muted flex items-center justify-between border-b px-3 py-2 text-xs">
                <span>
                  {selected.length} selected of {options.length}
                </span>
                {!isEmpty && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onPress={() => onChange([])}
                    className="text-fg-muted !h-6 !px-2 text-xs"
                  >
                    Clear
                  </Button>
                )}
              </div>
              <ListBox
                aria-label={ariaLabel}
                selectionMode="multiple"
                selectedKeys={new Set(value)}
                onSelectionChange={handleSelect}
                className="max-h-[260px] overflow-auto p-1.5 outline-none"
              >
                {options.map((option) => (
                  <ListBoxItem
                    key={option.id}
                    id={option.id}
                    textValue={option.label}
                    className={cn(
                      'flex cursor-pointer items-center justify-between gap-3 rounded-xl px-3 py-2 text-sm transition-colors outline-none',
                      'data-[hovered]:bg-default/50 data-[focused]:bg-default/60',
                      'data-[selected]:text-primary data-[selected]:bg-primary/10 data-[selected]:font-medium',
                    )}
                  >
                    {({ isSelected }) => (
                      <>
                        <span>{option.label}</span>
                        {isSelected ?
                          <CheckIcon size={14} aria-hidden className="text-primary shrink-0" />
                        : null}
                      </>
                    )}
                  </ListBoxItem>
                ))}
              </ListBox>
            </>
          }
        </PopoverDialog>
      </PopoverContent>
    </>
  );
};

export default MultiSelect;
