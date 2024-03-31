const  populate = async (value, currency) => {
    let myStr = "";
    url = "https://api.currencyapi.com/v3/latest?apikey=cur_live_mCNEh0lKVCefCwOoNIrB3OFPIp9nYgf5tey0wq2I&base_currency=" +currency
    let response = await fetch(url)
    let rJson = await response.json();
    document.querySelector(".output").style.display ="block";

    console.log(rJson);

    // traversing on Json Data
     for(let key of Object.keys(rJson["data"])){
          myStr +=` <tr>
                        <td>${key}</td>
                        <td>${rJson["data"][key]["code"]}</td>
                        <td>${rJson["data"][key]["value"] * value}</td>
                    </tr>
                     `
       
     }


    const tableBody = document.querySelector("tbody");
     tableBody.innerHTML = myStr;

}

const btn = document.querySelector(".btn")
btn.addEventListener("click" , (e) =>{
    e.preventDefault();
    const value =parseInt(document.querySelector("input[name='quantity']").value);
    const currency = document.querySelector("select[name='currency']").value;
    populate(value,currency);
})


