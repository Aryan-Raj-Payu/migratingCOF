import ApplicationFlowLayout from 'layouts/ApplicationFlowLayout'
import Header from 'components/application-flow/Header'
import NewAddress from 'components/application-flow/address/NewAddress'

const HeaderBar = () => <Header title=""></Header>

const newAddress = () => {
  return (
    <ApplicationFlowLayout headerBar={<HeaderBar />}>
      <NewAddress />
    </ApplicationFlowLayout>
  )
}

export default newAddress
