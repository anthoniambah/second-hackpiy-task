import React from "react"
import "./Body.css"

// Images
import router from '../assests/router.png'
import about from '../assests/about.jpg'
import purchase from '../assests/purchase-wicrypt.png'
import devices from "../assests/devices.png"
import coin from '../assests/coin.png'
import share from '../assests/share.png'
import mixer from '../assests/mixer.png'
import axe from '../assests/axe.png'
import bars from '../assests/bars.png'
import swifta from '../assests/swifta.png'
import arewa from '../assests/arewa.png'
import esg from '../assests/esg.png'
import kopas from '../assests/kopas.png'
import a50 from '../assests/a50.png'
import omn from '../assests/omn.png'
import vnts from '../assests/vnts.png'
import n7 from '../assests/n7.png'
import polka from '../assests/polka.png'
import au21 from '../assests/au21.png'
import polygon from '../assests/polygon.png'
import pluto from '../assests/pluto.png'
import inclusion from '../assests/inclusion.png'
import chain from '../assests/chain.png'
import ogg from '../assests/ogg.png'
import onega from '../assests/onega.png'
import people from '../assests/people.png'
import shake from '../assests/shake.png'
import home from '../assests/home.png'
import google from '../assests/google.png'
import app from '../assests/app.png'
import signup from '../assests/sign-up.png'
import getdevice from '../assests/get-device.png'



export const Body = () => {
  return (
    <div className="body">
      <div className="announce">
        <p className="announcep">Annoucements</p>
        <div className="firstann">
          <div className="fabtn-1">
          <i class="fa-solid fa-angle-left"></i>
          </div>
          <div className="firstann-1">
            <p>Staking is Live</p>
            <div className="firstann-1-button"><button>Stake</button></div>
          </div>
          <div className="firstann-2">
            <p>Wicrypt Token (WNT) <br /> now on MEXC</p>
            <div className="firstann-2-button"><button>Trade Now</button></div>
          </div>
          <div className="firstann-3">
            <div className="fann-3-1">
              <img src= {router} alt="" />
              <div className="fann-3-1-1">
                Spider <br /> <del>$1,500</del> $240
              </div>
            </div>
            <div className="fann-3-2">
              <h4>GET 80% OFF</h4>
              <h6>When you mint with $WNT</h6>
              <div className="firstann-3-button"><button>Mint Now</button></div>
            </div>
          </div>
          <div className="fabtn-2">
          <i class="fa-solid fa-angle-right"></i>
          </div>
        </div>
      </div>
      <br /> <br /> <br /> <br />
      <div className="about">
        <div className="aboutvid">
          <img src= {about} alt="" width={500}/>
        </div>
        <div className="abouttext">
          <p>About Wicrypt</p> <br />
          <span>Wicrypt empowers you with the ability to mine Wicrypt tokens <br /> while sharing high-speed internet access with your guests, <br /> customers or community for free, or at whatever rates you <br /> decide.</span> <br /> <br />
          <button>Get Started <i class="fa-solid fa-arrow-right"></i></button>
        </div>
      </div>
      <br /> <br /> <br /> <br />
      <div className="started">
        <h3>Getting Started</h3>
        <div className="line"></div>
        <p>We have highlighted key steps in getting you started with the Wicrypt Hotspot Hub.</p>
        <div className="started-1">
          <div className="started-1-1">
            <img src={purchase} alt="" width={450}/>
          </div>
          <div className="started-1-2">
            <i className="step">Step 1</i> <br />
            <h4>Purchase a Wicrypt Hotspot Hub</h4>
            <p>You can purchase your Wicrypt Hotspot Hub on the Wicrypt Website via the link below</p> <br /> <br />
            <button>Shop Now <i class="fa-solid fa-arrow-right"></i></button>
          </div>
        </div>
        <div className="started-1-3">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
      </div>
      <div className="cal">
        <div className="cal-1">
          <h2>Calculate Estimated <br /> Mining Potential</h2>
          <p>Explore this reward calculator to estimate your WNT <br /> earnimg based on the usage details of your <br /> devices.</p>
        </div>
        <div className="cal-2">
          <div className="cal-2-1">
            <div>
              Number of "The Originals" devices <i class="fa-solid fa-circle-info"></i>
              <br /> <br />
              <span className="calash">0</span>
            </div>
          
            <hr /> <br />
            <div>
              Number of "Basic" devices <i class="fa-solid fa-circle-info"></i>
              <br /> <br />
              <span className="calash">0</span>
            </div>
            <hr /> <br />
            <div className="calcc">
              <span>
                Country <i class="fa-solid fa-circle-info"></i>
                <br /> <br />
                <select name="" id="">
                  <option value="">Select</option>
                </select>
              </span>
              <span>
                City <i class="fa-solid fa-circle-info"></i>
                <br /> <br />
                <select name="" id="">
                  <option value="">Select</option>
                </select>
              </span>
            </div> <br />
            <div>
              Internet access service duration <i class="fa-solid fa-circle-info"></i>
              <br /> <br />
              <span className="calash">eg. 4 weeks</span>
              <span className="calwit">weeks</span>
            </div>
            <hr /> <br />
            <div>
              Expected weekly uptime of devices <i class="fa-solid fa-circle-info"></i>
              <br /> <br />
              <span className="calash">eg. 100%</span>
              <span className="calwit">%</span>
            </div>
            <hr /> <br />
            <div>
              Average weekly bandwidth <i class="fa-solid fa-circle-info"></i>
              <br /> <br />
              <span className="calash">eg. 100 GB</span>
              <span className="calwit">GB</span>
            </div>
            <hr /> <br /> <br />
            <button>Calculate</button>
          </div>
          <div className="cal-2-2">
            <h3>Calculated Result</h3>
            <div className="calbox">
            <i class="fa-solid fa-percent"></i> <br />
            <span>WNT Rewards</span> <br />
            <span><b>0 WNT ~ $0</b></span>
            </div>
            <h5>Reset Calculator</h5>
            <p>Disclaimer: Kindly note that the result is based on a series of assumptions and simulated predictions, <br /> part of which cannot be guaranteed by Wicrypt.</p>
          </div>
        </div>
      </div>
      <br /> <br /> <br /> <br /> <br />
      <div className="devices">
        <div className="devices-1">
          <h2>Wicrypt Devices</h2>
          <p>Our Smart hotspot and network hubs allow users to mine the Wicrypt <br /> Network Token ($WNT) while sharing their internet connection. With the <br /> dual SIM feature, users can switch between internet service providers <br /> seamlessly and conveniently for high speed connection.</p>
          <br />
          <button>Shop Now</button>
        </div>
        <div className="devices-2">
          <img src={devices} alt="" width={300} />
        </div>
      </div>
      <div className="features">
        <h3>Wicrypt Features</h3>
        <div className="line"></div>
        <div className="features-1">
          <div className="f-1">
          <img src={coin} alt="" width={35}/> <br />
          <b>Share hotspot and earn WNT</b>
          <p>Provide access to more affordable internet data while earning WNT from sharing your WiFi. Hosts will be able to mine WNT at their own pace as well as be able to resell data at their own preferred rate as well as control consumption</p>
          </div>
          <div className="f-1">
          <img src={share} alt="" width={30}/> <br />
          <b>Create WiFi Hotspots</b>
          <p>Create your own hotspot network, or chain of hotspot networks and offer your community secure access to your high-speed internet for free or at whatever rates you choose and get rewarded with the Wicrypt network Token ($WNT)</p>
          </div>
          <div className="f-1">
          <img src={mixer} alt="" width={35}/> <br />
          <b>Switch Providers</b>
          <p>Free yourself from constantly switching devices for a good connection. Wicrypt devices allow you to move between mobile and fibre network providers easily.</p>
          </div>
          <div className="f-2">
            <img src={axe} alt="" width={50}/> <br />
            <b>Mine WNT during every internet session</b>
            <p>Mine Wicrypt Network Token (WNT) in every internet session. Hosts can enjoy the opportunity of earning WNT when clients connect to their network over a period of time.</p>
          </div>
          <div className="f-2">
            <img src={bars} alt="" width={30}/> <br />
            <b>Monitor Data Consumption</b>
            <p>Automatically top-up data balance at good rates from your Wicrypt wallet. Add friends, family or customers to your account, allocate data to them, monitor consumption, and track individual usage over time.</p>
          </div>
          <div className="f-2">
          <i class="fa-solid fa-server"></i> <br /> <br />
          <b>Easy redemption</b>
          <p>Receive payments into your wallet account when other users connect to your hotspot network and cash out all of your earnings on any of your bank accounts.</p>
          </div>
        </div>
      </div>
      <div className="p-i">
        <h3>Partners & Investors</h3>
        <div className="line"></div> <br />
        <b>Our Partners</b>
        <div className="partners">
          <div className="pt-1"><img src={swifta} alt="" width={100}/></div>
          <div className="pt-1"><img src={arewa} alt="" width={100}/></div>
          <div className="pt-1"><img src={esg} alt="" width={100}/></div>
          <div className="pt-1"><img src={kopas} alt="" width={100}/></div>
          <div className="pt-1"><img src={a50} alt="" width={100}/></div>
          <div className="pt-1"><img src={omn} alt="" width={100}/></div>
          <div className="pt-2"><img src={vnts} alt="" width={100}/></div>
        </div> <br /> <br /> <br />
        <b>Our Investors</b>
        <div className="investors">
          <div className="pt-1"><img src={n7} alt="" width={100}/></div>
          <div className="pt-1"><img src={polka} alt="" width={100}/></div>
          <div className="pt-1"><img src={au21} alt="" width={100}/></div>
          <div className="pt-1"><img src={polygon} alt="" width={100}/></div>
          <div className="pt-1"><img src={pluto} alt="" width={100}/></div>
          <div className="pt-1"><img src={inclusion} alt="" width={100}/></div>
          <div className="pt-2"><img src={chain} alt="" width={100}/></div>
        </div> <br /> <br /> <br />
        <b>Our Backers</b>
        <div className="backers">
          <div className="backers-1">
          <div className="pt-1"><img src={ogg} alt="" width={100}/></div>
          <div className="pt-1"><img src={onega} alt="" width={100}/></div>
          </div>
        </div> <br /> <br /> <br />
        <div className="incubator">
          <b>Incubator</b>
          <div className="incu"></div>
        </div>
      </div>
      <div className="deploy">
        <h3>Wicrypt Can Be Deployed For <br /> Different Use Cases</h3>
        <div className="line"></div>
        <div className="deploy-1">
          <div className="d-1">
            <img src={people} alt="" width={100}/> <br /> <br />
            <h4>Community</h4>
            <p>Wicrypt enables the Enugu State Government access to their community whilst creating jobs and income for indigenes in the process.</p> <br />
            <button className="d-1b1">View Case Study</button>
          </div>
          <div className="d-1">
            <img src={shake} alt="" width={90}/> <br />
            <h4>Business</h4>
            <p>Wicrypt enables Omni Branches to offer their agents high speed internet access and earn money in the process.</p> <br />
            <button className="d-1b2">View Case Study</button>
          </div>
          <div className="d-1">
            <img src={home} alt="" width={80}/> <br /> <br />
            <h4>Home & Personal use</h4>
            <p>Ugochukwu uses his Wicrypt device to allocate data to members of his household each month. He uses his Wicrypt App to connect to public Wi-Fi zones in Enugu and Lagos.</p> <br />
            <button className="d-1b3">View Case Study</button>
          </div>
        </div>
      </div>
      <div className="network">
        <div className="start">
          <h1>Start a Network</h1>
          <p>Set up a local network for your home, building, <br /> neighbourhood, or city and mine the Wicrypt Network Token <br /> as people connect.</p> <br />
          <button>Get Started</button>
        </div>
        <div className="find">
          <h1>Find a Network</h1>
          <p>Wicrypt explorer is a robust architecture coverage map <br /> with a dynamic and innovative purpose that allows wicrypt <br /> users to see on the map Wicrypt hotspots near them so <br /> that they connect and enjoy.</p> <br />
          <button>Find Hotspot Hub</button>
        </div>
      </div>
      <div className="news">
        <h3>In The News</h3>
        <div className="line"></div>
        <p className="newsp">Excerpts from news articles about Wicrypt.</p>
        <div className="newsb">
          <div className="news-left"><i class="fa-solid fa-angle-left"></i></div>
          <div className="news-right"><i class="fa-solid fa-angle-right"></i></div>
        </div>
        <div className="news-1">
          <div className="n-1">
            <span>"Nigerian Communications Commission Invests in Blockchain Startup Wicrypt"</span> <br /> <br />
            <a href="#">Read More</a>
            <br /> <br /> <br />
            <p>CoinWire</p>
            <h6>11/10/21</h6>
          </div>
          <div className="n-1">
            <span>"Smart Wi-Fi sharing startup Wicrypt raises $1.5M funding"</span> <br /> <br />
            <a href="#">Read More</a>
            <br /> <br /> <br />
            <p>Tech in Africa</p>
            <h6>11/10/21</h6>
          </div>
        </div>
      </div>
      <div className="info">
        <div><img src={google} alt="" width={170}/></div>
        <div><img src={app} alt="" width={170}/></div>
        <div><img src={signup} alt="" width={170}/></div>
        <div><img src={getdevice} alt="" width={170}/></div>
      </div>
    </div>
  )
}
