import { IoGift, IoLogoGithub, IoLogoInstagram, IoLogoLinkedin } from "react-icons/io5"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <>
    <footer className="footer p-10 bg-slate-900 text-white ">
  <nav>
    <h6 className="footer-title">Services</h6> 
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav> 
  <nav>
    <h6 className="footer-title">Company</h6> 
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav> 
  <nav>
    <h6 className="footer-title">Legal</h6> 
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
</footer> 
<footer className="footer px-10 py-4 border-t bg-slate-900 text-white  border-violet-600">
  
  <nav className="md:place-self-center md:justify-self-end">
    <div className="grid grid-flow-col gap-4">
      <a href="https://github.com/mounirikine" >
      <IoLogoGithub className="text-2xl" />
      </a>
      <a href="https://www.linkedin.com/in/mounir-ikine-74b9132a5/" >
      <IoLogoLinkedin className="text-2xl" />
      </a>
      <a href="https://www.instagram.com/mouunir_1/" >
      <IoLogoInstagram className="text-2xl" />
      </a>
    </div>
  </nav>
</footer>
    
    </>
  )
}

export default Footer