
import React from 'react';
import { Wrapper,
FooterWrapper
 } from './style'


class Footer extends React.Component {

  constructor(props) {
    super(props);
  }


  render() {
    return (
        <Wrapper>
          <FooterWrapper>
            <div>
              <a href="https://www.reasonwhy.jp/" target="_blank" rel="noreferrer">運営会社</a>
              <span> | </span>
              <a href="https://www.reasonwhy.jp/privacy-policy/" target="_blank" rel="noreferrer">プライバシーポリシー</a>
              <span> | </span>
              <a href="/policy" target="_blank" rel="noreferrer">利用規約</a>
              <span> | </span>
              <a href="/law" target="_blank" rel="noreferrer">情報の取り扱い</a>
              <span> | </span><a href="https://www.reasonwhy.jp/inquiry/" target="_blank" rel="noreferrer">お問い合わせ先</a>
            </div>
            <div>© ReasonWhy Inc. All Rights Reserved.</div>
           </FooterWrapper>
        </Wrapper>

    );
  }
}
export default Footer;