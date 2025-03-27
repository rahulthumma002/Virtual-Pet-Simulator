const pet = {
    hunger: 50,
    happiness: 50,
    energy: 50,
    isSleeping: false
};

const hungerBar = document.getElementById('hunger-bar');
const happinessBar = document.getElementById('happiness-bar');
const energyBar = document.getElementById('energy-bar');
const petElement = document.getElementById('pet');

function updateStatus() {
    hungerBar.style.width = `${pet.hunger}%`;
    happinessBar.style.width = `${pet.happiness}%`;
    energyBar.style.width = `${pet.energy}%`;
    
    // Update pet appearance
    petElement.className = 'pet';
    if(pet.isSleeping) {
        petElement.classList.add('sleeping');
        petElement.textContent = '😴';
    } else if(pet.happiness > 60) {
        petElement.classList.add('happy');
        petElement.textContent = '😊';
    } else if(pet.hunger > 70) {
        petElement.classList.add('sad');
        petElement.textContent = '😢';
    } else {
        petElement.textContent = '🐶';
    }
}

function feed() {
    if(pet.isSleeping) return;
    pet.hunger = Math.max(0, pet.hunger - 15);
    pet.energy = Math.min(100, pet.energy + 5);
    updateStatus();
}

function play() {
    if(pet.isSleeping) return;
    pet.happiness = Math.min(100, pet.happiness + 15);
    pet.energy = Math.max(0, pet.energy - 10);
    pet.hunger = Math.min(100, pet.hunger + 10);
    updateStatus();
}

function sleep() {
    pet.isSleeping = !pet.isSleeping;
    if(pet.isSleeping) {
        pet.energy = 100;
    }
    updateStatus();
}

// Game loop
setInterval(() => {
    if(!pet.isSleeping) {
        pet.hunger = Math.min(100, pet.hunger + 2);
        pet.happiness = Math.max(0, pet.happiness - 1);
        pet.energy = Math.max(0, pet.energy - 1);
        updateStatus();
    }
}, 5000);

// Initial status update
updateStatus();