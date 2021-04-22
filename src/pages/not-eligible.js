import DefaultLayout from 'layouts/DefaultLayout'
import MessageScreen from 'components/elements/MessageScreen'

const NotEligible = () => {
  const onAction = () => {
    window.location = process.env.NEXT_PUBLIC_REDIRECT_MERHCANT_URL
  }
  return (
    <DefaultLayout>
      <MessageScreen
        title="Whoops!"
        subtitle="You are not eligible for the LazyPay EMI offer at this moment. Thanks for showing your interest."
        showCircleIcon
        actionText="Okay, got it"
        actionHandler={onAction}
      />
    </DefaultLayout>
  )
}

export default NotEligible
