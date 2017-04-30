var getUser = (id, callback) => {
    var user = {
        id: id,
        name: 'Luther'
    };

    setTimeout(() => callback(user), 3000);

};

getUser(40, (user) => {
    console.log(user);
});

