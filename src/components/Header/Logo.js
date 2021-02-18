import React, {useEffect} from 'react'

const Logo = () => {
    useEffect(() => {
        fetch('/wp-json/')
            .then( response => response.json() )
            .then( data => {
                console.log(data)
            } )
    }, [])
    return (
        <div>
            <h1>paaaal</h1>
        </div>
    )
}

export default Logo
