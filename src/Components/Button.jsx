
import styled from 'styled-components'


const Button =styled.button`
background-color:transparent;
margin:10px;
cursor:pointer;
background-color:${props=>props.primary?"aqua":""};
border:${props=>props.primary?"none":""};
border:${props=>props.dashed?"1px dashed red":""};
border:${props=>props.default?"1px solid grey":""};
border:${props=>props.text?"none":""};
color:${props=>props.link?"blue":""};
border:${props=>props.link?"none":""};

`
// const Button = ({children}) => {
//   return (
//     <button>{children}</button>
//   )
// }

export { Button }