import { forwardRef } from 'react';

import { type IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons/faArrowLeft';
import { faCheck } from '@fortawesome/free-solid-svg-icons/faCheck';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons/faChevronDown';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons/faChevronLeft';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons/faChevronRight';
import { faHeart } from '@fortawesome/free-solid-svg-icons/faHeart';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons/faMagnifyingGlass';
import { faMoon } from '@fortawesome/free-solid-svg-icons/faMoon';
import { faPlus } from '@fortawesome/free-solid-svg-icons/faPlus';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons/faRightFromBracket';
import { faSun } from '@fortawesome/free-solid-svg-icons/faSun';
import { faTrash } from '@fortawesome/free-solid-svg-icons/faTrash';
import { faXmark } from '@fortawesome/free-solid-svg-icons/faXmark';

import { Icon, type IconProps } from './Icon';

type GlyphProps = Omit<IconProps, 'viewBox' | 'path'>;

const fromFa = (def: IconDefinition) => {
  const [width, height, , , raw] = def.icon;
  const path = Array.isArray(raw) ? raw.join(' ') : raw;
  const viewBox = `0 0 ${width} ${height}`;
  return forwardRef<SVGSVGElement, GlyphProps>(function Glyph(props, ref) {
    return <Icon ref={ref} viewBox={viewBox} path={path} {...props} />;
  });
};

export const ArrowLeftIcon = fromFa(faArrowLeft);
export const CheckIcon = fromFa(faCheck);
export const ChevronDownIcon = fromFa(faChevronDown);
export const ChevronLeftIcon = fromFa(faChevronLeft);
export const ChevronRightIcon = fromFa(faChevronRight);
export const HeartIcon = fromFa(faHeart);
export const MagnifyingGlassIcon = fromFa(faMagnifyingGlass);
export const MoonIcon = fromFa(faMoon);
export const PlusIcon = fromFa(faPlus);
export const SignOutIcon = fromFa(faRightFromBracket);
export const SunIcon = fromFa(faSun);
export const TrashIcon = fromFa(faTrash);
export const XMarkIcon = fromFa(faXmark);
