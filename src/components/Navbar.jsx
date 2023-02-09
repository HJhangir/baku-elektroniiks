import React, { forwardRef, useRef } from 'react'
//icone

import { AiOutlineSearch } from 'react-icons/ai'
import { MdOutlinePhoneInTalk } from 'react-icons/md'
import { AiOutlineClose } from 'react-icons/ai'

import Balans from './Balans'
import {Link} from 'react-router-dom'
import Magazalar from './Magazalar'


const Navbar = ({ total, money }) => {
  const closentnRef = forwardRef()
  const overlayRef = useRef()
  const searchIconRef = useRef()


  const closeOverlay = e => {
    const clickelement = e.target
    if (clickelement.classList.contains('close-icone')) {
      overlayRef.current.classList.remove('active')
    }
  }
 
  const openOverlay = e => {
    const clickelement = e.target
    if (clickelement.classList.contains('s-icone')) {
      overlayRef.current.classList.add('active')
    }
  }
  return (
    <>
      <div className="overlay" ref={overlayRef}>
        <AiOutlineClose className='close-icone' ref={closentnRef} onClick={closeOverlay} />
        <input type="search " placeholder='overlay-search-input' />
      </div>
      <nav class="navbar navbar-expand-lg">
        <div class="container-fluid ">
          <a class="navbar-brand" href="##"><img src="https://www.bakuelectronics.az/assets/img/logo.svg" alt="" /></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div className="s-input">
            <input type="text" />
            <AiOutlineSearch className='s-icone' ref={searchIconRef} onClick={openOverlay} />
          </div>
          <div class="collapse navbar-collapse " id="navbarNav">
            <ul class="navbar-nav mx-auto d-flex align-items-center">
              <li class="nav-item">
                <Link class="nav-link active text-danger text-decoration-underline" aria-current="page" to='/kampaniyalar'>Kampaniyalar</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link text-decoration-underline" to='/magazalar'>Magazalar</Link>
              </li>
              <li class="nav-item">
                <a class="nav-link text-decoration-underline" href="##"><Balans total={total} money={money} /></a>
              </li>
              <li class="nav-item">
                <a class="nav-link sss" href="##">143 <MdOutlinePhoneInTalk /> </a>
              </li>

            </ul>
          </div>
        </div>
      </nav>

    </>



  )
}

export default Navbar