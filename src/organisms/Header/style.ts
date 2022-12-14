import styled from 'styled-components'

export const Box = styled.div `
    background-color: #030303;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 18px 40px;
    box-shadow: 0 0.1rem 0.5rem #16D833;
    width: 100%;
    transition: all 0.5s;
    position: fixed;
    z-index: 5;    
    

    @media screen and (max-width:767.98px) {
    padding: 18px 20px;
}
    @media screen and (max-width:991.98px) {
    padding: 18px 20px;
}
`

export const BoxSecundario = styled.div `
   background-color: #030303;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 18px 40px;
    box-shadow: 0 0.1rem 0.5rem #16D833;
    width: 100%;
    transition: all 0.5s;
    position: fixed;
    z-index: 5;    
    

    @media screen and (max-width:767.98px) {
    padding: 18px 20px;
}
    @media screen and (max-width:991.98px) {
    padding: 18px 20px;
}

`