import React, { useEffect, useRef } from 'react'
const $ = require('jquery');


const Footer = () => {

    const footerRef = useRef();

    useEffect(() => {
        // create webticker instance on page load
        if (footerRef.current) {
            $("#webTicker").webTicker({
                duplicate: true,
                rssfrequency: 0,
                startEmpty: false,
                hoverpause: false,
                speed: 20,
                height: "50px",
            });
        }

    }, [])

    const randColor = () => {
        let colorArr = ['#FF0000', '#00FF00', '#0000FF']
        let rand = Math.floor(Math.random() * colorArr.length);
        return colorArr[rand]
    }

    let style = {
        backgroundColor: randColor()
    }


    // watch for window resize

    if (footerRef.current) {
        $(window).resize(() => {
            $("#webTicker").webTicker("stop");
            clearTimeout(window.resizedFinished);
            window.resizedFinished = setTimeout(() => {
                $("#webTicker").webTicker("cont");
            }, 250);
        });
    }

    return (
        <footer ref={footerRef} style={style} id="footer">
            <div id="ticker">
                <ul id="webTicker">
                    <li>If to be Unbound is to be:released, liberated, unfastened::to live an Unbound life is to
                            live:in radical togetherness</li>
                    <li>If to be Unbound is to be:released, liberated, unfastened::to live an Unbound life is to
                            live:in radical togetherness</li>
                    <li>If to be Unbound is to be:released, liberated, unfastened::to live an Unbound life is to
                            live:in radical togetherness</li>
                    <li>If to be Unbound is to be:released, liberated, unfastened::to live an Unbound life is to
                            live:in radical togetherness</li>
                    <li>If to be Unbound is to be:released, liberated, unfastened::to live an Unbound life is to
                            live:in radical togetherness</li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer;