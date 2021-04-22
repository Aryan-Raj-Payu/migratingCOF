import React, { useEffect, useRef, memo } from 'react'
import PropTypes from 'prop-types'
import {
  title,
  cameraContainer,
  onDesktopView,
  button,
  captureButton,
  onMobileView,
  section,
  parent,
  selfi
} from 'styles/address/selfi.module.scss'

// import { section } from 'styles/base/page.module.scss'

const SelfiComponent = (props) => {
  const camera = useRef()
  useEffect(() => {
    return () => {
      // console.log('unmounting')
    }
  })
  const showCameraOptions = function () {
    console.log('changing')
    let localstream
    const constraints = {
      video: {
        facingMode: 'environment'
      },
      audio: false
    }
    const video = document.querySelector('video')
    navigator.mediaDevices
      .getUserMedia(constraints)
      .then((stream) => {
        video.srcObject = stream
        localstream = stream
      })
      .catch((error) => {
        this.showError(error.message)
      })

    const screenshotButton = document.querySelector('#button')
    const screenshotImageButton = document.querySelector('#screenshot-button')
    const canvas = document.createElement('canvas')

    function VideoOpener(localstream) {
      canvas.width = video.videoWidth
      canvas.height = video.videoHeight
      canvas.getContext('2d').drawImage(video, 0, 0)
      let vid = video
      vid.pause()
      vid.src = ''
      if (localstream && localstream.getTracks) {
        localstream.getTracks()[0].stop()
      }
      props.offCameraRecieveImg(canvas.toDataURL('image/png'))
    }

    // on clicking on button
    screenshotButton.addEventListener('click', () => {
      VideoOpener(localstream)
    })

    // on clicking on icon

    screenshotImageButton.addEventListener('click', () => {
      VideoOpener(localstream)
    })
  }

  useEffect(() => {
    showCameraOptions()
  }, [])
  return (
    <>
      <div className={parent}>
        <section className={section}>
          {
            <>
              <div className={title}>Capture a photo</div>
              <div className={cameraContainer} ref={camera}>
                <video autoPlay className={selfi}>
                  <track src="" kind="captions" srcLang="en" label="english_captions" />
                </video>
                <div className={onMobileView}>
                  <img
                    src="https://s3.ap-south-1.amazonaws.com/lazypay-static-assets/LazyPayWebsite/EMI+Web/group-8.svg"
                    alt=""
                    id="screenshot-button"
                  />
                </div>
              </div>
              <div className={onDesktopView}>
                <div className={button}>
                  <button className={captureButton} id="button">
                    Tap to capture photo
                  </button>
                </div>
              </div>
            </>
          }
        </section>
      </div>
    </>
  )
}
SelfiComponent.propTypes = {
  offCameraRecieveImg: PropTypes.func
}
export default memo(SelfiComponent)
