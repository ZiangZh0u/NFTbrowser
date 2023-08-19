const origin = "https://deep-index.moralis.io";
const apiKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub25jZSI6IjQwMWEyMTYwLTM5NmUtNDVmZS1hNDk4LTg0MzIwNjVlOWQxZSIsIm9yZ0lkIjoiMzUzODUzIiwidXNlcklkIjoiMzYzNjgzIiwidHlwZUlkIjoiMDFmYTFiN2EtMjdjMC00ZjIyLWE4NzMtNWEzYWJhMmMxMzJkIiwidHlwZSI6IlBST0pFQ1QiLCJpYXQiOjE2OTI0Nzk1NTMsImV4cCI6NDg0ODIzOTU1M30.7vfaNLqsVH1DYyRbCK_yV3TzEHVzH0WKMgONXh0jYB8";
export const getContractNFTs = async (tokenAddress) => {
  const url = new URL(`${origin}/api/v2/nft/${tokenAddress}`);
  url.searchParams.append("chain", "eth");
  url.searchParams.append("format", "decimal");
  url.searchParams.append("limit", "20");

  const response = await fetch(url, {
    headers: {
      accept: "application/json",
      "X-API-KEY": apiKey,
    },
  });
  return response.json();
};

export const getContractTrades = async (tokenAddress) => {
  const url = new URL(`${origin}/api/v2/nft/${tokenAddress}/trades`);
  url.searchParams.append("chain", "eth");
  url.searchParams.append("marketplace", "opensea");
  url.searchParams.append("limit", "20");

  const response = await fetch(url, {
    headers: {
      accept: "application/json",
      "X-API-KEY": apiKey,
    },
  });
  return response.json();
};

export const getNFTTransfers = async (tokenAddress, tokenId) => {
  const url = new URL(
    `${origin}/api/v2/nft/${tokenAddress}/${tokenId}/transfers`
  );
  url.searchParams.append("chain", "eth");
  url.searchParams.append("format", "decimal");
  url.searchParams.append("limit", "20");

  const response = await fetch(url, {
    headers: {
      accept: "application/json",
      "X-API-KEY": apiKey,
    },
  });
  return response.json();
};
