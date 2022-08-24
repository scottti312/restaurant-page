export default function menuContent() {
  let content = document.createElement('div');
  content.id = 'content';
  let foodTime = document.createElement('div');
  let dinner = document.createElement('button');
  let lunch = document.createElement('button');
  let dessert = document.createElement('button');
  foodTime.classList.add('food-time');
  dinner.innerHTML = 'DINNER';
  lunch.innerHTML = 'LUNCH';
  dessert.innerHTML = 'DESSERT';
  foodTime.appendChild(dinner);
  foodTime.appendChild(lunch);
  foodTime.appendChild(dessert);
  content.appendChild(foodTime);

  let dinnerMenu = dinnerContent();
  let lunchMenu = lunchContent();
  let dessertMenu = dessertContent();
  content.appendChild(dinnerMenu);
  dinner.style.backgroundColor = '#C0AB68';

  dinner.addEventListener('click', () => {
    if (!document.getElementById('dinner')) {
      content.removeChild(content.lastChild);
      content.appendChild(dinnerMenu);
      dinner.style.backgroundColor = '#C0AB68';
      lunch.style.backgroundColor = 'transparent';
      dessert.style.backgroundColor = 'transparent';
    }
  });
  lunch.addEventListener('click', () => {
    if (!document.getElementById('lunch')) {
      content.removeChild(content.lastChild);
      content.appendChild(lunchMenu);
      dinner.style.backgroundColor = 'transparent';
      lunch.style.backgroundColor = '#C0AB68';
      dessert.style.backgroundColor = 'transparent';
    }
  });
  dessert.addEventListener('click', () => {
    if (!document.getElementById('dessert')) {
      content.removeChild(content.lastChild);
      content.appendChild(dessertMenu);
      dinner.style.backgroundColor = 'transparent';
      lunch.style.backgroundColor = 'transparent';
      dessert.style.backgroundColor = '#C0AB68';
    }
  });
  return content;
}

function dinnerContent() {
  let dinnerContent = document.createElement('div');
  dinnerContent.id = 'dinner';
  let firstSection = document.createElement('div');
  let firstItem = document.createElement('div');
  let firstDesc = document.createElement('div');
  firstItem.innerText = 'Spaghetti and Meatballs'
  firstItem.classList.add('item');
  firstDesc.innerText = 'with marinara sauce and fresh basil';
  firstDesc.classList.add('description');
  firstSection.appendChild(firstItem);
  firstSection.appendChild(firstDesc);
  firstSection.classList.add('section');
  let secondSection = document.createElement('div');
  let secondItem = document.createElement('div');
  let secondDesc = document.createElement('div');
  secondItem.innerText = 'Ribeye Steak';
  secondItem.classList.add('item');
  secondDesc.innerText = '28 day dry aged';
  secondDesc.classList.add('description');
  secondSection.appendChild(secondItem);
  secondSection.appendChild(secondDesc);
  secondSection.classList.add('section');
  let thirdSection = document.createElement('div');
  let thirdItem = document.createElement('div');
  let thirdDesc = document.createElement('div');
  thirdItem.innerText = 'Roasted Duck';
  thirdItem.classList.add('item');
  thirdDesc.innerText = 'with green garlic, tatsoi and berries'
  thirdDesc.classList.add('description');
  thirdSection.appendChild(thirdItem);
  thirdSection.appendChild(thirdDesc);
  thirdSection.classList.add('section');
  let fourthSection = document.createElement('div');
  let fourthItem = document.createElement('div');
  let fourthDesc = document.createElement('div');
  fourthItem.innerText = 'Salmon';
  fourthItem.classList.add('item');
  fourthDesc.classList.add('description');
  fourthSection.classList.add('section');
  fourthDesc.innerText = 'with parsnips and ginger';
  fourthSection.appendChild(fourthItem);
  fourthSection.appendChild(fourthDesc);

  dinnerContent.appendChild(firstSection);
  dinnerContent.appendChild(secondSection);
  dinnerContent.appendChild(thirdSection);
  dinnerContent.appendChild(fourthSection);
  return dinnerContent;
}


function lunchContent() {
  let lunchContent = document.createElement('div');
  lunchContent.id = 'lunch';
  let firstSection = document.createElement('div');
  let firstItem = document.createElement('div');
  let firstDesc = document.createElement('div');
  firstItem.classList.add('item');
  firstDesc.classList.add('description');
  firstSection.classList.add('section');
  firstItem.innerText = 'Panini';
  firstDesc.innerText = 'Served with salad';
  firstSection.appendChild(firstItem);
  firstSection.appendChild(firstDesc);
  let secondSection = document.createElement('div');
  let secondItem = document.createElement('div');
  let secondDesc = document.createElement('div');
  secondItem.classList.add('item');
  secondDesc.classList.add('description');
  secondSection.classList.add('section');
  secondItem.innerText = 'Penn Cove Clams and Mussels';
  secondDesc.innerText = 'with garlic, parsley, a touch of cream and garlic toast';
  secondSection.appendChild(secondItem);
  secondSection.appendChild(secondDesc);
  let thirdSection = document.createElement('div');
  let thirdItem = document.createElement('div');
  let thirdDesc = document.createElement('div');
  thirdItem.classList.add('item');
  thirdDesc.classList.add('description');
  thirdSection.classList.add('section');
  thirdItem.innerText = 'Eggplant Zurita';
  thirdDesc.innerText = 'with caviar, oyster and nori';
  thirdSection.appendChild(thirdItem);
  thirdSection.appendChild(thirdDesc);

  lunchContent.appendChild(firstSection);
  lunchContent.appendChild(secondSection);
  lunchContent.appendChild(thirdSection);

  return lunchContent;
}

function dessertContent() {
  let dessertContent = document.createElement('div');
  dessertContent.id = 'dessert';
  let firstSection = document.createElement('div');
  let firstItem = document.createElement('div');
  let firstDesc = document.createElement('div');
  firstItem.classList.add('item');
  firstDesc.classList.add('description');
  firstSection.classList.add('section');
  firstItem.innerText = 'Smoked Cacao';
  firstDesc.innerText = 'with nougatine and ice cream';
  firstSection.appendChild(firstItem);
  firstSection.appendChild(firstDesc);
  let secondSection = document.createElement('div');
  let secondItem = document.createElement('div');
  let secondDesc = document.createElement('div');
  secondItem.classList.add('item');
  secondDesc.classList.add('description');
  secondSection.classList.add('section');
  secondItem.innerText = 'Dark Chocolate Sorbet';
  secondDesc.innerText = 'with koji and spruce tips';
  secondSection.appendChild(secondItem);
  secondSection.appendChild(secondDesc);
  let thirdSection = document.createElement('div');
  let thirdItem = document.createElement('div');
  let thirdDesc = document.createElement('div');
  thirdItem.classList.add('item');
  thirdDesc.classList.add('description');
  thirdSection.classList.add('section');
  thirdItem.innerText = 'Rhubarb';
  thirdDesc.innerText = 'with hazelnut and strawberry';
  thirdSection.appendChild(thirdItem);
  thirdSection.appendChild(thirdDesc);
  let fourthSection = document.createElement('div');
  let fourthItem = document.createElement('div');
  let fourthDesc = document.createElement('div');
  fourthItem.classList.add('item');
  fourthDesc.classList.add('description');
  fourthSection.classList.add('section');
  fourthItem.innerText = 'Snickers';
  fourthDesc.innerText = 'wrapper included';
  fourthSection.appendChild(fourthItem);
  fourthSection.appendChild(fourthDesc);

  dessertContent.appendChild(firstSection);
  dessertContent.appendChild(secondSection);
  dessertContent.appendChild(thirdSection);
  dessertContent.appendChild(fourthSection);

  return dessertContent;
}
