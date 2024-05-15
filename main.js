var users = [{ username:'ali el', password:'ali123456' }, { username:'amine ze', password:'12345678' }];
    
function add() {
    var emailvalue = document.getElementById('email').value;
    var passwordvalue = document.getElementById('password').value;

    if (passwordvalue.length < 8) {
        document.getElementById('message').innerText = 'Le mot de passe doit contenir au moins 8 caractères';
        return; 
    }

    var newUser = { };
    email=emailvalue;
    password=passwordvalue ;
    users.push(newUser);
    console.log(users);
}