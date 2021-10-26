import React from 'react'
import Constructor from '../components/Construction/construction'
import Nav from "../components/Nav/"
export default class Announcement extends React.Component{
    render(){
        return(
            <div>
                <Nav />
                <Constructor />
            </div>
        )
    }
}