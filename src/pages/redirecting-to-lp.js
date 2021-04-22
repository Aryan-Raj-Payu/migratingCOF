import React, { useEffect } from 'react'
import { useRouter } from 'next/router'

import useAPIHook from 'hooks/useApiStates'

import { getEligibility } from 'api/application/'

import DefaultLayout from 'layouts/DefaultLayout'
import LasyPayLogo from 'components/icons/LasyPayLogo'
import ICSecure from 'components/icons/ICSecure'

import {
  title,
  content,
  loaderContainer,
  arrow,
  arrowSliding,
  delay1,
  delay2,
  delay3,
  logo,
  secure,
  text
} from 'styles/pages/redirecting.module.scss'

import { section } from 'styles/base/page.module.scss'

const Redirecting = () => {
  const { data, request } = useAPIHook()
  const { push } = useRouter()

  useEffect(() => {
    if (data) {
      const { is_eligible } = data || {}
      is_eligible ? push('/otp-verification') : push('/not-eligible')
    }
    return () => {}
  }, [data])

  useEffect(() => {
    request(() => getEligibility())
    return () => {}
  }, [])

  return (
    <DefaultLayout>
      <div className={content}>
        <section className={section}></section>
        <section className={section}>
          <div className={loaderContainer}>
            <div className={`${arrowSliding} ${delay1}`}>
              <div className={arrow}></div>
            </div>
            <div className={`${arrowSliding} ${delay2}`}>
              <div className={arrow}></div>
            </div>
            <div className={`${arrowSliding} ${delay3}`}>
              <div className={arrow}></div>
            </div>
          </div>
          <div className={title}>Buy now & pay later in EMIs</div>
          <div className={logo}>
            <span>Redirecting to</span>
            <LasyPayLogo width="120px" height="16px" />
          </div>
        </section>
        <section className={section}>
          <div className={secure}>
            <ICSecure iconColor="#6D8880" size="20" />
            <div className={text}>Official & Secure EMI Partner</div>
          </div>
        </section>
      </div>
    </DefaultLayout>
  )
}

export default Redirecting
