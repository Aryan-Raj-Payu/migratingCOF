import ApplicationFlowLayout from 'layouts/ApplicationFlowLayout'
import Header from 'components/application-flow/Header'
import AdharXML from 'components/application-flow/AdharKyc/AdharKyc'
// import AdharXML from 'components/application-flow/AdharKyc/check'

const HeaderBar = () => <Header title=""></Header>

const adharxml = () => {
  return (
    <ApplicationFlowLayout headerBar={<HeaderBar />}>
      <AdharXML />
    </ApplicationFlowLayout>
  )
}

export default adharxml
