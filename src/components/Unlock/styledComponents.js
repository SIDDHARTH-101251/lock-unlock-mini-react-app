// Style your elements here
import styled from 'styled-components'

export const MainContainer = styled.div`
  background: linear-gradient(to bottom, #161617, #0b0c1e, #3c2940);
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const LockImage = styled.img`
  width: 100px;
  height: 100px;
  margin: 10px;
`

export const LockPara = styled.p`
  font-family: Roboto;
  font-size: 18px;
  color: #fff;
`

export const LockButton = styled.button`
  background-color: #06b6d4;
  height: 36px;
  width: auto;
  padding: 8px;
  font-family: Roboto;
  font-size: 14px;
  color: #fff;
  border: 0 solid;
  border-radius: 8px;
  outline: none;
  margin-top: 48px;
`
