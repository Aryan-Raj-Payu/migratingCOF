import ApplicationFlowLayout from 'layouts/ApplicationFlowLayout'
import Header from 'components/application-flow/Header'
import OtpScreen from 'components/application-flow/OtpScreen'

const HeaderBar = () => <Header title="EMI Payment"></Header>

const OtpVerification = () => {
  return (
    <ApplicationFlowLayout headerBar={<HeaderBar />}>
      <OtpScreen />
    </ApplicationFlowLayout>
  )
}

export default OtpVerification
