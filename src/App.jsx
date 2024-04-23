import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DELETE_USER_PENDING, GET_USER_PENDING, UPDATE_USER_PENDING } from './redux-saga/user/action/action'
import Form from './components/Form'

const App = () => {
  let dispatch = useDispatch()

  let data = useSelector(state => state.userReducer.user) || []
  let [view, setView] = useState()

  console.log(view, "setView");

  useEffect(() => {
    dispatch({ type: GET_USER_PENDING })
  }, [])



  const hendel_view_input = (e) => {
     setView({...view, [e.target.name]: e.target.value})
  }

  // const hendel_update_input = (e) => {
  //   Update = e.target.value
  // }
  const hendel_Delete_user = (val) => {
    dispatch({ type: DELETE_USER_PENDING, payload: val })
  }

  const hendelSubmit = (e) => {
    e.preventDefault()
    dispatch({ type: UPDATE_USER_PENDING, payload: view })
  }

  return (
    <div>
      <Form />
      {
        data.map((item, index) => <>
          <h1>{item.name}</h1>
          <button className='focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900' onClick={() => hendel_Delete_user(item.id)}>delete</button>
          <button onClick={() => setView(item)} data-modal-target="authentication-modal" data-modal-toggle="authentication-modal" type="button" class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Update</button>
        </>)
      }

      <div id="authentication-modal" tabindex="-1" aria-hidden="true" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
        <div class="relative p-4 w-full max-w-md max-h-full">
          <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
              <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                Sign in to our platform
              </h3>
              <button type="button" class="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="authentication-modal">
                <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                </svg>
                <span class="sr-only">Close modal</span>
              </button>
            </div>
            <div class="p-4 md:p-5">
              <form class="space-y-4" action="#" onSubmit={hendelSubmit}>
                <div>
                  <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your name</label>
                  <input type="text" onChange={hendel_view_input} value={view?.name} name="name" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="" required />
                </div>

                <button type="submit" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login to your account</button>

              </form>
            </div>
          </div>
        </div>
      </div>


    </div>
  )
}

export default App
