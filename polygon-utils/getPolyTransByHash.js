// curl --request GET \
//   --url https://api-eu1.tatum.io/v3/polygon/transaction/{hash} \
//   --header 'x-api-key: REPLACE_KEY_VALUE'
const fetch = require("node-fetch");
const getPolygonTransactionByHash = async (hash) => {
    const response = await fetch(
        `https://api-eu1.tatum.io/v3/polygon/transaction/${hash}`,
        {
            method: "GET",
            headers: {
                "x-api-key": "9d937646-47ff-452f-a2e5-ec682061cf4b",
            },
        }
    );
    const data = await response.json();
    console.log(data);
    return data;
};
