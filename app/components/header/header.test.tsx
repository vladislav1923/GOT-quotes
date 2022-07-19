import { render } from '@testing-library/react';
import Header from './Header';
import styles from './header.module.css';
import { BackgroundColorsEnum } from '../../enums/background-colors.enum';

describe('Header', () => {
  it('should set black color to texts if bg is white', () => {
    const { container } = render(<Header bgColor={BackgroundColorsEnum.White} />);

    const titleElement = container.getElementsByClassName(styles.title)[0];
    const descElement = container.getElementsByClassName(styles.desc)[0];

    expect(titleElement).toHaveClass(styles.blackFontColor);
    expect(descElement).toHaveClass(styles.blackFontColor);
  });

  it('should set white color to texts if bg is black', () => {
    const { container } = render(<Header bgColor={BackgroundColorsEnum.Black} />);

    const titleElement = container.getElementsByClassName(styles.title)[0];
    const descElement = container.getElementsByClassName(styles.desc)[0];

    expect(titleElement).toHaveClass(styles.whiteFontColor);
    expect(descElement).toHaveClass(styles.whiteFontColor);
  });
});
