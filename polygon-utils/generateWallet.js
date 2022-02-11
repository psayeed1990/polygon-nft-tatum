//import fetch
const fetch = require("node-fetch");

const generateWallet = async () => {
    //generate wallet from tatum.io
    //--header 'x-api-key: 19469541-e3de-4025-8e42-75e5a21d77af'

    const response = await fetch(
        "https://api-eu1.tatum.io/v3/polygon/wallet?mnemonic=card fade wait rapid security olympic science public toilet misery dad profit",
        {
            method: "GET",
            headers: {
                "x-api-key": "19469541-e3de-4025-8e42-75e5a21d77af",
            },
        }
    );

    const data = await response.json();
    console.log(data);
    return data;
};

generateWallet();
