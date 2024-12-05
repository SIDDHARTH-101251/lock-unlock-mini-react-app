// Write your code here
import {useState} from 'react'
import {
  MainContainer,
  LockImage,
  LockPara,
  LockButton,
} from './styledComponents'

const Unlock = () => {
  const [lock, openLock] = useState(true)
  const onClickLockButton = () => {
    openLock(prevState => !prevState)
  }

  return (
    <MainContainer>
      {lock && (
        <LockImage
          src="https://assets.ccbp.in/frontend/hooks/lock-img.png"
          alt="lock"
        />
      )}
      {!lock && (
        <LockImage
          src="https://assets.ccbp.in/frontend/hooks/unlock-img.png"
          alt="unlock"
        />
      )}

      {lock ? (
        <LockPara>Your Device is Locked</LockPara>
      ) : (
        <LockPara>Your Device is Unlocked</LockPara>
      )}

      {lock ? (
        <LockButton type="button" onClick={onClickLockButton}>
          Unlock
        </LockButton>
      ) : (
        <LockButton type="button" onClick={onClickLockButton}>
          Lock
        </LockButton>
      )}
    </MainContainer>
  )
}

export default Unlock
