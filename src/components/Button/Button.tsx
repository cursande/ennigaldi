import * as React from 'react';
import './Button.css';
import classNames from 'classnames';

// https://bulma.io/documentation/elements/button/

interface Props {
  color?: string;
  size?: string;
  styles?: string;
  states?: string;
  onClick: (data: any) => void;
}

class Button extends React.Component<Props, object> {
  render() {
    const { color, size, styles, states, onClick } = this.props;

    const buttonClassName = classNames(
      color || '',
      size || '',
      styles || '',
      states || ''
    )

    return (
      <button className={buttonClassName} onClick={onClick}>
      </button>
    );
  }
}

export default Button;
