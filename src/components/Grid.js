import React from 'react';
import { Link } from 'react-router'

class Grid extends React.Component {

    render(){

        return(
            <div className="grid">
            <h1 className="grid-title">Shell Hacks </h1>
              <div className="padding">
              <a className="anchor" download href="http://i.cdn.turner.com/adultswim/big/video/rick-and-morty-marathon-promo/promo_RAM_LIVE_THURS_30_Social.jpg"  >
                <img className="image" src="http://i.cdn.turner.com/adultswim/big/video/rick-and-morty-marathon-promo/promo_RAM_LIVE_THURS_30_Social.jpg" />
                <div className="shadow"></div>
                <img className="download" src="https://i.imgur.com/fhgL9UA.png"/>
              </a></div>
              <div className="padding">
              <a className="anchor" download href="http://az616578.vo.msecnd.net/files/2016/07/24/6360498178139720611073070814_Rick%20and%20Morty.jpg" >
                <img className="image" src="http://az616578.vo.msecnd.net/files/2016/07/24/6360498178139720611073070814_Rick%20and%20Morty.jpg" />
                <div className="shadow"></div>
                <img className="download"src="https://i.imgur.com/fhgL9UA.png"/>
              </a></div>
              <div className="padding">
              <a className="anchor" download href="https://resizing.flixster.com/asUHcXiS7_fXXj9SdgCPl7edbYo=/1920x1080/v1.bjsxNjYzOTc3O2o7MTc0OTU7MTIwMDsxOTIwOzEwODA" >
                <img className="image" src="https://resizing.flixster.com/asUHcXiS7_fXXj9SdgCPl7edbYo=/1920x1080/v1.bjsxNjYzOTc3O2o7MTc0OTU7MTIwMDsxOTIwOzEwODA" />
                <div className="shadow"></div>
                <img className="download"src="https://i.imgur.com/fhgL9UA.png"/>
              </a></div>
              <div className="padding">
              <a className="anchor" download href="http://cdn3.thr.com/sites/default/files/2015/07/rick_and_morty_s02_still.jpg" >
                <img className="image" src="http://cdn3.thr.com/sites/default/files/2015/07/rick_and_morty_s02_still.jpg" />
                <div className="shadow"></div>
                <img className="download"src="https://i.imgur.com/fhgL9UA.png"/>
              </a></div>
            </div>
        )
    }
};

export default Grid;
