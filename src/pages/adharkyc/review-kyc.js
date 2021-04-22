import ApplicationFlowLayout from 'layouts/ApplicationFlowLayout'
import Header from 'components/application-flow/Header'
import ReviewKyc from 'components/application-flow/AdharKyc/ReviewKyc'
// import AdharXML from 'components/application-flow/AdharKyc/check'

const HeaderBar = () => <Header title=""></Header>

const adharxml = () => {
  return (
    <ApplicationFlowLayout headerBar={<HeaderBar />}>
      <ReviewKyc />
    </ApplicationFlowLayout>
  )
}

export default adharxml
