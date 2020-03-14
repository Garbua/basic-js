module.exports = function createDreamTeam(members) {

  if(Array.isArray(members) === false){
    return false;
  }

  let name = "";
 
  let arr = [];
  for (let k of members){
    if(typeof k === "string") {
      arr.unshift(k.trim());
    }
  }

  for(let key of arr){
    name += key[0].toUpperCase();
  }

    return name = (name.split('').sort()).join('');
};