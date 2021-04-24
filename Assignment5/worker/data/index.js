let people;
function populatePeople(newPeople){
    people = newPeople;
}

function getPerson(id){
    let person = people.find((x) => x.id === id);
    if(person === undefined)
        throw new Error(`Person with id ${id} not found`);
    return person;
}


function updatePerson(id, person){
    delete person.id;
    let index = people.findIndex( x => x.id === id);
    if(index == -1){
        throw new Error(`Person with id ${id} not found`);
    }
    Object.assign(people[index], person);
    return people[index];
}

function createPerson(person){
    delete person.id;
    if(person.first_name === undefined){
        throw new Error("Incomplete person: must provide first_name");
    }
    if(person.last_name === undefined){
        throw new Error("Incomplete person: must provide last_name");
    }
    if(person.email === undefined){
        throw new Error("Incomplete person: must provide email");
    }
    if(person.gender === undefined){
        throw new Error("Incomplete person: must provide gender");
    }
    if(person.ip_address === undefined){
        throw new Error("Incomplete person: must provide ip_address");
    }

    let maxId = people.reduce((prev, curr) => (curr.id > prev) ? curr.id : prev,-1);
    person.id = maxId + 1;
    people.push(person);
    return getPerson(maxId+1); 
}

function deletePerson(id){
    let index = people.findIndex( x => x.id === id);
    if(index == -1){
        throw new Error(`Person with id ${id} not found`);
    }
    let person = people[index];
    people.splice(index,1);
    return person;
}

module.exports = {
    getPerson,
    updatePerson,
    createPerson,
    deletePerson,
    populatePeople
}

