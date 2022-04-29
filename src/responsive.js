import {css} from 'styled-components'


export const mobileSize = (props)=>{
    return css`
    @media only screen and  (max-width:380px){
        ${props}
      }
    `
}
// export const tabletSize = (props)=>{
//     return `
//     @media only screen and  (min-width:420px) and( max-width: 800px){
//         ${props}
//       }
//     `
// }