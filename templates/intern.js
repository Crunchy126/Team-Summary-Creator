let internCard = (team) => {
    let internCard = "";
    console.log(team);
    
    for (let i = 0; i < team.length; i++) {

        let role = team[i].getRole();
        let name = team[i].getName();
        let id = team[i].getId();
        let email = team[i].getEmail();
        
    

        if (role === "Intern") {
            let school = team[i].getSchool();
            internCard += `<div class="card mb-4" style="width: 18rem;">
            <div class="card-body">
            <h5 class="card-title">${role}</h5>
            <ul class="list-group">
            <li class="list-group-item active">Name : ${name}</li>
            <li class="list-group-item">id: ${id}</li>
            <li class="list-group-item">Email: ${email}</li>
            <!-- INTERN -->
            <li class="list-group-item">School / University: ${school}</li>
            </ul>
            </div>
            </div>`
        }
    }
    return internCard;
}
module.exports = internCard;