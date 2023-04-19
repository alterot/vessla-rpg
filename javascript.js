const spells = [ //array with dummy spell objects to test code - will fetch from back-end later. 
    {
        name: 'Shocking Grasp',
        level: 0,
        description: 'Lightning springs from your hand to deliver a shock to a creature you try to touch.',
    },
    {
        name: 'Chill Touch',
        level: 0,
        description: 'You create a ghostly, skeletal hand in the space of a creature within range.',

    },
    {
        name: 'Detect Magic',
        level: 1,
        description: 'For the duration, you sense the presence of magic within 30 feet of you.',
    },
    {
        name: 'Misty Step',
        level: 2,
        description: 'Briefly surrounded by silvery mist, you teleport up to 30 feet to an unoccupied space that you can see.',
    },
  ];

const spellList = document.querySelector('.spell-list ul');

function addSpell(spell) {
    const li = document.createElement('li');
    li.id = spell.name; 
  
    const name = document.createElement('div');
    const level = document.createElement('div');
    const description = document.createElement('div');
  
    name.textContent = `Spell Name: ${spell.name}`;
    level.textContent = `Spell Level: ${spell.level}`;
    description.textContent = `Description: ${spell.description}`;
  
    li.appendChild(name);
    li.appendChild(level);
    li.appendChild(description);
  
    spellList.appendChild(li);
  }
  
  

spells.forEach(spell => {
    addSpell(spell);
});