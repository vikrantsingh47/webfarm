var React = require('react');
var ReactDom = require('react-dom');
import '../../css/navbar-main.scss';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import {About} from '../pages/about.jsx';


 class NavbarMain extends React.Component {

  constructor(props) {
      super(props);
    }

  render(){
    return (
      <div>
            <nav className="navbar navbar-inverse">
  <div className="container-fluid">
    <div className="navbar-header">
      <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
      </button>

      <NavbarBrand linkTo={this.props.brand.linkTo} text={this.props.brand.text} > </NavbarBrand>

    </div>
    <div className="collapse navbar-collapse" id="myNavbar">

     <NavbarMenu links={this.props.links}> </NavbarMenu>

      <ul className="nav navbar-nav navbar-right">
        <li><a href="#">Sign in</a></li>

      </ul>
    </div>
  </div>
</nav>
      </div>
    );
  }
};



 class NavbarBrand extends React.Component {
  constructor(props){
    super(props);
  }



  render(){
    return(

      <Link className="navbar-brand" to={this.props.linkTo}>
        <iframe className="webfarmLogo" src="./src/components/3dlogo/webfarm-logo.html"  name="webfarm logo" scrolling="no" frameBorder="0" height="60px" width="150px"></iframe>
       <div className="webfarmLogoText"> Webfarm Studio </div>
    </Link>

    )
  }
};



  class NavbarMenu extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
      var links = this.props.links.map(function(link,i){
        if(link.dropdown){
          return (
            <NavLinkDropdown links={link.links} text={link.text} active={link.active} key={i}/>
          );
        }
        else{
          return(
            <NavLink linkTo={link.linkTo} text={link.text} active={link.active} key={i}/>
          );
        }
      });

      return(
        <ul className="nav navbar-nav">
          {links}
        </ul>
    );
  }
}


 class NavLinkDropdown extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    var active = false;
    if(this.props.active){
      active = true;
    }
    var links = this.props.links.map(function(link,i){
      if(link.active){
        active=true;
      }
      return(
        <NavLink linkTo={link.linkTo} text={link.text} active={link.active} key={i}/>
      );
    });
    return(
      <li className={"dropdown " + (active?"active": "") }>
          <a className="dropdown-toggle" data-toggle="dropdown" href="#">{this.props.text} <span className="caret"></span></a>
          <ul className="dropdown-menu">
            {links}
          </ul>
        </li>
    );
  }
}

 class NavLink extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(

      <li className={(this.props.active? "active": "")}>
        <Link to={this.props.linkTo}>
          {this.props.text}
        </Link>

      </li>


    );
  }
}


 export { NavbarMain };
