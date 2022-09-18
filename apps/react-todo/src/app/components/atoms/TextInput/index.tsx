import { forwardRef } from 'react';
import * as Styled from './styles';

type TextInputProps = React.ComponentPropsWithoutRef<'input'>;

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  (props, ref) => {
    return (
      <Styled.TextInput
        autoFocus={true}
        placeholder="what's on your mind"
        ref={ref}
        {...props}
      />
    );
  }
);
