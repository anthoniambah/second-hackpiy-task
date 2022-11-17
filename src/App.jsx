import React from 'react'
import "./App.css"

// Components
import { Navbar } from "./components/Navbar"
import { Section } from './components/Section';
import { Body } from "./components/Body";
import { Footer } from "./components/Footer"

export default function App() {
  return (
    <div className='container'>
      <Navbar />
      <Section />
      <Body />
      <Footer />
    </div>
  )
}
