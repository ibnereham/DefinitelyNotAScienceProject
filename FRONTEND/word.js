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
      for (const word of data) {
        switch (word){
            case word.startsWith("1"):
                console.log(word)
                x = document.createElement("h3");
                x.textContent = word;
                word1.addChild(x)
            case word.startsWith("2"):
                console.log(word)
                x = document.createElement("h3");
                x.textContent = word;
                word2.addChild(x)
            case word.startsWith("3"):
                console.log(word)
                x = document.createElement("h3");
                x.textContent = word;
                word3.addChild(x)
            case word.startsWith("4"):
                console.log(word)
                x = document.createElement("h3");
                x.textContent = word;
                word4.addChild(x)
            case word.startsWith("5"):
                console.log(word)
                x = document.createElement("h3");
                x.textContent = word;
                word5.addChild(x)
        }
      }
    } else {
      console.error('Error: Data is not an array.');
    }
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

getWords()