let managerCard = (team) => {
    let managerCard = "";
    for (let i = 0; i < team.length; i++) {

        let role = team[i].getRole();
        let name = team[i].getName()
        let id = team[i].getId()
        let email = team[i].getEmail()

        if (role === "Manager") {
            
        let officeNumber = team[i].getOfficeNumber()
            managerCard += `<div class="card mb-4" style="width: 18rem;">
          <div class="card-body">
              <h5 class="card-title">${role}</h5>
              <ul class="list-group">
                  <li class="list-group-item active">Name: ${name}</li>
                  <li class="list-group-item">ID: ${id}</li>
                  <li class="list-group-item">Email: ${email}</li>
                  <!-- Manager -->
                  <li class="list-group-item">Office Number: ${officeNumber}</li>
              </ul>
          </div>
      </div>`

        }
    }
    return managerCard;
}
module.exports = managerCard;
