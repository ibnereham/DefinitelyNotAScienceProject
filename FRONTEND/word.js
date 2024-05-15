const word1= document.getElementById('wrd1')
const word2= document.getElementById('wrd2')
const word3= document.getElementById('wrd3')
const word4= document.getElementById('wrd4')
const word5= document.getElementById('wrd5')




async function getWords() {
  try {
    const response = await fetch('http://127.0.0.1:5000/word',{method:"POST"}); // Adjust URL if necessary
    const data = await response.json();
    console.log(data)
    if (Array.isArray(data)) {
      const one = document.createElement("h3")
      const two = document.createElement("h3")
      const three = document.createElement("h3")
      const four = document.createElement("h3")
      const five = document.createElement("h3")

      one.textContent= data[0]
      two.textContent= data[1]
      three.textContent= data[2]
      four.textContent= data[3]
      five.textContent= data[4]

      word1.appendChild(one)
      word2.appendChild(two)
      word3.appendChild(three)
      word4.appendChild(four)
      word5.appendChild(five)
    } else {
      console.error('Error: Data is not an array.');
    }
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

getWords()