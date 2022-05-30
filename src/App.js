import React, { useEffect, useState } from 'react'
import './App.css'
import { ConnectButton, Modal } from 'web3uikit'
import logo from './images/Moralis.png'
import Coin from './components/Coin'
import { abouts } from './about'
import { useMoralisWeb3Api } from 'react-moralis'

const App = () => {
  const [btc, setBtc] = useState(80)
  const [eth, setEth] = useState(38)
  const [link, setLink] = useState(60)
  const [visible, setVisible] = useState(false)
  const [modalToken, setModalToken] = useState(false)
  const [modalPrice, setModalPrice] = useState(false)
  const web3Api = useMoralisWeb3Api()

  useEffect(() => {
    async function fetchTokenPrice() {
      const options = {
        address:
          abouts[abouts.findIndex((x) => x.token === modalToken)].address,
      }
      const price = await web3Api.token.getTokenPrice(options)
      setModalPrice(price.usdPrice.toFixed(2))
    }
    if (modalToken) {
      fetchTokenPrice()
    }
  }, [modalToken])

  return (
    <>
      <div className="header">
        <div className="logo">
          <img src={logo} alt="logo" height="50px" />
          Sentiment
        </div>
        <ConnectButton />
      </div>
      <div className="instructions">
        Where do you think these tokens are going? Up or Down?
      </div>

      <div className="list">
        <Coin
          perc={btc}
          setPerc={setBtc}
          token={'BTC'}
          setModalToken={setModalToken}
          setVisible={setVisible}
        />
        <Coin
          perc={eth}
          setPerc={setEth}
          token={'ETH'}
          setModalToken={setModalToken}
          setVisible={setVisible}
        />
        <Coin
          perc={link}
          setPerc={setLink}
          token={'LINK'}
          setModalToken={setModalToken}
          setVisible={setVisible}
        />
      </div>

      <Modal
        isVisible={visible}
        onCloseButtonPressed={() => {
          setVisible(false)
        }}
        hasFooter={false}
        title={modalToken}
      >
        <div>
          <span style={{ color: 'white' }}> {`Price: `}</span>${modalPrice}
        </div>
        <div>
          <span style={{ color: 'white' }}>{`About`}</span>
        </div>
        <div>
          {modalToken &&
            abouts[abouts.findIndex((x) => x.token === modalToken)].about}
        </div>
      </Modal>
    </>
  )
}

export default App
