async function fetchUserData() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    const dataContainer = document.getElementById('api-data');

    try {
        const response = await fetch(apiUrl);
        const users = await response.json();

        // Clear the "Loading user data..." message
        dataContainer.innerHTML = '';

        // Create a <ul> element to hold user names
        const userList = document.createElement('ul');

        users.forEach(user => {
            const listItem = document.createElement('li');
            listItem.textContent = user.name;
            userList.appendChild(listItem);
        });

        // Append the list to the data container
        dataContainer.appendChild(userList);

    } catch (error) {
        // Handle any errors by showing an error message
        dataContainer.innerHTML = '';
        dataContainer.textContent = 'Failed to load user data.';
    }
}

// Run the fetchUserData function when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', fetchUserData);
