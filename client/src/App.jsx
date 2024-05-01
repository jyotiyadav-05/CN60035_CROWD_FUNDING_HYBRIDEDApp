import { useState,useEffect } from 'react'
import abi from "./contractJson/chai.json"
import {ethers} from "ethers"
import Memos from './components/Memos'
import Main from './components/Main'
import './App.css'

function App() {
  const [state,setState]=useState({
    provider:null,
    signer:null,
    contract:null
  })
  const [account,setAccount]=useState('Not connected');
  useEffect(()=>{
    const template=async()=>{
   
      const contractAddres="0xa64e3144835aF8781c750ceC432784a68d883266";
      const contractABI=abi.abi;
      try{

        const {ethereum}=window;
        const account = await ethereum.request({
          method:"eth_requestAccounts"
        })
 
        window.ethereum.on("accountsChanged",()=>{
         window.location.reload()
        })
        setAccount(account);
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer =  provider.getSigner(); 
        
        const contract = new ethers.Contract(
          contractAddres,
          contractABI,
          signer
        )
        console.log(contract)
      setState({provider,signer,contract});
       
      }catch(error){
        console.log(error)
      }
    }
    template();
  },[])
  return (
    <div >
    <p style={{ marginTop: "10px", marginLeft: "5px" }}>
      <small>Connected Account - {account}</small>
    </p>
   
      <Main state={state} />
      <Memos state={state} />
   
  </div>
  )
}

export default App





