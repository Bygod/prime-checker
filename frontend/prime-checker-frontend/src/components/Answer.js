import React from 'react'

function Answer(props) {
    if (props.value === '') return null;

    const divs = []
    for (const [index, value] of props.divisors.entries()) {
        divs.push(<li key={index}>{value}</li>)
    }

    const isprime = (props.prime) ? `${props.value} é primo` : `${props.value} não é primo`
    const cname = (props.prime) ? "prime" : "notprime"

    return (
        <div className="Answer Prime">
            <h2 className={cname}>{isprime}</h2>
            <ul> {divs} </ul>
        </div>
    )
}

export default Answer
