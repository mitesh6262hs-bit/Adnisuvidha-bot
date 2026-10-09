const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/:id', async (req, res) => {
  const { id } = req.params;
  const url = `https://suvidha.ioagpl.com/SelfBilling/GetAccountStatus/${id}`;

  const headers = {
    'User-Agent': "Mozilla/5.0 (Linux; Android 15; CPH2729 Build/UKQ1.231108.001) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/153.0.8010.36 Mobile Safari/537.36",
    'Accept-Encoding': "gzip, deflate, br, zstd",
    'sec-ch-ua-platform': "\"Android\"",
    'X-Requested-With': "XMLHttpRequest",
    'sec-ch-ua': "\"Android WebView\";v=\"153\", \"Not_A Brand\";v=\"8\", \"Chromium\";v=\"153\"",
    'sec-ch-ua-mobile': "?1",
    'Sec-Fetch-Site': "same-origin",
    'Sec-Fetch-Mode': "cors",
    'Sec-Fetch-Dest': "empty",
    'Referer': "https://suvidha.ioagpl.com/SelfBilling/AddNewAccount",
    'Accept-Language': "en-GB,en-US;q=0.9,en;q=0.8",
    'Cookie': "ASP.NET_SessionId=qnqesp05py3lz14rmp0j1wr0; AuthToken=62401a75-61aa-403f-a130-e33c2592d6e1"
  };

  try {
    const apiResponse = await fetch(url, { headers });
    const responseText = await apiResponse.text();

    res.setHeader('Content-Type', 'text/plain');
    return res.status(200).send(responseText);
  } catch (error) {
    return res.status(500).json({ success: false, error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
