// curl --request GET \
//   --url https://api-eu1.tatum.io/v3/polygon/block/{hash} \
//   --header 'x-api-key: REPLACE_KEY_VALUE'
const fetch = require("node-fetch");
const getPolygonBlockByHash = async (hash) => {
    const response = await fetch(
        `https://api-eu1.tatum.io/v3/polygon/block/${hash}`,
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

getPolygonBlockByHash(
    "0xbbef059a95473d106fb869a8b7ac19fca81aac3afe3fdb3907aa79380851e5ca"
);
