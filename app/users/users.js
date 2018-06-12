const users = [];
users.push({id: users.length + 1, name: 'Jim', age: 20});
users.push({id: users.length + 1, name: 'Kate', age: 30});
users.push({id: users.length + 1, name: 'Larry', age: 40});

var repository = {
  add: function(user) {
    if(!user.name || !user.age) throw Error(`Broken user info!`);
    users.push({id: users.length + 1, name:user.name, age:user.age});
  },
  getAll: function() {
    return users;
  },
  getUsersByName: function(name) {
    return users.filter(u => u.name === name);
  },
  update: function(id, user) {
    if(!user.name || !user.age) throw Error(`Broken user info!`);
    users.map(u => {
      if(u.id == id) {
        u.name = user.name;
        u.age = parseInt(user.age);
      }
    });
  }
};

module.exports = repository;
