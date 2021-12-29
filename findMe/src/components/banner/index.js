
import React from 'react';
import { Wrapper } from './style'


class Banner extends React.Component {

  constructor(props) {
    super(props);
  }



  render() {
    return (
        <Wrapper>
          <img src="https://specialist-dev.findme.life/image/ipad_header.png" alt="" />
        </Wrapper>

    );
  }
}
export default Banner;