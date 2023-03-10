import React from 'react'
import Chat from './components/Chat'
import Navbar from './components/Navbar'

import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from './firebase'

const style = {
  appContainer: `max-w-[728px] mx-auto text-center`,
  sectionContainer: `flex flex-col h-[90vh] bg-gray-100 mt-10 shadow-xl border relative rounded-md`,
}

function App() {
  const [user] = useAuthState(auth)
  //  console.log(user)
  return (
    <div className={style.appContainer}>
      <section className='{style.sectionContainer}'>
        <Navbar />
        {user ? <Chat /> : null}
      </section>
    </div>
  )
}

export default App
