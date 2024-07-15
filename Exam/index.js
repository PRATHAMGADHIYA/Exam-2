let users = []
let totalsalary=Number(0)

const idmaker = () => {
    document.getElementById("tbody").innerhtml = ""

    for (let i = 0; i <= users.length; i++) {
        let tr = document.createElement('tr')

        
        let td=document.createElement('td')
        td.innerHTML = i + 1

        let td1 = document.createElement('td')
        td1.innerHTML = users[i].name
        let td2 = document.createElement('td')
        td2.innerHTML = users[i].email
        let td3 = document.createElement('td')
        td3.innerHTML = users[i].number
        let td4 = document.createElement('td')
        td4.innerHTML = users[i].salary

        tr.append(td, td1, td2, td3, td4)

        document.getElementById("tbody").append(tr)
    }
}
const handledata = (events) => {
    events.preventDefault();

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let number = document.getElementById('number').value;
    let salary = document.getElementById('salary').value;


    let user = {
        name: name,
        email: email,
        number: number,
        salary: salary,
    }
    users.push(user);
    idmaker();
    totalsalary+=Number(salary);
    console.log(totalsalary);

    document.getElementById('totalsalary').innerHTML = `Totalsalary:${totalsalary}`
}
document.getElementById('Userdata').addEventListener('submit', handledata);