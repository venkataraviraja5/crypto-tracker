
const form=document.querySelector("#searchbox")
const divtag=document.querySelector("#root")
let cointype;
let result;
let jsonfile;
let coinprice=0



form.addEventListener('submit',(event)=>{
    event.preventDefault()
    cointype=form.elements.cointype.value;

    cryptoAPI()
  
})


const cryptoAPI = async() =>{
   if(cointype === "invalid"){
    alert("choose Your Crypto")
   }
    
      result= await fetch(`https://api.coinstats.app/public/v1/coins/${cointype}?currency=USD`)
    jsonfile= await result.json()
    console.log(jsonfile);
    const time = new Date().toLocaleTimeString();
    
  
    
    divtag.innerHTML=`<div class="table">
    <img src="${jsonfile.coin.icon}"/>
    <table class="table table-dark table-striped">
       <tr>
       <td class="headerbox"><p class="name">Rank</p></td>
       <td class="headerbox"><p class="name">${jsonfile.coin.rank}</p></td>
       </tr>
       <tr>
       <td class="headerbox"><p class="name">Symbol</p></td>
       <td class="headerbox"><p class="name">${jsonfile.coin.symbol}</p></td>
       </tr>
       <tr>
       <td class="headerbox"><p class="name">Price</p></td>
       <td class="headerbox"><p class="name">$${jsonfile.coin.price}</p></td>
       </tr>
       <tr>
       <td class="headerbox"><p class="name">Volume</p></td>
       <td class="headerbox"><p class="name">${jsonfile.coin.volume}</p></td>
       </tr>
       <tr>
       <td class="headerbox"><p class="name">Price change in 1hr</p></td>
       <td class="headerbox"><p class="name">${jsonfile.coin.priceChange1h}</p></td>
       </tr>
       <tr>
       <td class="headerbox"><p class="name">Time</p></td>
       <td class="headerbox"><p class="name">${time}</p></td>
       </tr>
    
    </table>
    
    </div>`
}



