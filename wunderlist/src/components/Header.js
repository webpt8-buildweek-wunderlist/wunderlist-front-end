import React, {useState, useEffect} from 'react';
import styled from "styled-components";
import axios from "axios";
import TodaysDay from "./TodaysDay";

export default function Header (){

    const WrapperDiv = styled.div`
        width: 100%;
        height: 150px;
        // background: MidnightBlue;
        background-color: #282c34;
        color: Lavender;
        padding-bottom: 10px;
        font-size: 18px;
    `;

    const WrapperDiv1 = styled.div`
        display: flex;
        flex-direction: row-reverse;
        margin: auto;
    `;

    const [quote, setQuote] = useState([]);

    useEffect(() => {
        axios
            // .get("http://quotes.rest/qod.json?category=inspire")
            .get("https://api.quotable.io/random")
            .then(res =>{
                // setQuote(res.data.contents.quotes)
                setQuote(res.data)
                console.log (res);
            })
            .catch (err => console.log ("Try to fix your code"))
    }, []);

    return(
        <WrapperDiv>
            <h2>Welcome to Wunderlist</h2>
            <WrapperDiv1>
                <TodaysDay />
                <div>
                    <p>{quote.content} </p>
                    <p>{quote.author}</p>
                </div>
            </WrapperDiv1>
        </WrapperDiv>
    )
}