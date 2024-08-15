let users = [];

exports.createUser = (req, res) => {
    const user = {
        id: users.length + 1,
        ...req.body
    };
    users.push(user);
    res.status(201).send(user);
};

exports.getAllUsers = (req, res) => {
    res.status(200).send(users);
};

exports.getUserById = (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) {
        return res.status(404).send();
    }
    res.status(200).send(user);
};

exports.updateUser = (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) {
        return res.status(404).send();
    }
    Object.assign(user, req.body);
    res.status(200).send(user);
};

exports.deleteUser = (req, res) => {
    const userIndex = users.findIndex(u => u.id === parseInt(req.params.id));
    if (userIndex === -1) {
        return res.status(404).send();
    }
    const deletedUser = users.splice(userIndex, 1);
    res.status(200).send(deletedUser);
};