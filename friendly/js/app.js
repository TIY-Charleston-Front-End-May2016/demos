
function addFriend(person) {
    let friends = document.getElementById('friends');

    let child = document.createElement('div');
    // Note: you could also use a template here. Instead I'm using template
    // literals, an ES6 feature, to basically serve as a template.
    child.innerHTML = `
        <div class="friend">
            <img src="${person.picture.medium}">
            <div class="info">
                <h2>${person.name.first}</h2>
                <h3>added on June 22, 2016</h3>
            </div>
        </div>
    `;

    friends.appendChild(child);
}

// Get a friend and insert them into the DOM
function getFriend() {
    // Make an AJAX request
    let request = new XMLHttpRequest();
    request.addEventListener('load', function () {
        // responseText is a string. Need to parse it as JSON.
        let friend = JSON.parse(this.responseText);
        friend = friend.results[0];

        // Some conditional logic based on the object we got back.
        let greetString = 'Good day, fellow';

        if (friend.gender === 'female') {
            greetString = 'Good day, mlady';
        }

        // Insert HTML content into the child object.
        child.innerHTML = `
            <img src='${friend.picture.medium}' />
            <p>Hi I'm ${friend.name.first}.</p>
            <button>${greetString}</button>
        `;

        // Add a click handler to the new button we just made.
        let button = child.querySelector('button');
        button.addEventListener('click', function () {
            console.log(`clicked on ${friend.name.first} button`);

            // add the person
            addFriend(friend);

            // todo: remove from main feed
        });

        // Append the new child to the parent.
        let parent = document.getElementById('stream');
        parent.appendChild(child);
    });
    // here's what i want you to do
    request.open('GET', 'https://randomuser.me/api/');
    // actually do it
    request.send();
}

window.addEventListener('load', function () {
    console.log('page has loaded');

    // setInterval(what-to-run, when-to-run)
    setInterval(getFriend, 5000);
});