import CKYCRecordStates from 'components/application-flow/kyc/CKYCRecordStates'
const KYC = () => (
  <>
    <CKYCRecordStates title="Searching for your C-KYC record..." imageName="search-ckyc" />
    {false && (
      <CKYCRecordStates title="We couldn’t find your C-KYC record!" imageName="ckyc-not-found" />
    )}
  </>
)

export default KYC
