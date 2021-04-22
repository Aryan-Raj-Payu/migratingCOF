import { useEffect } from 'react'

import useAPIHook from 'hooks/useApiStates'

import { paymentSuccess } from 'api/application'

import DefaultLayout from 'layouts/DefaultLayout'
import MessageScreen from 'components/elements/MessageScreen'
import FullPageCircleLoader from 'components/elements/loaders/FullPageCircleLoader'
import ICTickCircle from 'components/icons/ICTickCircle'

import { customCardContainer } from 'styles/base/page.module.scss'

const PaymentSuccess = () => {
  const { request, data, loading } = useAPIHook()
  useEffect(() => {
    request(() => paymentSuccess())
  }, [])

  useEffect(() => {
    if (data) {
      setTimeout(() => (window.location = process.env.NEXT_PUBLIC_REDIRECT_MERHCANT_URL), 4000)
    }
  }, [data])

  if (loading) {
    return <FullPageCircleLoader title="Please wait..." />
  }

  if (data) {
    const { amount, merchantName, firstInstallment } = data || {}
    return (
      <DefaultLayout>
        <MessageScreen
          title={`₹ ${amount} paid to ${merchantName}`}
          subtitle={firstInstallment}
          Icon={<ICTickCircle width="64" height="64" tickPath="M18 36.0178L25.1327 43L47 22" />}
          customCardContainerStyles={customCardContainer}
        />
      </DefaultLayout>
    )
  }
  return null
}

export default PaymentSuccess
