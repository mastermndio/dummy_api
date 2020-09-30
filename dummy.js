const axios = require('axios')
//Place your api endpoint here
const url = "https://dummyapi.io/data/api/user"

//replace with own personal api key
const config = {
  headers: {
    'app-id': 'YOUR_API_KEY'
  }
}

axios.get(url, config).then(resp => {
  names = resp.data.data
  console.log(names)
  //  for (const name in names) {
  //    console.log(names[name].email)
  //  }
});
