const spells = [
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

  const spellsJSON = JSON.stringify(spells);
  
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
  
  const levelFilter = document.querySelector('#level-filter');
  levelFilter.addEventListener('change', filterSpellsByLevel);
  
  function filterSpellsByLevel() {
    const selectedLevel = this.value; // Get the selected value from the dropdown menu
    const spellItems = document.querySelectorAll('.spell-list li'); // Get all the spell list items
  
    spellItems.forEach((item) => {
      const spellLevel = item.querySelector('div:nth-child(2)').textContent.slice(-1); // Get the spell level from the second div in the list item
      
      // Check if the selected level matches the spell's level, or if "All" is selected
      if (selectedLevel === '' || selectedLevel === spellLevel) {
        item.style.display = 'block'; // Show the spell list item
      } else {
        item.style.display = 'none'; // Hide the spell list item
      }
    });
  }
  