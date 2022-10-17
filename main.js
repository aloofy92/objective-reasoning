// ┌─────────────────┐
// │ Your code here! │	
// └─────────────────┘

/*
isAdmin
parameters:  user object

user = {
    firstName: String
    lastName: String
    userRole: String
}

return boolean - true or false

(userRole === Admin)
*/


function isAdmin(user){
    if(user.userRole === 'ADMIN'){
        return true;
    } else {
        return false;
    }
}

let user1 = {
    firstName: 'Eileen',
    lastName: 'Smith',
    userRole: 'REGULAR_USER'
};

let user2 = {
    firstName: 'George',
    lastName: 'Agnes',
    userRole: 'ADMIN'
}

console.log(isAdmin(user2));








function getEmail(user){
    user = (`${user.firstName}.${user.lastName}@codeimmersives.com`);  
    return user.toLowerCase();
}

let user3 = {
    firstName: 'Bre',
    lastName: 'Hickerson'
}
console.log(getEmail(user3));







function getPlaylistLength(playlist){
    return playlist.songs.length;

}
console.log(getPlaylistLength({
    name: 'my jamz',
    songs: []
}
))






    function getHardestHomework(homeworkArray){

        let lowestHwScore= homeworkArray[0].averageScore;
       let lowestHwName = homeworkArray[0].name;

        for (let i = 0; i < homeworkArray.length; i++) {

            if(homeworkArray[i].averageScore < lowestHwScore){
                lowestHwScore = homeworkArray[i].averageScore;
                lowestHwName = homeworkArray[i].name;
        }
    }
    return lowestHwName;
}

console.log(getHardestHomework([
    {name: 'hip-hip-array', averageScore: 1},
    {name: 'wait-i-object', averageScore: 200},
    {name: 'objective-reasoning', averageScore: 500},
]))





function createPhonebook(namesArray, numbersArray){
    
    let phonebook = {};

    for(let i = 0; i < numbersArray.length;  i++){
        phonebook[namesArray[i]] = numbersArray[i];
    }
    return phonebook;
}
console.log(createPhonebook(["Matilda", "Devon", "Roger"], [
    "222-333-444", "333-222-111", "555-666-777"]));














// ┌─────────────────────────────────────┐
// │ Do not modify code below this line. │
// └─────────────────────────────────────┘

if (typeof isAdmin === 'undefined') {
    isAdmin = undefined;
}
if (typeof getEmail === 'undefined') {
    getEmail = undefined;
}
if (typeof getPlaylistLength === 'undefined') {
    getPlaylistLength = undefined;
}
if (typeof getHardestHomework === 'undefined') {
    getHardestHomework = undefined;
}
if (typeof createPhonebook === 'undefined') {
    createPhonebook = undefined;
}

module.exports = {
    isAdmin,
    getEmail,
    getPlaylistLength,
    getHardestHomework,
    createPhonebook
};