import { React } from 'react'
import icon from '../../assets/bytehashIcon.png'
import ConnectButton from './Button'
import { ethers } from 'ethers'

export default function Header(props) {
  const getProvider = () => {
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      return provider
    } catch (error) {
      console.log('missing provider')
    }
  }

  if (getProvider()) {
    return (
      <header className="h-20 mt-2 px-5 flex items-center" onClick={props.onChange} >
        <img className="h-full cursor-pointer" src={icon} alt="icon"></img>
        <h1 className="mr-auto font-semibold cursor-pointer justify-content-center text-3xl">
          byteHash
        </h1>
        <h2 className="p-4 ml-0 cursor-default text-xl mx-auto font-bold text-white
                shadow-transparent rounded-xl">
                Blockchain agnostic user interface to test/trigger smart contract functions
        </h2>
        <ConnectButton />
      </header>
    )
  } else {
    return (


      <header className="h-20 mt-2 px-5 flex items-center">
        <img className="h-full" src={icon} alt="icon"></img>
        <h1 className="mr-auto font-semibold justify-content-center text-3xl">
          byteHash
        </h1>
        <div className='backdrop-filter z-10 backdrop-blur-sm absolute inset-0
                        flex justify-center items-center text-left'>
          <a className="bg-[#4c249f] p-6 border-2 w-1/3 text-center rounded-xl flex justify-center cursor-pointer"
          href="https://metamask.io/" target="_blank" rel="noreferrer">
                  <h1 className="text-lg font-bold">Please install metamask</h1>
          </a>

        </div>
      </header>
        
    )
  }
}
