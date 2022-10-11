import config from '../config/screen'
import React, { Component } from 'react'
import '../App.css'

class Screen extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            screens: [],
            param: props.param
        }
    }

    componentDidMount() {
        let self = this
        if (config[self.state.param] != null && config[self.state.param] !== undefined) {
            const data = config[self.state.param]
        
            let screenContainer = document.getElementById('screen-container')
            
            screenContainer.style.width = data.width + 'px'
            screenContainer.style.height = data.height + 'px'
        
            for (let i=0; i<data['object'].length; i++) {
                let div = document.createElement('div')
                div.style.width = data['object'][i]['width'] + 'px'
                div.style.height = data['object'][i]['height'] + 'px'
                div.style.left = data['object'][i]['x'] + 'px'
                div.style.top = data['object'][i]['y'] + 'px'
        
                if (data['object'][i]['trapezoid'] != null && data['object'][i]['trapezoid'] !== undefined) {
                    if (data['object'][i]['trapezoid'] === 'left') {
                        div.style.clipPath = 'polygon(' + (data['object'][i]['width'] - data['object'][i]['short']) +  'px 0, ' + data['object'][i]['width'] + 'px 0, ' + data['object'][i]['width'] + 'px ' + data['object'][i]['height'] + 'px, 0 ' + data['object'][i]['height'] + 'px)'
                    }
                    else if (data['object'][i]['trapezoid'] === 'right') {
                        div.style.clipPath = 'polygon(0 0, ' + data['object'][i]['width'] + 'px 0, ' + data['object'][i]['short'] + 'px ' + data['object'][i]['height'] + 'px, 0 ' + data['object'][i]['height'] + 'px)'
                    }
                }
        
                if (data['object'][i]['type'] === 'blank') {
                    div.style.backgroundColor = "#000000"
                }
                else if (data['object'][i]['type'] === 'screen') {
                    div.style.backgroundColor = "#C5C5C5"
        
                    let file = document.createElement("input")
                    file.type = "file"
                    file.style.display = "none"
                    file.onchange = (event) => {
                        let child = event.target.parentElement.childNodes
                        for (let i=0; i<child.length; i++) {
                            if (child[i].tagName.toUpperCase() === "VIDEO") {
                                event.target.parentElement.removeChild(child[i])
                            }
                        }
                        
                        let f = event.target.files[0]
                        let blobURL = URL.createObjectURL(f)
                        if (f.type === "image/png" || f.type === "image/jpeg" || f.type === "image/jpg") {
                            event.target.parentElement.style.background = 'url("' + blobURL + '")'
                        }
                        else {
                            event.target.parentElement.style.backgroundColor = "#C5C5C5"
                            let video = document.createElement('video')
        
                            video.src = blobURL
                            video.loop = true
                            video.muted = true
                            video.style.objectFit = 'fill'
                            video.style.height = '100%'
                            video.style.width = '100%'
                            video.style.position = 'absolute'
        
                            event.target.parentElement.appendChild(video)
                        }
                        
        
                        let videoes = document.querySelectorAll("video")
                        for (let i=0; i<videoes.length; i++)
                        {
                            videoes[i].pause()
                            videoes[i].currentTime = 0
                            videoes[i].play()
                        }
                    }
        
                    div.appendChild(file)
        
                    div.onclick = () => {
                        file.click()
                    }
        
                    self.state.screens.push({
                        'id': data['object'][i]['id'],
                        'element': div,
                        'file': file
                    })
                }
        
                screenContainer.appendChild(div)
            }
        
            var ratio = window.screen.width/(document.getElementById("screen-container").offsetWidth+10)
            document.getElementById("screen-container").style.transform = 'scale(' + ratio + ')'
        }
    }
  
    render () {
        return (
            <div id='screen-container' className='fullscreen'></div>
        )
    }
}
export default Screen