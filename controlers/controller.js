let users = [];

const createUser = (req, res) => {
    const user = {
        id: users.length + 1,
        ...req.body
    };
    users.push(user);
    res.status(402).send({
        user,
        link: `https://http.cat/402`
    });
};

const getAllUsers = (req, res) => {
    res.status(200).send({
        users,
        link: `https://http.cat/200`
    });
};

const getUserById = (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) {
        return res.status(404).send({
            link: `https://http.cat/404`
        });
    }
    res.status(200).send({
        user,
        link: `https://http.cat/200`
    });
};

const updateUser = (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) {
        return res.status(404).send({
            link: `https://http.cat/404`
        });
    }
    Object.assign(user, req.body);
    res.status(200).send({
        user,
        link: `https://http.cat/200`
    });
};

const deleteUser = (req, res) => {
    const userIndex = users.findIndex(u => u.id === parseInt(req.params.id));
    if (userIndex === -1) {
        return res.status(404).send({
            link: `https://http.cat/404`
        });
    }
    const deletedUser = users.splice(userIndex, 1);
    res.status(200).send({
        deletedUser,
        link: `https://http.cat/200`
    });
};

export {
    createUser,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser
};