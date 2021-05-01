import React, { useEffect } from 'react'
const $ = require('jquery');


const Footer = () => {

    useEffect(() => {

    }, [])

    // render userlocaldatetime component to header
    if (document.getElementById("current-date")) {
        render(<UserLocalDateTime />, document.getElementById("current-date"));
    }
    // create webticker instance on page load
    if (document.getElementById("ticker")) {
        $("#webTicker").webTicker({
            duplicate: true,
            rssfrequency: 0,
            startEmpty: false,
            hoverpause: false,
            speed: 20,
            height: "50px",
        });
    }

    // watch for window resize

    if (document.getElementById("ticker")) {
        $(window).resize(() => {
            $("#webTicker").webTicker("stop");
            clearTimeout(window.resizedFinished);
            window.resizedFinished = setTimeout(() => {
                $("#webTicker").webTicker("cont");
            }, 250);
        });
    }

    return (
        <div>
            <div id="ticker">
                <ul id="webTicker">
                    <li>Publishing for the New Age</li>
                </ul>
            </div>
        </div>
    )
}

export default Footer;