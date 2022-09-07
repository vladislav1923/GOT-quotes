import React, { ForwardedRef, SyntheticEvent } from 'react';
import styles from './button.module.scss';
import ButtonSizesEnum from '../../enums/button-sizes.enum';
import ButtonColorsEnum from '../../enums/button-colors.enum';

type Props = {
  isSubmit?: boolean;
  children: React.ReactNode;
  size: ButtonSizesEnum;
  color: ButtonColorsEnum;
  onClick?: (e: SyntheticEvent) => void;
};

const Button = React.forwardRef(({
  isSubmit, children, size, color, onClick,
}: Props, ref: ForwardedRef<any>) => {
  const sizeClassName = size === ButtonSizesEnum.Medium ? styles.mediumSize : styles.largeSize;
  const colorClassName = color === ButtonColorsEnum.Fire ? styles.fireColor : styles.iceColor;

  const clickHandler = (e: SyntheticEvent) => {
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <button
      ref={ref}
      type={isSubmit ? 'submit' : 'button'}
      className={`${styles.button} ${sizeClassName} ${colorClassName}`}
      onClick={clickHandler}
    >
      {children}
    </button>
  );
});

export default Button;
