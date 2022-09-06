import React, { SyntheticEvent } from 'react';
import styles from './button.module.scss';
import ButtonSizesEnum from '../../enums/button-sizes.enum';
import ButtonColorsEnum from '../../enums/button-colors.enum';

type Props = {
  children: React.ReactNode;
  size: ButtonSizesEnum;
  color: ButtonColorsEnum;
  onClick?: (e: SyntheticEvent) => void;
};

export default function Button({
  children, size, color, onClick,
}: Props) {
  const sizeClassName = size === ButtonSizesEnum.Medium ? styles.mediumSize : styles.largeSize;
  const colorClassName = color === ButtonColorsEnum.Fire ? styles.fireColor : styles.iceColor;

  const clickHandler = (e: SyntheticEvent) => {
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <button
      type="button"
      className={`${styles.button} ${sizeClassName} ${colorClassName}`}
      onClick={clickHandler}
    >
      {children}
    </button>
  );
}
