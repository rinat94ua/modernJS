const data = [
  {
    name: 'John Doe',
    age: 32,
    gender: 'male',
    lookingfor: 'female',
    location: 'Boston MA',
    image: 'https://randomuser.me/api/portraits/men/82.jpg'
  },
  {
    name: 'Jen Smith',
    age: 26,
    gender: 'female',
    lookingfor: 'male',
    location: 'Miami FL',
    image: 'https://randomuser.me/api/portraits/women/2.jpg'
  },
  {
    name: 'William Johnson',
    age: 38,
    gender: 'male',
    lookingfor: 'female',
    location: 'Lynn MA',
    image: 'https://randomuser.me/api/portraits/men/83.jpg'
  }
];

const profiles = profileIterator(data);

// call first profile
nextProfile();

// NExt event
document.getElementById('next').addEventListener('click', nextProfile);

// Next profile display
function nextProfile(){
  const currentProfile = profiles.next().value;
  if(currentProfile !== undefined){
    document.getElementById('profileDisplay').innerHTML = `
              <ul class="list-group">
                <li class="list-group-item">${currentProfile.name}</li>
                <li class="list-group-item">${currentProfile.age}</li>
                <li class="list-group-item">${currentProfile.gender}</li>
                <li class="list-group-item">${currentProfile.lookingfor}</li>
                <li class="list-group-item">${currentProfile.location}</li>
              </ul>`;
    document.getElementById('imageDisplay').innerHTML = `<img src="${currentProfile.image}">`
  } else {
    // No more profiles
    window.location.reload();
  }
}

// Profile Iterator
function profileIterator(profiles) {
  let nextIndex = 0;

  return {
    next: function() {
      return nextIndex < profiles.length ? 
              {value: profiles[nextIndex++], done: false} : {done: true};
    }
  };
}