
function getNames() {
   const names = [];
   const positions = ['Junior developer', 'Middle developer', 'Senior developer', 'Junior QA', 'Middle QA', 'Senior QA', 'Project manager'];


   for (let i = 0; i < positions.length; i++) {
      const name = prompt(`Введіть імʼя співробітника для посади "${positions[i]}"`);
      names.push(name);
   }

   return { names, positions };
}

function createTeam(names, positions) {
   const team = [];

   for (let i = 0; i < names.length; i++) {
      const employee = {
         name: names[i],
         position: positions[i],
         salary: null,
         tellAboutYourSelf: function () {
            console.log(`Моє імʼя ${this.name}  я - ${this.position}. Я заробляю ${this.salary}$.`);
         },
      };
      team.push(employee);
   }

   return team;
}

function setSalary(team) {

   team.forEach(function (employee) {
      const position = employee.position.toLowerCase();

      if (position.indexOf('junior') !== -1) {
         employee.salary = Math.floor(Math.random() * (1000 - 500 + 1)) + 500;
      } else if (position.indexOf('middle') !== -1) {
         employee.salary = Math.floor(Math.random() * (2000 - 1500 + 1)) + 1500;
      } else if (position.indexOf('senior') !== -1) {
         employee.salary = Math.floor(Math.random() * (3000 - 2500 + 1)) + 2500;
      } else {
         employee.salary = Math.floor(Math.random() * (4500 - 4000 + 1)) + 4000;
      }
   });
}

function showTeam(team) {

   team.forEach(function (employee) {
      console.log(`${employee.name} - ${employee.position}. Зарплата - ${employee.salary}$.`);
   });
}

const { names, positions } = getNames();

const team = createTeam(names, positions);

setSalary(team);

showTeam(team);

