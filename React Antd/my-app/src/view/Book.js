import React from 'react'
import Photos from '../components/Photos/Photos'
import Nav from "../components/Nav/"

export default class Book extends React.Component{
    render(){
        return(
            <div>
                <Nav />
                <Photos />
            </div>
        )
    }
}