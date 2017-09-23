var React = require('react');
var ReactDom = require('react-dom');
import '../../css/footer.scss'

class FooterMain extends React.Component{

  constructor(props) {
      super(props);
    }

    render(){
      return(

        <div className="myFooter">
        <div className="footerTop">
        <div className="footerTopContent">
          <div className="myRow ">
        <div className="col-md-3 col-sm-3  footerColumn footerColumn1">
          <h4> About Us </h4>
          <div className="aboutUs">
        Webfarm Studio is one stop for web design, web development, web apps, android apps, hybid apps and all kinds of custom apps. We can make responsive and modern applications with powerful APIs to serve your business needs.
          </div>

        </div>
        <div className="col-md-3 col-sm-3 footerColumn footerColumn2">
          <h4> Services </h4>
          <div className="newServices">
        <a href="#">  <h6> Web development </h6></a>
        <a href="#">  <h6> Web design </h6></a>
        <a href="#">  <h6> Hybrid apps </h6></a>
        <a href="#">  <h6> Android apps </h6></a>
        <a href="#">  <h6> Custom software </h6></a>
        <a href="#">  <h6> API </h6></a>
        <a href="#">  <h6> React application </h6></a>

        </div>
        </div>
        <div className="col-md-3 col-sm-3  footerColumn footerColumn3">
          <h4> Tags </h4>
          <div className="myTags">
        <a href="#"><div className="col-md-5 myTag"> web </div></a>
        <a href="#"><div className="col-md-5 myTag">  hybrid  </div></a>
        <a href="#"><div className="col-md-5 myTag">  android </div></a>
        <a href="#"><div className="col-md-5 myTag">  software  </div></a>
        <a href="#"><div className="col-md-5 myTag">  API  </div></a>
        <a href="#"><div className="col-md-5 myTag">  react </div></a>
          </div>

        </div>
        <div className="col-md-3  col-sm-3 col-xs-12 footerColumn footerColumn4">
          <h4> Contact Us </h4>
          <div className="contactUs"> <strong> Address: </strong> 14th main,NRI layout, Bangalore 43 </div>
        <div className="contactUs"> <strong> Phone: </strong> 8317388193</div>
        <div className="contactUs"> <strong> Email: </strong> webfarmstudio@gmail.com </div>
        <div className="socialMedia col-md-12 col-sm-12 col-xs-10">
        <a className="col-md-3 col-sm-3 col-xs-3" target="blank"  href={"https://www.facebook.com/webfarmstudio"}> <img src={require('../../images/footer/socialMedia/facebook.png')}></img></a>
        <a className="col-md-3 col-sm-3 col-xs-3" target="blank" href={"#"}> <img src={require('../../images/footer/socialMedia/googleplus.png')}></img></a>
        <a className="col-md-3 col-sm-3 col-xs-3" target="blank"  href={"#"}> <img src={require('../../images/footer/socialMedia/twitter.png')}></img></a>
        <a className="col-md-3 col-sm-3 col-xs-3" target="blank"  href={"#"}> <img src={require('../../images/footer/socialMedia/linkedin.png')}></img></a>

        </div>
        </div>
        </div>
        </div>
        </div>


        <div className="footerBottom">
        				<p>&copy; 2017 Webfarm Studio</p>
        			</div>
        </div>


      )
    }

}


export {FooterMain};
