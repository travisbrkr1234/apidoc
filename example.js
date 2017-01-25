var currentUser = {
  id: 1,
  name:'Mary'
};
/**
*@api{get} /user Request User Information
*@apiName GetUser
*@apiGroup User
*@apiVersion 0.1.0
*
*@apiSuccess{Number} id The users id.
*@apiSuccess{String} name The users name.
*@apiSuccess{Number} age Calculated age from Birthday.
*@apiSuccessExample Example data on success:
*{
* id: 1,
* name: "Mary",
* age: 27
*}
*/
function getUser() {
  return {
    code: 200,
    data: currentUser
  };
}

/**
*@api{post} /{id}/{name} Update a Users Name
*@apiName setName
*@apiGroup User
*/
function setName(name) {
  if(name.length === 0) {
    return {
      code: 404,
      message: 'NameEmpty'
    };
  }
  currentUser.name = name;
  return {
    code: 204,
    name: name
  };
}

/**
*@api{delete} /user/{id} Delete a User by id
*@apiName deleteUser
*@apiGroup User
*/
function deleteUser(id) {
  return {
    code: 200,
    message: 'Deleted user: ' + id
  };
}
