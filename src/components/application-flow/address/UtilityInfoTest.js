/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState, useEffect } from 'react'
import Button from 'components/elements/Button'
import {
  title,
  subTitle,
  footer,
  infoContainer,
  info,
  infoValue,
  circle,
  onDesktopView,
  onMobileView,
  takePhoto,
  photo,
  uploadByDevice,
  uploadText,
  parent,
  section
} from 'styles/address/utilityinfo.module.scss'
import { utility } from 'components/application-flow/address/AddressArray'
// import { section } from 'styles/base/page.module.scss'
import ICTickCircle from 'components/icons/ICTickCircle'
import ICCamera from 'components/icons/ICCamera'
import ICGalery from 'components/icons/ICGalery'
import PhotoUploadModal from 'components/application-flow/modals/CameraUploadModal'
import UploadCroper from 'components/utils/UploadCroper'
// import ImageCroper from 'components/utils/ImageCroper'
// import UploadCroper from 'components/utils/UploadCroperFun'
import SelfiContainer from './SelfiContainer'
import { proofHeading } from './AddressArray'
import { check } from 'prettier'

const UtilityInfo = (props) => {
  const [state, setState] = useState({ heading: '', front: true, back: false, cnt: 1 })
  const [data, setData] = useState({})
  const [showComponent, setShowComponent] = useState({
    showSelfiConatiner: false,
    showUploadCroper: false,
    showMain: true,
    showModalButton: false
  })
  useEffect(() => {
    CheckApi()
  }, [])
  const onSelectFile = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const reader = new FileReader()
      reader.addEventListener('load', () => setData({ src: reader.result }))
      reader.readAsDataURL(e.target.files[0])
      setShowComponent({ ...showComponent, showMain: false, showUploadCroper: true })
    }
  }

  const uploadFile = () => {
    const file = document.querySelector('#photo')
    file.click()
    file.addEventListener('change', onSelectFile)
  }
  const showModal = () => {
    setShowComponent({ ...showComponent, showModalButton: true })
  }

  const modalCamera = () => {
    console.log('camera is opening')
    setShowComponent({
      ...showComponent,
      showMain: false,
      showSelfiConatiner: true,
      showModalButton: false
    })
  }

  const modalCroper = () => {
    const upload = document.querySelector('#uploadDiv')
    upload.click()
    setShowComponent({
      ...showComponent,
      showMain: false,
      showUploadCroper: true,
      showModalButton: false
    })
  }
  const closeHandler = () => {
    setShowComponent({
      ...showComponent,
      showModalButton: false
    })
  }
  const showCamera = () => {
    setShowComponent({
      ...showComponent,
      showMain: false,
      showSelfiConatiner: true
    })
  }
  const CheckApi = () => {
    console.log('api checking')
    let value
    if (state.cnt === 1) {
      value = props.proofValue + '_FRONT'
    } else if (state.cnt === 2) {
      value = props.proofValue + '_BACK'
    }
    let heading = proofHeading[value]['text']
    setState({ ...state, heading: heading, cnt: state.cnt + 1 })
    setShowComponent({
      showSelfiConatiner: false,
      showUploadCroper: false,
      showMain: true,
      showModalButton: false
    })
  }
  return (
    <>
      <div className={parent}>
        {showComponent.showMain && (
          <div>
            <section className={section}>
              <div className={title}>
                {/* Take a photo of Front Side of Your Utility Bill not older than 2 months */}
                {state.heading}
              </div>

              <div className={infoContainer}>
                <div className={subTitle}>MAKE SURE THAT:</div>
                {utility.map((value) => {
                  return (
                    <div className={info} key={value}>
                      <div className={circle}>
                        <ICTickCircle />
                      </div>
                      <div className={infoValue}> {value}</div>
                    </div>
                  )
                })}
              </div>

              <div className={footer}>
                <div className={onMobileView}>
                  <Button
                    variant="Primary"
                    size="Large"
                    customClass="btnBlock"
                    width="mobileWidthFull"
                    onClick={showModal}>
                    Continue
                  </Button>
                  {showComponent.showModalButton && (
                    <PhotoUploadModal
                      showCamera={modalCamera}
                      showCroper={modalCroper}
                      closeHandler={closeHandler}
                    />
                  )}
                </div>
                <div className={onDesktopView}>
                  {
                    // eslint-disable-next-line jsx-a11y/click-events-have-key-events

                    <div id="takephoto" className={takePhoto} onClick={showCamera}>
                      <div style={{ paddingTop: '12px' }}>
                        <ICCamera iconColor="#ee3362" />
                      </div>
                      <div className={photo}>Take a photo</div>
                    </div>
                  }
                  <input
                    className="hidden"
                    accept=".jpg,.jpeg,.png"
                    type="file"
                    name="photo"
                    id="photo"
                    style={{ display: 'none' }}
                    // onChange={onSelectFile}
                  />
                  {
                    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
                    <div id="uploadDiv" className={uploadByDevice} onClick={uploadFile}>
                      <div style={{ paddingTop: '12px' }}>
                        <ICGalery />
                      </div>
                      <div className={uploadText}>Upload</div>
                    </div>
                  }
                </div>
              </div>
            </section>
          </div>
        )}
        {/* image croper */}
        {data.src && showComponent.showUploadCroper && (
          <section>
            <UploadCroper image={data.src} checkApi={CheckApi} />
            {/* <ImageCroper image={data.src} /> */}
          </section>
        )}
        {showComponent.showSelfiConatiner && (
          <section>
            <SelfiContainer checkApi={CheckApi} />
          </section>
        )}
      </div>
    </>
  )
}

export default UtilityInfo
