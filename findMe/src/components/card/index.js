
import React from 'react';
import { Wrapper,
HospitalList,
HospitalDoctor,
HospitalDoctorProfile,
HospitalAddress,
HospitalDoctorAddress,
HospitalIconBarFirst,
HospitalDoctorLower,
HospitalInfoGroup,
HospitalHospitalInfo,
HospitalIntroduction,
HospitalListDoctor,
HospitalDoctorProf,
HospitalDoctorProfile2,
HospitalStatusLetter,
HospitalAnnotation,
HospitalDoctorInfo,
 } from './style'



class Card extends React.Component {

  constructor(props) {
    super(props);
  }



  render() {
    return (
        <Wrapper>
         <HospitalList>
           <HospitalDoctor>
           <HospitalDoctorProfile>
             <div className="hospital_doctor_hospital" style={{lineHeight: "120%"}}>
               <div style={{fontSize: "16px",fontWeight: "700"}}>聖路加国際病院</div>
               <HospitalAddress>東京都中央区明石町9-1 st</HospitalAddress>
             </div>
             <img src="https://spec-doc-public-assets-dev.findme.life/avatar/591a2975ba139e37271de303ad8dd14ed7da19ed893e836424899fb4f7aeba6c.png" alt="hospital img"/>
             <HospitalDoctorAddress>
               <div style={{color: '#fff',textAlign: 'center', fontSize: '9px'}}>東京都</div>
              </HospitalDoctorAddress>

            </HospitalDoctorProfile>
            <HospitalIconBarFirst>
              
              無痛分娩
              が可能
            </HospitalIconBarFirst>
            <HospitalDoctorLower>
              <HospitalInfoGroup>
                <HospitalHospitalInfo>
                  <div>年間分娩数 </div>
                  <div style={{fontSize:'20px'}}>100</div>
                  <span style={{fontWeight: '400'}}>期間 : 2021/10/01~2021/12/31</span>

                </HospitalHospitalInfo>
                <HospitalHospitalInfo>
                  <div>入院個室数  </div>
                  <div style={{fontSize:'20px'}}>319</div>
                  <span style={{fontWeight: '400'}}>33,000~50,000円 / 日</span>

                </HospitalHospitalInfo>
                
              </HospitalInfoGroup>
              <HospitalIntroduction>通常分娩の費用</HospitalIntroduction>
              <span>30,000 〜 50,000円</span>
              <HospitalIntroduction>無痛分娩の費用（合計金額）</HospitalIntroduction>
              <span>100,000 〜 150,000円</span>
              <HospitalIntroduction>医師紹介（一部紹介）</HospitalIntroduction>
              <HospitalListDoctor>
                <HospitalDoctorProf>
                  <img src="https://spec-doc-public-assets-dev.findme.life/avatar/be8d6e0ac991b47559c16124891f783ba9a7e7b3aabe69503004cd2a35590beb.jpg" alt="hospital img"/>
                  <HospitalDoctorProfile2>
                    <HospitalDoctorInfo>
                      <p >女性総合診療部 医長</p>
                      <p className="hospital_doctor_name" style={{fontWeight: "700"}}>樋田　一英</p>
                    </HospitalDoctorInfo>
                  </HospitalDoctorProfile2>
                </HospitalDoctorProf>
                <HospitalDoctorProf>
                  <img src="https://spec-doc-public-assets-dev.findme.life/avatar/0c9b0f3baf0b41271e8254044a5b3ed9b172148c13f869d201ec7c241932b428.jpg" alt="hospital img"/>
                  <HospitalDoctorProfile2>
                    <HospitalDoctorInfo>
                      <p >女性総合診療部 医長</p>
                      <p className="hospital_doctor_name" style={{fontWeight: "700"}}>塩田　恭子</p>
                    </HospitalDoctorInfo>
                  </HospitalDoctorProfile2>
                </HospitalDoctorProf>
                <HospitalDoctorProf>
                  <img src="https://spec-doc-public-assets-dev.findme.life/avatar/39e124227301fbe846ee6eb0bbbcf25826be49b3cb245bf6aaf7554c4017692d.jpg" alt="hospital img"/>
                  <HospitalDoctorProfile2>
                    <HospitalDoctorInfo>
                      <p >女性総合診療部 副医長</p>
                      <p className="hospital_doctor_name" style={{fontWeight: "700"}}>齊藤　理恵</p>
                    </HospitalDoctorInfo>
                  </HospitalDoctorProfile2>
                </HospitalDoctorProf>
                

              </HospitalListDoctor>
            </HospitalDoctorLower>
           </HospitalDoctor>
           <HospitalDoctor>
           <HospitalDoctorProfile>
             <div className="hospital_doctor_hospital" style={{lineHeight: "120%"}}>
               <div style={{fontSize: "16px",fontWeight: "700"}}>テスト ホスピタル</div>
             </div>
             <img src="https://spec-doc-public-assets-dev.findme.life/avatar/hospital_sample.png" alt="hospital img"/>
             <HospitalDoctorAddress>
               <div style={{color: '#fff',textAlign: 'center', fontSize: '9px'}}>東京都</div>
              </HospitalDoctorAddress>

            </HospitalDoctorProfile>
            <HospitalIconBarFirst>
              
              無痛分娩
              が可能
            </HospitalIconBarFirst>
            <HospitalDoctorLower>
              <HospitalInfoGroup>
                <HospitalHospitalInfo>
                  <div>年間分娩数 </div>
                  <div style={{fontSize:'20px'}}>200</div>
                  <span style={{fontWeight: '400'}}>期間 : 2021/01/01~2021/12/31</span>

                </HospitalHospitalInfo>
                <HospitalHospitalInfo>
                  <div>入院個室数  </div>
                  <div style={{fontSize:'20px'}}>30</div>
                  <span style={{fontWeight: '400'}}>15,000~30,000円 / 日</span>

                </HospitalHospitalInfo>
                
              </HospitalInfoGroup>
              <HospitalIntroduction>通常分娩の費用</HospitalIntroduction>
              <span>15,000 〜 30,000円</span>
              <HospitalIntroduction>無痛分娩の費用（合計金額）</HospitalIntroduction>
              <span>50,000 〜 100,000円</span>
              <HospitalIntroduction>医師紹介（一部紹介）</HospitalIntroduction>
              <HospitalListDoctor>
                <HospitalDoctorProf>
                  <img src="https://spec-doc-public-assets-dev.findme.life/avatar/6bac4c1956e4b6005d57aa4c3724f21bf4c5dfe00fad2209849eb1cdc001e0a9.jpeg" alt="hospital img"/>
                  <HospitalDoctorProfile2>
                    <HospitalDoctorInfo>
                      <p>にんじん科 飼育係</p>
                      <p className="hospital_doctor_name" style={{fontWeight: "700"}}>rabbit</p>
                    </HospitalDoctorInfo>
                  </HospitalDoctorProfile2>
                </HospitalDoctorProf>
                <HospitalDoctorProf>
                  <img src="https://spec-doc-public-assets-dev.findme.life/avatar/3b96d9f07cd544b92d0c7ac6e0092c46554dea1a9f65b6f07a490d58e94da7ed.jpeg" alt="hospital img"/>
                  <HospitalDoctorProfile2>
                    <HospitalDoctorInfo>
                      <p>犬科 柴犬</p>
                      <p className="hospital_doctor_name" style={{fontWeight: "700"}}>dog</p>
                    </HospitalDoctorInfo>
                  </HospitalDoctorProfile2>
                </HospitalDoctorProf>
                <HospitalDoctorProf>
                  <img src="https://spec-doc-public-assets-dev.findme.life/avatar/905448732e0814f8cc4d63869903a8e85fec7741eadf8a3d440f1f8f1fce4303.jpeg" alt="hospital img"/>
                  <HospitalDoctorProfile2>
                    <HospitalDoctorInfo>
                      <p>鳥類 飛べない鳥</p>
                      <p className="hospital_doctor_name" style={{fontWeight: "700"}}>penguin</p>
                    </HospitalDoctorInfo>
                  </HospitalDoctorProfile2>
                </HospitalDoctorProf>
                

              </HospitalListDoctor>
            </HospitalDoctorLower> 




           </HospitalDoctor>
           <HospitalDoctor style={{height:"590px"}}>
           <HospitalDoctorProfile>
             <div className="hospital_doctor_hospital" style={{lineHeight: "120%"}}>
               <div style={{fontSize: "16px",fontWeight: "700"}}>国立大学法人東京医科歯科大学医学部附属病院</div>
               <HospitalAddress>東京都文京区湯島１丁目５−４５</HospitalAddress>
             </div>
             <img src="https://spec-doc-public-assets-dev.findme.life/avatar/eb7f12aef309126bc0e8cb58a96131d5ceeaf55d36da46bd7ca17b3d7dfcb5b7.png" alt="hospital img"/>
             <HospitalDoctorAddress>
               <div style={{color: '#fff',textAlign: 'center', fontSize: '9px'}}>東京都</div>
              </HospitalDoctorAddress>

            </HospitalDoctorProfile>
            <HospitalIconBarFirst>
              
              無痛分娩
              が可能
            </HospitalIconBarFirst>
            <HospitalDoctorLower>
              <HospitalInfoGroup>
                <HospitalHospitalInfo>
                  <div>年間分娩数 </div>
                  <div style={{fontSize:'20px'}}>-</div>


                </HospitalHospitalInfo>
                <HospitalHospitalInfo>
                  <div>入院個室数  </div>
                  <div style={{fontSize:'20px'}}>-</div>


                </HospitalHospitalInfo>
                
              </HospitalInfoGroup>
              <HospitalIntroduction>通常分娩の費用</HospitalIntroduction>
              <HospitalIntroduction>無痛分娩の費用（合計金額）</HospitalIntroduction>

              <HospitalStatusLetter>※当病院は現在依頼可能か事務局にて確認の上、対応します。</HospitalStatusLetter>
            </HospitalDoctorLower>

           </HospitalDoctor>
         </HospitalList>
         <HospitalAnnotation>
           ※1 日本がん治療認定医療機構「認定医名簿」2021/10
           <br/>
           ※2 厚生労働省「令和元年度DPC導入の影響評価に関する調査」より弊社作成

         </HospitalAnnotation>

        </Wrapper>

    );
  }
}
export default Card;