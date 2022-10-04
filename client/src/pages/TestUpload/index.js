import React, { Component } from 'react';
import axios from 'axios';

class Details extends Component {
    constructor(props) {
        super(props)

        localStorage.setItem("AccessToken", "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhbW9sIiwiaWF0IjoxNjU4ODMwMTIzOTI1fQ.31kSwDTNMeEt5rM_BR_gcdkT1JaES7QviePTa88u2Sw")

        this.headers = {
            headers: { "Authorization": localStorage.getItem("AccessToken") }
        }

        this.state = {
            file: null
        } 
    }

    onFileChange = event => {
        this.setState({ file: event.target.files[0] }); 
    }

    onFileUpload = () => {
        const formData = new FormData()

        formData.append("file", this.state.file)
       
        axios.post("api/details/upload", formData, this.headers).then((response)=>{
            alert(response.data)
        })
    }

    render () {
        return (
            <>
                <input type="file" onChange={this.onFileChange} /> 
                <button onClick={this.onFileUpload}> 
                    Upload! 
                </button> 
            </>
        )
    }
}
export default Details