import React from "react"
import "./Footer.css"

// Images
import image1 from '../assests/image1.png';
import facebook from '../assests/facebook.png'
import instagram from '../assests/instagram.png'
import twitter from '../assests/twitter.png'
import telegram from '../assests/telegram.png'
import youtube from '../assests/youtube.png'
import reddit from '../assests/reddit.png'
import linkedin from '../assests/linkedin.png'
import discord from '../assests/discord.png'
import small from '../assests/small.png'
import cmp from '../assests/cmp.png'
import cg from '../assests/cg.png'


export const Footer = () => {
  return (
    <div className="footer">
      <div className="f-footer">
      <div className="footer-1">
        <img src={image1} alt="" width={130}/>
        <br /> <br />
        <p>Join Our Community</p>
        <div className="f-1-1">
          <img className="f1" src={facebook} alt="" width={20}/>
          <img className="f1" src={instagram} alt="" width={20}/>
          <img className="f1" src={twitter} alt="" width={30}/>
          <img className="f1" src={telegram} alt="" width={20}/>
          <img className="f2" src={youtube} alt="" width={20}/>
          <img className="f2" src={reddit} alt="" width={30}/>
          <img className="f2" src={linkedin} alt="" width={20}/>
          <img className="f2" src={discord} alt="" width={20}/>
        </div>
      </div>
      <div className="footer-2">
        <div className="f-2-1">
          <h5>Company</h5> <br />
          <li><a href="#">FAQs</a></li> <br />
          <li><a href="#">Help Center</a></li> <br />
          <li><a href="#">Developer</a></li> <br />
          <li><a href="#">Blog</a></li> <br />
          <li><a href="#">Media Kits</a></li> <br />
        </div>
        <div className="f-2-1">
          <h5>Developer</h5> <br />
          <li><a href="#">Token</a></li> <br />
          <li><a href="#">Whitepaper</a></li> <br />
          <li><a href="#">Explorer</a></li>
        </div>
        <div className="f-2-1">
          <h5>Contact Us</h5> <br />
          <b>Email:</b> <br />
          <a href="#">hello@wicrypt.com</a> <br /> <br />
          <b>Address:</b> <br /> <br />
          <span><b>Enugu:</b> 5C Bethel Plaza Garden Avenue, Enugu, Nigeria.</span> <br /> <br />
          <span><b>Lagos:</b> 204A Isale Eko Avenue, Dolphin Estate, Lagos, Nigeria.</span>
        </div>
        <div className="f-2-1">
          <h5>Subscribe to Wicrypt newsletter</h5> <br />
          <button>Subscribe Now</button>
        </div>
        <div className="f-2-22">
          <h5>Token Price</h5> <br /> <br />
          <div className="f-2-2">
            <div className="f2a">
            <div className="f2a-1"><img src={small} alt="" width={40}/></div>
            <div className="f2a-2">
              <span className="blue">Wicrypt (WNT)</span> <br />
              <span>0.080416 USD </span> <span className="green">(7.98%)</span>
            </div>
            </div>
            <hr />
            <div className="f2b"><i>Powered by CoinMarketCap</i></div>
          </div>
        </div>
        <div className="f-2-3">
          <h5>More Stats</h5> <br />
          <span>
            <img src={cmp} alt="" width={110}/>
          </span>
          <span>
            <img src={cg} alt="" width={100}/>
          </span>
        </div>
      </div>
      </div>
      <div className="s-footer">
        <div>Copyright &copy; 2018-2022. All rights reserved. Wicrypt Limited</div>
        <div>
          <span>Terms & Conditions</span>
          <span>Privacy Policy</span>
          <span>Warranty Policy</span>
        </div>
      </div>
    </div>
  )
}
