export default async function getGoogleSheet(){
  const sheetId = process.env.GATSBY_SHEET_ID;
  const base = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/`;
  const sheetName = 'Sheet1';
  const key= process.env.GATSBY_GOOGLE_API_KEY //make sure you secure it!
  //const query = encodeURIComponent('Select *')
  const url = `${base}${sheetName}?alt=json&key=${key}`

  const res= await fetch (url);
  const obj = await res.json()
  
  return (obj);
}

