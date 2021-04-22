/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react'
import {
  xmlHeading,
  instructions,
  linkWrapper,
  InstructionsLink,
  nextButtonWrapper,
  text,
  btn,
  shareCodeInput,
  fileInputWrapper,
  fileBlock,
  uploadLabel,
  fileInputContainer,
  fileName,
  uploadBtn,
  shareCodeContainer,
  btnSubmit,
  shareCodeMsg,
  educationButton,
  educationHeading,
  educationImg,
  btnContainer,
  section,
  parent
} from 'styles/adharkyc/adharkyc.module.scss'

// import { section } from 'styles/base/page.module.scss'

const AdharKyc = () => {
  const [toogle, setToogle] = useState({
    showEducation: false,
    showUpload: false,
    showInstruction: true,
    showNext: true,
    showHeader: true
  })
  const renderData = {
    heading: 'Follow the steps below to provide Aadhaar file',
    instructions: [
      {
        text:
          "Click here <a href = 'https://resident.uidai.gov.in/offlineaadhaar' target='blank'> https://resident.uidai.gov.in/offlineaadhaar</a> to go to UIDAI website",
        popup: { text: '', action: '' }
      },
      {
        text: 'Follow the steps on UIDAI website to download your Aadhaar file',
        popup: {
          text: 'SEE INSTRUCTIONS',
          action: 'EDUCATION_SCREEN'
        }
      },
      { text: 'Follow the steps on UIDAI website to download your Aadhaar file' },
      { text: 'Enter the ‘share code’ in the box below and click ‘NEXT’' }
    ],
    imgUrl: 'https://s3.ap-south-1.amazonaws.com/images.lazypay.in/creditline/xml-education.jpg'
  }
  const onSelectFile = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      let file = e.target.files[0]
      uploadFile(file)
      document.getElementById('share-code').focus()
    }
  }
  const upload = () => {
    document.getElementById('share-code').value = ''
    document.getElementById('xml').click()
  }
  const uploadFile = (file) => {
    getBase64(file).then((res) => {})
  }
  function getBase64(file) {
    let promise = new Promise((resolve, reject) => {
      var reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = function () {
        resolve(reader.result)
      }
      reader.onerror = function (error) {
        reject('Error: ', error)
      }
    })
    return promise
  }

  const closeEducationScreen = () => {
    setToogle({
      ...toogle,
      showUpload: false,
      showInstruction: true,
      showEducation: false,
      showNext: true,
      showHeader: true
    })
  }

  const openEducationScreen = () => {
    setToogle({
      ...toogle,
      showUpload: false,
      showInstruction: false,
      showEducation: true,
      showNext: false,
      showHeader: false
    })
  }
  const openUpload = () => {
    setToogle({ ...toogle, showNext: false, showUpload: true })
  }
  return (
    <>
      <div className={parent}>
        <section className={section}>
          {toogle.showHeader && <div className={xmlHeading}>{renderData.heading}</div>}

          {toogle.showInstruction && (
            <div>
              <div className={instructions}>
                {renderData.instructions &&
                  renderData.instructions.map((item) => {
                    return (
                      <div key={item} className={linkWrapper}>
                        <li dangerouslySetInnerHTML={{ __html: item.text }}></li>
                        {
                          //   eslint-disable-next-line jsx-a11y/click-events-have-key-events
                          <div onClick={openEducationScreen} className={InstructionsLink}>
                            {item.popup && item.popup.text}
                          </div>
                        }
                      </div>
                    )
                  })}
              </div>
            </div>
          )}

          {toogle.showNext && (
            <div className={nextButtonWrapper}>
              <div className={text}>Have you downloaded your Aadhaar file?</div>
              <div>
                <button
                  className={btn}
                  onClick={() => {
                    openUpload()
                  }}>
                  YES, CONFIRM
                </button>
              </div>
            </div>
          )}

          {/* File upload block */}

          {toogle.showUpload && (
            <div id="upload-widget">
              <div className={fileInputWrapper}>
                <input
                  type="file"
                  id="xml"
                  accept=".zip"
                  style={{ display: 'none' }}
                  onChange={onSelectFile}></input>
                <div className={fileBlock}>
                  <div className={uploadLabel}>Aadhaar File</div>
                  <div className={fileInputContainer}>
                    <div className={fileName}></div>
                    {
                      //   eslint-disable-next-line jsx-a11y/click-events-have-key-events
                      <div className={uploadBtn} onClick={upload}>
                        UPLOAD
                      </div>
                    }
                  </div>
                </div>
                <div className={shareCodeContainer}>
                  <div className={uploadLabel}>Share Code</div>
                  <input
                    type="text"
                    maxLength="4"
                    onChange={() => {}}
                    id="share-code"
                    className={shareCodeInput}
                  />
                </div>
              </div>

              <div className={btnContainer}>
                <button className={`${btn}` + ` ${btnSubmit}`} disabled={true} onClick={() => {}}>
                  NEXT
                </button>
              </div>
            </div>
          )}

          {/* education image */}

          {toogle.showEducation && (
            <div>
              <div className={educationHeading}>
                Follow these steps on UIDAI website to download your Aadhaar File
              </div>
              <div className={educationImg}>
                <img src={renderData.imgUrl} alt=""></img>
              </div>
              <div className={educationButton}>
                <button className={btn} onClick={closeEducationScreen}>
                  OKAY, GOT IT
                </button>
              </div>
            </div>
          )}
        </section>
      </div>
      <div>
        <section className={section}></section>
      </div>
    </>
  )
}

export default AdharKyc
