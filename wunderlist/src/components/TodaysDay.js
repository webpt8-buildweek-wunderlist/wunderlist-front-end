import React from 'react';
import Clock from 'react-live-clock';
import styled from "styled-components";

export default function TodaysDay() {

  const WrapperDiv = styled.div`
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        font-size: 18px;
        padding: 20px;
    `;

  var tempDate = new Date();
  // var tempTime = new Date();
  var date = (tempDate.getMonth()+1) + '-' + tempDate.getDate() + '-' + tempDate.getFullYear();
  // var time = tempDate.getHours()+':'+ tempDate.getMinutes()+':'+ tempDate.getSeconds();
  const currDate = date;
  // const currTime = time;
  return (
    <WrapperDiv>
      <p>{currDate}</p>
      <p><Clock format={'HH:mm:ss'} ticking={true} /></p>
      {/* <p><Clock format={'HH:mm:ss'} ticking={true} timezone={'US/Central'} /></p> */}
    </WrapperDiv>
  );
}
