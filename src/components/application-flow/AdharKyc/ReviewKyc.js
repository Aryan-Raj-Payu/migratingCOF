/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react'
// import Screenshot from './Screenshot.png'
import Button from 'components/elements/Button'
import {
  title,
  footer,
  kycDetailsContainer,
  header,
  photoContainer,
  checkBox,
  dob,
  address,
  checkContainer,
  checkText,
  bottomView,
  currentText,
  section,
  termsCondition,
  currentAddress,
  photo,
  name,
  toogleButton,
  conditionContainer,
  details,
  parent,
  adharNo,
  heading,
  value,
  comunication
} from 'styles/adharkyc/reviewkyc.module.scss'
import ICArrowCavetDown from 'components/icons/ICArrowCavetDown'
import CheckboxInput from 'components/elements/inputs/CheckboxInput'
import ICCheck from 'components/icons/ICCheck'
import { condition } from './Array'
import ICArrowCavetUp from 'components/icons/ICArrowCavetUp'

const ReviewKyc = () => {
  const [toogle, setToogle] = useState(false)
  return (
    <>
      <div className={parent}>
        <section className={section}>
          <div className={title}>Review your KYC details</div>
          <div className={kycDetailsContainer}>
            <div className={header}>
              <div className={photoContainer}>
                <div className={photo}>{/* photo */}</div>
                <div className={name}>
                  Tanmay Prabhakar Shah
                  <div className={adharNo}>Aadhaar number: XXXX XXXX 6763</div>
                </div>
              </div>
              {
                //   eslint-disable-next-line jsx-a11y/click-events-have-key-events
                <div
                  className={toogleButton}
                  onClick={() => {
                    setToogle(!toogle)
                  }}>
                  {!toogle && <ICArrowCavetDown />}
                  {toogle && <ICArrowCavetUp />}
                </div>
              }
            </div>

            {toogle && (
              <div className={details}>
                <div className={dob}>
                  <div>
                    <div className={heading}>Date of birth</div>
                    <div className={value}>20/4/1997</div>
                  </div>
                  <div>
                    <div className={heading}>Gender</div>
                    <div className={value}>Male</div>
                  </div>
                </div>
                <div className={heading}>Address</div>
                <div className={value}>
                  A-1002, Moon Heights, Kalawad Road, Near The Crystal Mall, Rajkot 360006
                </div>
                <div className={checkBox}>
                  <div>
                    <CheckboxInput />
                  </div>
                  <div className={currentAddress}>My Current address is same as above</div>
                </div>
                <div className={currentText}>Update Current Address and upload proof</div>
              </div>
            )}
          </div>
          <div className={comunication}>Communication Address</div>
          <div className={value}>
            203, Sunshine Heights, Tilak Road, Near The Walkheart Hospital, Khar West, Mumbai 400045
          </div>
        </section>
        <div className={bottomView}>
          {condition.map((val) => {
            return (
              <div key={val} className={checkContainer}>
                <div>
                  <ICCheck iconColor={'#999999'} />
                </div>
                <div className={checkText}>{val}</div>
              </div>
            )
          })}
          <div className={conditionContainer}>
            <div>
              <CheckboxInput />
            </div>
            <div className={termsCondition}>
              I hereby consent to the privacy policy of PayU and the LazyPay Terms and Conditions
              which have been read and understood by me.
            </div>
          </div>
          <div className={footer}>
            <Button variant="Primary" size="Large" width="mobileWidthFull">
              Confirm
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}

export default ReviewKyc
