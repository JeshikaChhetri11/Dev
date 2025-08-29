const roleElement = document.getElementById('role');
const roles = ['Developer', 'Designer'];
let roleIndex = 0;
let charIndex = 0;

function typeRole() {
    const currentRole = roles[roleIndex];
    if (charIndex < currentRole.length) {
        roleElement.textContent += currentRole[charIndex];
        charIndex++;
        setTimeout(typeRole, 200); // type next letter after 200ms
    } else {
        // pause before deleting
        setTimeout(deleteRole, 1000);
    }
}

function deleteRole() {
    if (charIndex > 0) {
        roleElement.textContent = roleElement.textContent.slice(0, -1);
        charIndex--;
        setTimeout(deleteRole, 100); // delete one by one
    } else {
        roleIndex = (roleIndex + 1) % roles.length;
        setTimeout(typeRole, 500); // start typing next word
    }
}

// start typing initially
typeRole();
