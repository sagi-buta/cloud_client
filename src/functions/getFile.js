import axios from 'axios';
// import apiCalls from './apiCalls';
// import { useContext } from 'react';
// import { DataContext } from '../context';

async function getFile(fullUrl) {
  console.log("getFile: " + fullUrl);
  let info = {}
  try {
     await axios
      .get(fullUrl, { responseType: 'arraybuffer' })
      // .get(fullUrl)
      .then((response) => {
        console.log(22,response);
        let contentType = response.headers.getContentType();
        let file=response.data
        let blob = new Blob([file], { type: contentType });
        let fileUrl = URL.createObjectURL(blob);
        info = { fileUrl, contentType };
      console.log(500, response,info);
      })
  } catch (error) {
    console.log(error);
  }
  return info;
}
export default ({ getFile })