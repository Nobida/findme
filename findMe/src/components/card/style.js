import styled from 'styled-components';

export const Wrapper = styled.div`
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
    width: 100vw;
    inset: 0;
    background-color: #e4e4e4;
    color: #333;
    padding-bottom: 60px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    font-family: SF Pro Text,SF Pro Icons,Helvetica,Arial,sans-serif;
`;

export const HospitalList = styled.div`
    width: 1060px;
    display: -webkit-flex;
    display: -moz-box;
    display: flex;
    -webkit-flex-wrap: wrap;
    flex-wrap: wrap;



    padding: 0;
    margin-top: 22px;

      @media only screen and (min-width: 768px) and (max-width: 1279px) {
            width: 800px;
            margin-top: 30px;
            display: -webkit-flex;
            display: -moz-box;
            display: flex;
            -webkit-flex-wrap: wrap;
            flex-wrap: wrap;

      }



`

export const HospitalDoctor = styled.div`

    border-radius: 8px 8px 8px 8px;
    display: block;
    width: 320px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    cursor: pointer;
    background-color: #fff;
    margin-bottom: 20px;
    padding: 20px 10px;
    box-sizing: border-box;
    margin: 0 30px 24px 0;


`


export const HospitalDoctorProfile = styled.div`

    display: -webkit-flex;
    display: -moz-box;
    display: flex;
    -webkit-justify-content: space-between;
    -moz-box-pack: justify;
    justify-content: space-between;
    width: 100%;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    position: relative;

    img {

            width: 100px;
            height: 100px;
            border-radius: 4px;
    }

`



export const HospitalAddress = styled.div`

    font-size: 11px;
    font-weight: 400;
    color: #828282;
    line-height: .9rem;
    margin-top: 5px;
    -webkit-flex-wrap: nowrap;
    flex-wrap: nowrap;

`

export const HospitalDoctorAddress = styled.div`

    width: 47px;
    height: 14px;
    background: #005e87;
    border-radius: 16px;
    position: absolute;
    right: 3px;
    top: 5px;

`

export const HospitalIconBarFirst = styled.div`

    height: 25px;
    width: 300px;
    border-radius: 5px;
    -webkit-filter: drop-shadow(0 4px 4px rgba(0,0,0,.25));
    filter: drop-shadow(0 4px 4px rgba(0,0,0,.25));
    color: #fff;
    text-align: center;
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    margin: 7px 0 21px;
    background-color: #d30133;

`


export const HospitalDoctorLower = styled.div`

    width: 100%;

`

export const HospitalInfoGroup = styled.div`

    display: flex;
    justify-items: center;
    -webkit-align-items: center;
    -moz-box-align: center;
    align-items: center;
    text-align: center;
    margin-top: 10px;

`

export const HospitalHospitalInfo = styled.div`

    font-weight: 700;
    font-size: 10px;
    width: 145px;
    margin-right: 10px;
    background-color: #f2f2f2;
    border-radius: 4px;
    text-align: center;
    height: 54px;
    padding: 4px 0;

    span {
        display: block;
    font-weight: lighter;
    font-size: 10px;
    -webkit-transform: scale(.8);
    transform: scale(.8);
    min-width: 181.5px;
    -webkit-transform-origin: left;
    transform-origin: left;

    }

`

export const HospitalIntroduction = styled.div`
    font-weight: 700;
    font-size: 14px;
    margin-bottom: 10px;
    margin-top: 12px;


`

export const HospitalListDoctor = styled.div`
display: -webkit-flex;
    display: -moz-box;
    display: flex;
    -webkit-align-items: flex-start;
    -moz-box-align: start;
    align-items: flex-start;
    -webkit-justify-content: flex-start;
    -moz-box-pack: start;
    justify-content: flex-start;
    margin-bottom: 10px;
}

`

export const HospitalDoctorProf = styled.div`


    -moz-box-sizing: border-box;
    box-sizing: border-box;
    margin-right: 8px;


    img {
            width: 95px;
    height: 95px;
    border-radius: 5px;
    }

`

export const HospitalDoctorProfile2 = styled.div`
    width: 95px;
    height: 50px;
    display: -webkit-flex;
    display: -moz-box;
    display: flex;
    -webkit-align-items: flex-end;
    -moz-box-align: end;
    align-items: flex-end;
    background-color: #f2f2f2;
    padding: 6px;
    border-radius: 4px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;

`


export const HospitalDoctorInfo = styled.div`
font-size: 10px;
    line-height: 130%;
    font-weight: 400;    
    
    p {
        margin: 0;

    }


`

export const HospitalStatusLetter = styled.div`
    font-size: 10px;
    line-height: 130%;
    font-weight: lighter;
    text-align: center;
    margin-top: 12px;

`

export const HospitalAnnotation = styled.div`
    font-size: 8px;
    font-weight: 400;
    color: #000;
    width: 320px;
    text-align: left;
    letter-spacing: -1px;

`




