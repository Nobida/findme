import styled from 'styled-components';

export const Wrapper = styled.div`
    position: fixed;
    bottom: 50px;
    width: 100vw;
    height: 75px;
    background-color: #fff;
    text-align: center;
    display: -webkit-flex;
    display: -moz-box;
    display: flex;
    bottom: 0;


`;


export const HospitalButtonCenter = styled.div`
    text-align: center;
    margin: auto;
`;

export const HospitalButton = styled.button`
    font-weight: 600;
    display: inline-block;
    text-align: center;
    background: -webkit-gradient(linear,left top,left bottom,from(0),color-stop(16.15%,#c00c00),color-stop(83.85%,#ff5c00));
    background: -webkit-linear-gradient(0,#c00c00 16.15%,#ff5c00 83.85%);
    background: linear-gradient(0,#c00c00 16.15%,#ff5c00 83.85%);
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-box-shadow: inset 0 2px 0 rgb(255 255 255 / 25%);
    box-shadow: inset 0 2px 0 rgb(255 255 255 / 25%);
    border-radius: 10px;
    color: #fff;
    cursor: pointer;
    width: 340px;
    padding: 8px 0;
    word-break: keep-all;
    font-size: 20px;
    line-height: 22px;
    border: none;
}


`;



