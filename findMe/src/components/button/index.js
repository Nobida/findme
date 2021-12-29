
import React from 'react';
import { Wrapper,
HospitalButtonCenter,
HospitalButton
 } from './style'


class Banner extends React.Component {

  constructor(props) {
    super(props);
  }



  render() {
    return (
        <Wrapper>
          <HospitalButtonCenter>
            <HospitalButton>
            無痛分娩
            が予約できるか一括確認 
            <div>（無料・最短即日回答）</div>
            </HospitalButton>
          </HospitalButtonCenter>
          
        </Wrapper>

    );
  }
}
export default Banner;