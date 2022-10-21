//rcfc

import React, { PureComponent } from "react";

type Props = {};

type State = {
  numberState: number;
};

class BTNumber extends PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      numberState: 0,
    };
  }

  handleClick = () => {
    this.setState({ numberState: this.state.numberState + 1 });
  };
  render() {
    return (
      <div>
        <p>BTNumber {this.state.numberState}</p>
        <button onClick={this.handleClick}>Button</button>
      </div>
    );
  }
}
export default BTNumber;
