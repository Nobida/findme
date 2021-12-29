
import React from 'react';
import { HospitalHeadGroup, HospitalTitleLeft, HospitalMain, HospitalMainTitle, HospitalSmallTitle,

HospitalSubTitle, HospitalStepTitleWrap, HospitalStepTitle, HospitalStepGroup,

HospitalSteps, HospitalThirdTitle1,HospitalThirdTitle2, HospitalTitleRight, 


HospitalBrownBar, HospitalStepsTitle, HospitalStepsContent, HospitalPic, HospitalTitleGroup, HospitalStepsItem1, HospitalStepsItem2,
HospitalFaqTitle,
HospitalReq,
HospitalFirstDetail,
HospitalSubContent,
HospitalSecondDetail,
HospitalThirdDetail,
Summary,
Summary2,
HospitalHospitalNum
 } from './style'


class Content extends React.Component {

  constructor(props) {
    super(props);
    this.state = {             
      show: false,
    };
  }

    handleDataRefresh() {
      const {show} = this.state
        if(show){
           this.setState({'show':false})
        }else{
            this.setState({'show':true})

        }   
    }


  render() {
    return (
        <HospitalHeadGroup>
          <HospitalTitleGroup>
                  <HospitalTitleLeft>
                    <HospitalPic>
                    <img className='pic' src="https://specialist-dev.findme.life/image/bunben/ninpu.png" alt=''/>
                   </HospitalPic>
                   
                   <div style={{width:'100%'}}>
                        <HospitalMainTitle>
                            <div>
                            痛くない
                            <br/>
                            <div style={{fontSize:'28px'}}>出産がしたい</div>
                          </div> 
                        </HospitalMainTitle>
                        <HospitalSubTitle>
                        <HospitalThirdTitle1>無痛分娩が予約できるか、</HospitalThirdTitle1>
                        <HospitalThirdTitle2>最短即日回答</HospitalThirdTitle2>
                        </HospitalSubTitle>
                   </div> 


                   <HospitalStepTitleWrap>
                         <HospitalStepTitle>
                     
                         <HospitalStepsItem1>最短即日回答</HospitalStepsItem1>
                         <HospitalStepsItem2>依頼無料</HospitalStepsItem2>
                         </HospitalStepTitle>
                         <HospitalStepGroup>
                           <HospitalSteps>
                             
                             <HospitalStepsTitle>STEP1</HospitalStepsTitle>
                             <HospitalStepsContent>無料一括で<span style={{color:'#cd0e02'}}>無痛分娩</span>の予約確認</HospitalStepsContent>

                           </HospitalSteps>
                           <HospitalSteps>
                             
                             <HospitalStepsTitle>STEP2</HospitalStepsTitle>
                             <HospitalStepsContent>返信の中から自分で選べる</HospitalStepsContent>

                           </HospitalSteps>

                         </HospitalStepGroup>
                   </HospitalStepTitleWrap>
              
                   </HospitalTitleLeft>
                   <HospitalBrownBar></HospitalBrownBar>
                <HospitalTitleRight>
                    <HospitalFaqTitle>
                      こんな方には、 
                      <br/>
                      <span style={{fontSize:'34px',color: '#a77007', lineHeight: '160%'}}>無痛分娩</span>
                       という選択肢も



                              </HospitalFaqTitle>
                              <img src="https://specialist-dev.findme.life/image/seimitsukensa/yellowbar-short.png" alt="application logo"/>
                              <HospitalReq>
                                <img src="https://specialist-dev.findme.life/image/bunben/check.png" alt="check logo"/>
                                <div>お産の痛みを和らげたい</div>
                              </HospitalReq>
                              <HospitalReq>
                                <img src="https://specialist-dev.findme.life/image/bunben/check.png" alt="check logo"/>
                                <div>お産の疲労を軽くしたい</div>
                              </HospitalReq>
                              <HospitalReq>
                                <img src="https://specialist-dev.findme.life/image/bunben/check.png" alt="check logo"/>
                                <div>日程を決めてお産したい</div>
                    </HospitalReq>
              </HospitalTitleRight>
          </HospitalTitleGroup>
          <div style={{width: '100%'}}>
            <div style={{width: '100%',textAlign: 'center', fontWeight: '700', fontSize: '18px'}}>
              {this.state.show?(
              <Summary onClick={this.handleDataRefresh.bind(this)}>
                
                「無痛分娩」とは？
              </Summary>

                ):(<Summary2 onClick={this.handleDataRefresh.bind(this)}>
                
                「無痛分娩」とは？
              </Summary2>)
              }


            </div>
            {this.state.show?

              (
                <div>
                  
            <HospitalFirstDetail>
              <p style={{overflowWrap: 'break-word',wordBreak: 'keep-all'}}>無痛分娩ってどういう分娩方法なの？</p>
              <HospitalSubContent>
                    <div className="hospital_sub_content">
                      無痛分娩の多くは硬膜外麻酔を使用して行われ、腰や背中からチューブを通して麻酔薬を注射して行う分娩方法です。
                     </div>
                     <br/>

              </HospitalSubContent>
            </HospitalFirstDetail>
            <HospitalSecondDetail>
              <p style={{overflowWrap: 'break-word',wordBreak: 'keep-all'}}>無痛分娩のメリットは？</p>
              <HospitalSubContent style={{lineHeight: '30px'}}>
                    <div className="hospital_sub_content__3C44t">“心臓や肺の調子が悪い妊婦さんの、呼吸の負担を和らげ、体の負担を軽くします。血圧が高めの妊婦さんの、血圧の上昇を抑えることができます。痛みを和らげることができ、産後の体力が温存できたと感じる人が多いと言われています。 ”</div>
                     <br/>
                     <div className="hospital_index__1InV9" style={{lineHeight:"normal", textAlign: "left",
                        fontSize: "8px",fontWeight: "400",letterSpacing: "-.8px"}}>ソース：厚生労働省 「無痛分娩を考える妊婦さんとご家族のみなさまへ」https://www.mhlw.go.jp/file/06-Seisakujouhou-10800000-Iseikyoku/0000211831.pdf</div>
              </HospitalSubContent>
            </HospitalSecondDetail>
            <HospitalThirdDetail>
            <p style={{overflowWrap: 'break-word',wordBreak: 'keep-all'}}>どのくらいの人が、無痛分娩で出産しているの？</p>
              <HospitalSubContent>
                    <div className="hospital_sub_content__3C44t">“年間約5万人以上の妊婦さんが硬膜外無痛分娩を行なっていると概算されています。“</div>
                     <br/>
                     <div className="hospital_index__1InV9" style={{lineHeight:"normal", textAlign: "left",
                        fontSize: "8px",fontWeight: "400",letterSpacing: "-.8px"}}>ソース：（一社）日本産科麻酔学会 https://www.jsoap.com/general/painless/q19</div>
              </HospitalSubContent>
            </HospitalThirdDetail>
            <HospitalSecondDetail>
              <p style={{overflowWrap: 'break-word',wordBreak: 'keep-all'}}>無痛分娩のよくあるリスクって？</p>
              <HospitalSubContent style={{lineHeight: '30px'}}>
                    <div className="hospital_sub_content__3C44t">“赤ちゃんが産まれるまでの時間が長くなり、赤ちゃんが産まれる際、吸引や鉗子などの 器械を使う頻度が高くなります。また、陣痛を促す薬を使う頻度が高くなります。”</div>
                     <br/>
                     <div className="hospital_index__1InV9" style={{lineHeight:"normal", textAlign: "left",
                        fontSize: "8px",fontWeight: "400",letterSpacing: "-.8px"}}>ソース：厚生労働省 「無痛分娩を考える妊婦さんとご家族のみなさまへ」https://www.mhlw.go.jp/file/06-Seisakujouhou-10800000-Iseikyoku/0000211831.pdf</div>
              </HospitalSubContent>
            </HospitalSecondDetail>
            <HospitalFirstDetail>
              <p style={{overflowWrap: 'break-word',wordBreak: 'keep-all'}}>無痛分娩はどこの病院でできるの？</p>
              <HospitalSubContent>
                    <div className="hospital_sub_content">
                      限られた病院でしか実施しておらず、無痛分娩に関わるリスクに対応するための設備や人員を整えた病院でしか無痛分娩を受けることはできません。
                     </div>
                     <br/>

              </HospitalSubContent>
            </HospitalFirstDetail>






                </div>
                )





              :null}


          </div>
          <HospitalHospitalNum>
            
            
            <span style={{fontSize: "18px", fontWeight: "600"}}>東京都  </span>で<span style={{fontSize: "18px", fontWeight: "600"}}>  無痛分娩  </span>可能な病院
          </HospitalHospitalNum>

 
            





          
          
        </HospitalHeadGroup>
    );
  }
}
export default Content;