import ApplicationFlowLayout from 'layouts/ApplicationFlowLayout'
import Header from 'components/application-flow/Header'
import AddressProof from 'components/application-flow/address/AddressProof'

const HeaderBar = () => <Header title=""></Header>

const address = () => {
  return (
    <ApplicationFlowLayout headerBar={<HeaderBar />}>
      <AddressProof />
    </ApplicationFlowLayout>
  )
}

export default address
