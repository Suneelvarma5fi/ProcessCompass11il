import React from "react"
import Sidebar from "./Sidebar"
import Tile from "./Tile"
import SmallTileWrapper from "./SmallTileWrapper"
import Footer from "./Footer"

function Home() {
  return (
    <div className="home">
      <Sidebar />
      <div className="wrapper">
        <div className="navwrapper">
          <div id="head1">
            <h1 className="heading1">BOSCH</h1>
          </div>
          <div id="head2">
            <h1 className="heading2"> EHB PROCESS COMPASS</h1>
          </div>
        </div>
        <Tile />
        <SmallTileWrapper />
        <Footer />
      </div>
    </div>
  )
}

export default Home
