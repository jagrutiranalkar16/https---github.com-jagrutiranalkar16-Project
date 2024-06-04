const plants = [];


document.getElementById('addPlantButton').onclick = function() {
  const plantName = document.getElementById('plantName').value.trim();
  const waterDate = document.getElementById('waterDate').value;
  const fertilizeDate = document.getElementById('fertilizeDate').value;

  if (isValidInput(plantName, waterDate, fertilizeDate)) {
    plants.push({ name: plantName, nextWatering: waterDate, nextFertilizing: fertilizeDate });//The push method add elements to the end of the array.
    displayPlants();
    clearInputs();
  }
};

function isValidInput(name, waterDate, fertilizeDate) {
  if (!name) {
    //debugger
    alert("Plant name cannot be empty");
    return false;
  }
  
  const today = new Date().toISOString().split('T')[0];
  if (!waterDate || waterDate < today) {
    alert("Please provide a future date for watering");
    return false;
  }
  
  if (!fertilizeDate || fertilizeDate < today) {
    alert("Please provide a future date for fertilizing");
    return false;
  }
  
  return true;
}

function displayPlants() {
  const plantList = document.getElementById('plantList');
  plantList.innerHTML = '';
  
  for (var i = 0; i < plants.length; i++) {
    var plant = plants[i];
    var plantCard = document.createElement('div');
    plantCard.className = 'plant-card';
    plantCard.innerHTML = `
      <h2>${plant.name}</h2>
      <p><strong>Next Watering:</strong> ${plant.nextWatering}</p>
      <p><strong>Next Fertilizing:</strong> ${plant.nextFertilizing}</p>
      <button onclick="removePlant(${i})">Remove</button>
    `;
    plantList.appendChild(plantCard);//The appendChild() method appends a element as the last child of an element.
  }
}

//remove element from an array based on the index
function removePlant(index) {
  plants.splice(index, 1);
  displayPlants();
}
//clear inputs 
function clearInputs() {
  document.getElementById('plantName').value = '';
  document.getElementById('waterDate').value = '';
  document.getElementById('fertilizeDate').value = '';
}


/*document.getElementById('submitbtn').onclick= function(){
    const firstName=document.getElementById('firstName');
    const lastName= document.getElementById('lastName');
    const email= document.getElementById('emailID');
    if (!firstName) {
        debugger
        alert("Please provide First Name");
        return false;
      }
      if (!email) {
        alert("Please provide Email ID");
        return false;
      }
      if (!lastName) {
        alert("Please provide Last Name");
        return false;
      }
      if (!amt) {
        alert("Please select amount");
        return false;
      }
    true;
}*/
