"use client"
import React, { useState } from 'react'
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import { useSearchParams } from 'next/navigation';

const Generate = () => {
  const searchParams = useSearchParams()
  const [links, setLinks] = useState([{ link: "", linktext: "" }])
  const [handle, setHandle] = useState(searchParams.get('handle'))
  const [profile, setProfile] = useState("")

  // ✅ Handle dynamic input change
  const handleChange = (index, field, value) => {
    setLinks((prevLinks) =>
      prevLinks.map((item, i) =>
        i === index ? { ...item, [field]: value } : item
      )
    )
  }

  // ✅ Add new link input
  const addLink = () => {
    setLinks((prev) => [...prev, { link: "", linktext: "" }])
  }

  // ✅ Submit function
  const submitLink = async () => {
    if (!handle) {
      toast.error("Handle is required!")
      return
    }

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        link: links,
        handle: handle,
        profile: profile
      })
    }

    try {
      const response = await fetch("/api/add", requestOptions)
      const result = await response.json()

      if (response.ok) {
        toast.success(result.message || "LinkTree Created!")
        setLinks([])
        setHandle("")
        setProfile("")
      } else {
        toast.error(result.message || "Something went wrong!")
      }

    } catch (error) {
      toast.error("Server Error!")
      console.error(error)
    }
  }

  return (
    <>
      <div className='grid grid-cols-2 h-screen bg-white overflow-hidden'>

        {/* Left side */}
        <div className='flex flex-col justify-center items-center overflow-y-auto h-screen'>
          
          <span className='logo'>
            <img src="logo.svg" alt="Logo" />
          </span>

          <h1 className='font-bold text-4xl text-black mt-40'>
            Create Your Linktree
          </h1>

          <div className='flex flex-col gap-5 my-8 w-full max-w-lg'>

            {/* Step 1 */}
            <h2 className='font-bold text-2xl text-black my-2'>
              Step-1: Claim Your Handle
            </h2>

            <input
              value={handle}
              onChange={(e) => setHandle(e.target.value)}
              className='px-4 py-4 focus:outline-black rounded-2xl text-gray-700 bg-[#efefef]'
              type="text"
              placeholder='Choose a Handle'
            />

            {/* Step 2 */}
            <h2 className='font-bold text-2xl text-black'>
              Step-2: Add Links
            </h2>

            {links.map((item, index) => (
              <div key={index} className='flex flex-col gap-2'>

                {/* Link Text */}
                <input
                  value={item.linktext}
                  onChange={(e) =>
                    handleChange(index, "linktext", e.target.value)
                  }
                  className='px-4 py-4 rounded-2xl text-gray-700 bg-[#efefef]'
                  type="text"
                  placeholder='Enter Link Text'
                />

                {/* Link URL */}
                <input
                  value={item.link}
                  onChange={(e) =>
                    handleChange(index, "link", e.target.value)
                  }
                  className='px-4 py-4 rounded-2xl text-gray-700 bg-[#efefef]'
                  type="text"
                  placeholder='Enter Link URL'
                />
              </div>
            ))}

            <button
              onClick={addLink}
              className='bg-[#8129d9] text-white font-bold rounded-lg px-4 py-4'
            >
              Add Link
            </button>

            {/* Step 3 */}
            <h2 className='font-bold text-2xl text-black'>
              Step-3: Add Profile Picture & Finalise
            </h2>

            <input
              value={profile}
              onChange={(e) => setProfile(e.target.value)}
              className='px-4 py-4 rounded-2xl text-gray-700 bg-[#efefef]'
              type="text"
              placeholder='Enter Profile Image URL'
            />

            <button
              disabled={profile == "" || handle == ""}
              onClick={submitLink}
              className='disabled:bg-slate-500 bg-[#8129d9] text-white font-bold px-4 py-4 rounded-lg'
            >
              Create Your Link Tree
            </button>

          </div>
        </div>

        {/* Right side */}
        <div className='w-full h-screen sticky top-0'>
          <img
            className='w-full h-full object-cover'
            src="/generate.webp"
            alt="Preview"
          />
        </div>

      </div>

      <ToastContainer />
    </>
  )
}

export default Generate