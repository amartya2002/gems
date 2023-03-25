import { getSession } from 'next-auth/react'
import Header from '@/components/Header'
import BottomNav from '@/components/BottomNav'

function SettingsPage({ session }) {
  return (
    <div>
      <Header session={session} />
      <div className='mx-auto m-16 text-5xl'>
        Settings
      </div>
      <BottomNav />
    </div>
  )
}

export async function getServerSideProps(context) {
  const session = await getSession(context)
  return {
    props: { session },
  }
}

export default SettingsPage
