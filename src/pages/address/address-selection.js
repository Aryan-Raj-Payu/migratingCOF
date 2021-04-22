import ApplicationFlowLayout from 'layouts/ApplicationFlowLayout'
import Header from 'components/application-flow/Header'
import AddressSelection from 'components/application-flow/address/AddressSelection'

const HeaderBar = () => <Header title=""></Header>

const address = () => {
  return (
    <ApplicationFlowLayout headerBar={<HeaderBar />}>
      <AddressSelection />
    </ApplicationFlowLayout>
  )
}

export default address
