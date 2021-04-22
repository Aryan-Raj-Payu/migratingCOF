import ApplicationFlowLayout from 'layouts/ApplicationFlowLayout'
import Header from 'components/application-flow/Header'
import UtilityInfo from 'components/application-flow/address/UtilityInfo'

const HeaderBar = () => <Header title=""></Header>

const address = () => {
  return (
    <ApplicationFlowLayout headerBar={<HeaderBar />}>
      <UtilityInfo />
    </ApplicationFlowLayout>
  )
}

export default address
