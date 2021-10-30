import React from 'react'
import Andhrabank from './Andhrabank'
import Corperationbank from './Corperationbank'

export default function Unionbank() {
    let data={
        firstname:'harshith',
        lastname:'syam'
    }
    return (
        <div>
            <h1>Unionbank</h1>
            <Andhrabank info={data}/>
            <Corperationbank info={data}/>

        </div>
    )
}
