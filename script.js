let url = "https://api.coincap.io/v2/assets";
let input = document.getElementById("inpu");
let response;

setInterval(() => {
  response = fetch(url);
  response
    .then((value) => {
      return value.json();
    })
    .then((value) => {
      let ihtml = "";
      let b = 0;
      for (let i = 0; i < 100; i++) {
        let symbol = value["data"][b]["symbol"].toLowerCase();
        ihtml += `
    <div class="card">
    <div class="one">
    <img src="https://assets.coincap.io/assets/icons/${symbol}@2x.png" alt="" srcset="">
    <div>
    <h3>   ${value["data"][b]["name"]} </h3>
    </div>
    </div>
    <div>
<p>Price: ${value["data"][b]["priceUsd"]} USD
</div>
<div>
<p>Rank: ${value["data"][b]["rank"]}
</div>
<div>
<p>Symbol: ${value["data"][b]["symbol"].toUpperCase()}
</div>
</div>
<hr>
    `;
        b++;
      }
      coin.innerHTML = ihtml;

      for (let a = 0; a < 100; a++) {
        let f = 0;
        if (value["data"][a]["symbol"] === input.value.toUpperCase()) {
          let symbol = value["data"][a]["symbol"].toLowerCase();

          ihtml = `
<div class="card">

    <div class="one">
    <img src="https://assets.coincap.io/assets/icons/${symbol}@2x.png" alt="" srcset="">
    <div>
    <h3>   ${value["data"][a]["name"]} </h3>
    </div>
    </div>
    <div>
    <p>Price: ${value["data"][a]["priceUsd"]} USD
    </div>
    <div>
    <p>Rank: ${value["data"][a]["rank"]}
    </div>
    <div>
    <p>Symbol: ${value["data"][a]["symbol"]}
    </div>

    </div>
`;
          coin.innerHTML = ihtml;
          a = 101;
        }
        f++;
      }
    });
}, 1000);
