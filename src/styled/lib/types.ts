import * as React from 'react';

export type ForwardRef<T, P> = React.ForwardRefExoticComponent<React.PropsWithoutRef<P> & React.RefAttributes<T>>;
