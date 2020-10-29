//Data fetchen en ophalen in json format

export async function dataophalen(url) {
  const antwoord = await fetch(url)
  const data = await antwoord.json (url)
  return data
}
