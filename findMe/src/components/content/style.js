import styled from 'styled-components';


export const HospitalHeadGroup = styled.div`
    width: 100vw;
    display: -webkit-flex;
    display: -moz-box;
    display: flex;
    -webkit-justify-content: center;
    -moz-box-pack: center;
    justify-content: center;
    -webkit-align-items: center;
    -moz-box-align: center;
    align-items: center;
    -webkit-flex-direction: column;
    -moz-box-orient: vertical;
    -moz-box-direction: normal;
    flex-direction: column;
    color: #333;

`


export const HospitalTitleGroup = styled.div`
    max-width: 865px;
    width: 100%;
    display: -webkit-flex;
    display: -moz-box;
    display: flex;
    -webkit-justify-content: center;
    -moz-box-pack: center;
    justify-content: center;
    font-family: Roboto,Hiragino Kaku Gothic ProN W6,sans-serif;

@media only screen and (min-width: 768px) and (max-width: 1279px) {

    -webkit-flex-direction: column;
    -moz-box-orient: vertical;
    -moz-box-direction: normal;
    flex-direction: column;
    -webkit-align-items: center;
    -moz-box-align: center;
    align-items: center;
}


`;


export const HospitalTitleLeft = styled.div`
    width: 375px;
    position: relative;
    padding-bottom: 16px;
`;

export const HospitalPic = styled.div`

    img {
        width: 35%;
        position: absolute;
        top: 7px;
        left: 8px;
    }

`;



export const HospitalMainTitle = styled.div`
    padding: 12px 23px 5px 140px;
    background-color: #008b94;
    color: #fff;
    height: auto;
    font-size: 38px;
    font-weight: 700;
    line-height: 110%;
    -webkit-align-items: center;
    -moz-box-align: center;
    align-items: center;
    font-family: Georgia,Hiragino Kaku Gothic ProN W6,sans-serif;
`;

export const HospitalSmallTitle = styled.div`
    font-size: 28px;
`;

export const HospitalSubTitle = styled.div`
    font-weight: 700;
    color: #000;
    font-size: 20px;
    width: 250px;
    text-shadow: 0 3px 3px rgb(0 0 0 / 20%);
    padding: 10px 0 18px 24px;
    line-height: 135%;
    position: relative;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    left: 115px;
    bottom: 3px;
`;

export const HospitalThirdTitle1 = styled.div`
    font-size: 18px;
    line-height: 100%;
    margin: 7px 0 10px;


`

export const HospitalThirdTitle2 = styled.div`
    font-size: 34px;
    color: red;
`;


export const HospitalStepTitleWrap = styled.div`
    display: -webkit-flex;
    display: -moz-box;
    -moz-box-orient: vertical;
    -moz-box-direction: normal;
    flex-direction: column;
    -webkit-justify-content: center;
    -moz-box-pack: center;
    justify-content: center;
    line-height: 22px;
    padding: 0 27px;
`;


export const HospitalStepTitle = styled.div`
    display: flex;
    max-width: 550px;
    font-weight: 700;
    width: 320px;
    text-align: center;
    -webkit-align-items: center;
    -moz-box-align: center;
    align-items: center;
    color: #fff;
    font-size: 16px;
    height: 20px;
    z-index: 10;
`;




export const HospitalStepsItem1 = styled.div`
    border-radius: 5px 0 0 0;
    width: 50%;
    background-color: #3b9fe4;

`
export const HospitalStepsItem2 = styled.div`
    border-radius: 5px 0 0 0;
    width: 50%;
    background-color: #d30133;

`

export const HospitalStepGroup = styled.div`
    width: 310px;
    text-align: center;
    max-width: 550px;
    font-weight: 700;
    padding: 10px 5px 5px;
    background-color: #e4f1ff;
    border-radius: 0 0 5px 5px;
    font-size: 16px;
    z-index: 10;

`

export const HospitalSteps = styled.div`
    display: flex;
    width: 100%;
    -webkit-align-items: center;
    -moz-box-align: center;
    align-items: center;
    margin-bottom: 10px;
`;

export const HospitalStepsTitle = styled.div`
    width: 24%;
    background-color: #005e87;
    border-radius: 5px 0 0 5px;
    color: #fff;
    height: 21px;
`;

export const HospitalStepsContent = styled.div`
    width: 76%;
    height: 20px;
    border-radius: 0 5px 5px 0;
    background-color: #fff;
    color: #000;
`;


export const HospitalBrownBar = styled.div`

@media only screen and (min-width: 768px) and (max-width: 1279px) {
    width: 100%;
    height: 40px;
    background: -webkit-gradient(linear,left top,left bottom,color-stop(15%,rgba(172,118,11,.69)),color-stop(40%,rgba(198,160,87,.71)),to(#fff));
    background: linear-gradient(
180deg,rgba(172,118,11,.69) 15%,rgba(198,160,87,.71) 40%,#fff);
    background: -webkit-linear-gradient(top,rgba(172,118,11,.69) 15%,rgba(198,160,87,.71) 40%,#fff);

}


`;


export const HospitalTitleRight = styled.div`
padding: 5px 0 7px 18px;
    font-size: 16px;
    width: 375px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    margin-left: 20px;
`;

export const HospitalFaqTitle = styled.div`
    font-weight: 700;
    font-size: 22px;
    line-height: 100%;
    position: relative;
    top: 20px;
    img {
        width: 99%;
        margin-bottom: 18px;
        margin-left: -15px;
        max-width: 345px;

    }
`;

export const HospitalReq = styled.div`
    display: flex;
    margin-bottom: 16px;
    font-weight: 700;
    font-size: 22px;
    color: #000;
    img {
        width: 25px;
        height: 25px;
        margin: auto 8px;

    }

`;

export const HospitalFirstDetail = styled.div`
    background-color: #b46f03;
    color: #fff;
    font-size: 18px;
    padding: 25px 0 20px;
    text-align: center;
    letter-spacing: 1px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    font-family: Roboto,Hiragino Kaku Gothic ProN W6,sans-serif;

    p {

        margin: auto;
        padding: 0 20px 20px;
        font-size: 18px;
    }

`;

export const HospitalSubContent = styled.div`
    margin: auto;
    line-height: 40px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    padding: 0 35px;
    text-align: left;
    @media only screen and (min-width: 1280px) {

        width: 670px;
    }
}

`
export const HospitalSecondDetail = styled.div`
    background-color: #fff;
    color: #000;
    font-size: 15px;
    padding: 25px 0 20px;
    text-align: center;
    letter-spacing: 1px;

    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    font-family: Roboto,Hiragino Kaku Gothic ProN W6,sans-serif;
    p {

        margin: auto;
        padding: 0 20px 20px;
        font-size: 18px;
    }

`;

export const HospitalThirdDetail = styled.div`
    background-color: #008b94;
    color: #fff;
    font-size: 18px;
    padding: 25px 0 20px;
    text-align: center;
    letter-spacing: 1px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    font-family: Roboto,Hiragino Kaku Gothic ProN W6,sans-serif;
    p {

        margin: auto;
        padding: 0 20px 20px;
        font-size: 18px;
    }

`;

export const Summary = styled.div`
    background-color: #b46f03;
    color: #fff;
    padding: 5px 0;
    margin-bottom: 3px;
    display: block;
    position: relative;

    ::before {


    content: "";
    display: block;
    width: 10px;
    height: 10px;
    border-top: 3px solid #fff;
    border-right: 3px solid #fff;
    -webkit-transform: rotate(
135deg);
    transform: rotate(
-45deg);
    position: absolute;
    right: 30%;
    top: 15px;
    

`;

export const Summary2 = styled.div`
    background-color: #b46f03;
    color: #fff;
    padding: 5px 0;
    margin-bottom: 3px;
    display: block;
    position: relative;

    ::before {


    content: "";
    display: block;
    width: 10px;
    height: 10px;
    border-top: 3px solid #fff;
    border-right: 3px solid #fff;
    -webkit-transform: rotate(
135deg);
    transform: rotate(
135deg);
    position: absolute;
    right: 30%;
    top: 10px;
    

`;


export const HospitalHospitalNum = styled.div`
    width: 100%;
    background-color: #008b94;
    text-align: center;
    color: #fff;
    font-size: 14px;
    line-height: 135%;
    font-weight: 600;
    padding: 10px 0 7px;

    ::before {
        content: "";
        position: absolute;
        left: 50%;
        width: 0;
        -webkit-transform: translate(-50%,20px);
        transform: translate(-50%,20px);
        border-top: 20px solid #008b94;
        border-right: 20px solid transparent;
        border-left: 20px solid transparent;


    }
`;





