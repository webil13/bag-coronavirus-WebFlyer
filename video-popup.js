const videoOverlay = document.querySelector('.video-overlay')
const playBtns = document.querySelectorAll('.card-play-btn')
const closeBtn = document.querySelector('.close-btn')
const videoIframe = document.querySelector('#video')

playBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        videoOverlay.classList.add('active') // Shows th Video Overlay
        switch (btn.classList.item(1)){
            case 'distance':
                setVideoSrc('https://www.youtube.com/embed/BjfaCWPEuiQ')
                break
            case 'mask':
                setVideoSrc('https://www.youtube.com/embed/ThZQukP50zI')
                break
            case 'homeoffice':
                setVideoSrc('https://www.youtube.com/embed/A9Z1cChBau4')
                break
            case 'hands':
                setVideoSrc('https://www.youtube.com/embed/FRi2FTEuY9g')
                break
            case 'handshake':
                setVideoSrc('https://www.youtube.com/embed/Ml0Tb-x2PnA')
                break
            case 'cough':
                setVideoSrc('https://www.youtube.com/embed/mdqgg_TJL8c')
                break
            case 'home':
                setVideoSrc('https://www.youtube.com/embed/9W2jELnsMvE')
                break
            case 'telmed':
                setVideoSrc('https://www.youtube.com/embed/2WOvaWZpf-Q')
                break
            default:
                setVideoSrc('')
        }
    })
})

function setVideoSrc(url){
    videoIframe.setAttribute('src', url)
}
// Close Video Overlay
closeBtn.addEventListener('click', () => {
    videoOverlay.classList.remove('active')
})
