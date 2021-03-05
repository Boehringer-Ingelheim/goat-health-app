import { ReactElement, ReactNode } from 'react';

const hasProps = (jsx: ReactNode): jsx is ReactElement =>
  Object.prototype.hasOwnProperty.call(jsx, 'props');

export const innerSsml = (jsx: ReactNode): string => {
  // Empty
  if (jsx === null || typeof jsx === 'boolean' || typeof jsx === 'undefined') {
    return '';
  }

  // Numeric children.
  if (typeof jsx === 'number') {
    return `<s>${jsx.toString()}</s>`;
  }

  // String literals.
  if (typeof jsx === 'string') {
    return `<s>${jsx.replaceAll('<', '').replaceAll('>', '')}</s>`;
  }

  // Array of JSX.
  if (Array.isArray(jsx)) {
    return jsx.reduce(
      (previous: string, current: ReactNode): string =>
        `${previous}${innerSsml(current)}`,
      '',
    );
  }

  // Children prop.
  if (
    hasProps(jsx) &&
    Object.prototype.hasOwnProperty.call(jsx.props, 'children')
  ) {
    return innerSsml(jsx.props.children);
  }

  return '';
};
