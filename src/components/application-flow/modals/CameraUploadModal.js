import PropTypes from 'prop-types'
import { useEffect } from 'react'
import BaseModal from 'components/elements/BaseModal'
import ICCamera from 'components/icons/ICCamera'
import ICGalery from 'components/icons/ICGalery'
import ICLeftArrow from 'components/icons/ICLeftArrow'
import {
  container,
  camera,
  iconCamera,
  text,
  iconArrow,
  gallery,
  iconGallery,
  galleryText,
  galleryArrow
} from 'styles/address/CameraUploadModal.module.scss'
const CameraUploadModal = ({ closeHandler, showCamera, showCroper }) => {
  useEffect(() => {
    const clickPhoto = document.querySelector('#clickphoto')
    clickPhoto.addEventListener('click', showCamera)
    const upload = document.querySelector('#upload')
    upload.addEventListener('click', showCroper)
  }, [])
  return (
    <BaseModal showCloseIcon={true} closeHandler={closeHandler}>
      <div className={container}>
        <div id="clickphoto" className={camera}>
          <div className={iconCamera}>
            <ICCamera iconColor={'black'} />
          </div>
          <div className={text}>Click Photo</div>
          <div className={iconArrow}>
            <ICLeftArrow />
          </div>
        </div>

        <div id="upload" className={gallery}>
          <div className={iconGallery}>
            <ICGalery iconColor={'black'} />
          </div>

          <div className={galleryText}>Upload from device</div>
          <div className={galleryArrow}>
            <ICLeftArrow />
          </div>
        </div>
      </div>
    </BaseModal>
  )
}

CameraUploadModal.propTypes = {
  submitActionHandler: PropTypes.func,
  closeHandler: PropTypes.func,
  showCamera: PropTypes.func,
  showCroper: PropTypes.func
}

export default CameraUploadModal
