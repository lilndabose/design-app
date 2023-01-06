import { avatar,avatar1,avatar2,avatar3 } from "../assets"

const navLinks = [
  {
    id:'menu1',
    title:'Menu 1',
    href:'/',
    subItem:["My Programs","New Programs","Program invites","Program Requests"]
  },
  {
    id: 'menu2',
    title:'Menu 2',
    href:"/"
  },
  {
    id: 'menu3',
    title:'Menu 3',
    href:"/"
  }
]

const activities=[
  {
    text: "Leslie Alexandra updated her ",
    action: "Account Type",
    date: "5 October 11:45 Am"
  },
  {
    text: "John Smith removed Mark Fleix From ",
    action: "Family Member",
    date: "5 October 11:45 Am"
  },
  {
    text: "Leslie Alexandra updated her ",
    action: "Account Type",
    date: "5 October 11:45 Am"
  },
  {
    text: "John Smith removed Mark Fleix From ",
    action: "Family Member",
    date: "5 October 11:45 Am"
  },
  {
    text: "Leslie Alexandra updated her ",
    action: "Account Type",
    date: "5 October 11:45 Am"
  },
  {
    text: "John Smith removed Mark Fleix From ",
    action: "Family Member",
    date: "5 October 11:45 Am"
  },
]

const family=[
  {
    image: avatar,
    name:'John Smith',
    buttonText:'member'
  },
  {
    image: avatar1,
    name:'Dianne Russell',
    buttonText:'member'
  },
  {
    image: avatar2,
    name:'Lisa Smith',
    buttonText:'member'
  },
]

const received=[
  {
    image: avatar,
    name: "John Smith",
    text: " have invited you to become a family member."
  },
  {
    image: avatar1,
    name: "John Smith",
    text: " have invited you to become a family member."
  },
  {
    image: avatar2,
    name: "Dianne Russell",
    text: " have invited you to become a family member."
  },
  {
    image: avatar3,
    name: "John Smith",
    text: " have invited you to become a family member."
  },
]

const sent=[
  {
    name: 'You',
    text:'have invited johnsmith@gmail.com to become family member'
  },
  {
    name: 'You',
    text:'have invited johnsmith@gmail.com to become family member'
  },
  {
    name: 'You',
    text:'have invited johnsmith@gmail.com to become family member'
  },
  {
    name: 'You',
    text:'have invited johnsmith@gmail.com to become family member'
  }
]

const colors={
  green:'#0C611A',
  primary:'#232E3E',
  red:'#FF3A3A',
  orange: '#F8991F',
  lightBlue: '#DEE8FF',
  memberBtnColor:'#CAD7F5'
}

export {
  navLinks,activities,colors,family,received,sent
}