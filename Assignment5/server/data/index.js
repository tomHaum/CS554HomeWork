
async function getPerson(id) {
    throw new Error(`Person with id ${id} could not be found`);
    return {name: "tom"}
}

module.exports = {
    getPerson
}