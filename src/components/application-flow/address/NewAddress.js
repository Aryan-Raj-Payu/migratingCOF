import React from 'react'

import Button from 'components/elements/Button'

import {
  title,
  inputContainer,
  footer,
  subText,
  input,
  inputCity,
  inputState,
  error,
  residenceType,
  residence,
  residenceValue,
  residenceName,
  parent,
  section,
  btn
} from 'styles/address/newaddress.module.scss'

// import { section } from 'styles/base/page.module.scss'
import RadioInput from 'components/elements/inputs/RadioInput'
import ICError from 'components/icons/ICError'

const NewAddress = () => {
  const isButtonEnabled = () => false

  return (
    <>
      <div className={parent}>
        <section className={section}>
          <div className={title}>Add current address</div>
          <div className={inputContainer}>
            <input
              type="text"
              name="otp"
              className={input}
              placeholder="Flat/ House no/ Building"
            />
            <input type="text" name="otp" className={input} placeholder="Street/ Locality" />
            <input type="text" name="otp" className={input} placeholder="Landmark (Optional)" />
            <input type="text" name="otp" className={input} placeholder="Pincode" />

            <input
              type="text"
              name="otp"
              className={inputCity}
              disabled={true}
              placeholder="District/ City"
            />

            <input
              type="text"
              name="otp"
              className={inputState}
              disabled={true}
              placeholder="State"
            />
          </div>

          <div className={residenceType}>
            <div className={subText}>Residence Type</div>
            <div className={residence}>
              <div>
                <RadioInput name="residence" />
              </div>{' '}
              <div className={residenceName}>Owned</div>
              <div className={residenceValue}>
                <RadioInput name="residence" />
              </div>{' '}
              <div className={residenceName}>Rent</div>
            </div>
          </div>

          <div className={footer}>
            <div className={subText}>
              <div className={error}>
                <ICError />
              </div>{' '}
              Proof is required for selected address for verification.
            </div>
            <div className={btn}>
              <div>
                <Button
                  variant="Primary"
                  size="Large"
                  customClass="btnBlock"
                  disabled={!isButtonEnabled()}>
                  Add address
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default NewAddress
