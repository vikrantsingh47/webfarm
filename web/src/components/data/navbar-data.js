//setting the data for navbar
var navbarData = {};
navbarData.brand = {linkTo:"/", text:"Webfarm Studio"};
navbarData.links = [
  {linkTo:"/", text: "Home", active:false},
  {linkTo:"/catalogue", text: "Catalogue", active:false},
  {linkTo:"/about", text: "About"},
  {dropdown:true, text:"Services", active:true, links: [
    {linkTo: "/generate-css", text: "Generate CSS"},
    {linkTo: "/generate-animation", text: "Generate Animation"}
  ]}
];

export {navbarData};
