import { React, Component } from "react";
import { useParams } from "react-router-dom";
import '../../App.css';
import Screen from '../../components/Screen'

function Media () {
    let { media } = useParams()

    return (
        <Screen param={media}></Screen>
    )
}
export default Media
