import { createUser, getAllUsers, getUserById, updateUser, deleteUser } from './controller';

describe('Controller Tests', () => {
    let req, res;

    beforeEach(() => {
        req = {
            body: {},
            params: {}
        };
        res = {
            status: jest.fn().mockReturnThis(),
            send: jest.fn()
        };
    });

    test('createUser - should create a user and return status 402', () => {
        req.body = { name: 'John Doe' };
        createUser(req, res);
        expect(res.status).toHaveBeenCalledWith(402);
        expect(res.send).toHaveBeenCalledWith({
            user: { id: 1, name: 'John Doe' },
            link: 'https://http.cat/402'
        });
    });

    test('getAllUsers - should return all users with status 200', () => {
        createUser({ body: { name: 'John Doe' } }, res);
        getAllUsers(req, res);
        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.send).toHaveBeenCalledWith({
            users: [{ id: 1, name: 'John Doe' }],
            link: 'https://http.cat/200'
        });
    });

    test('getUserById - should return a user by ID with status 200', () => {
        createUser({ body: { name: 'John Doe' } }, res);
        req.params.id = 1;
        getUserById(req, res);
        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.send).toHaveBeenCalledWith({
            user: { id: 1, name: 'John Doe' },
            link: 'https://http.cat/200'
        });
    });

    test('getUserById - should return 404 if user not found', () => {
        req.params.id = 2;
        getUserById(req, res);
        expect(res.status).toHaveBeenCalledWith(404);
        expect(res.send).toHaveBeenCalledWith({
            link: 'https://http.cat/404'
        });
    });

    test('updateUser - should update an existing user and return status 200', () => {
        createUser({ body: { name: 'John Doe' } }, res);
        req.params.id = 1;
        req.body = { name: 'Jane Doe' };
        updateUser(req, res);
        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.send).toHaveBeenCalledWith({
            user: { id: 1, name: 'Jane Doe' },
            link: 'https://http.cat/200'
        });
    });

    test('updateUser - should return 404 if user not found', () => {
        req.params.id = 2;
        req.body = { name: 'Jane Doe' };
        updateUser(req, res);
        expect(res.status).toHaveBeenCalledWith(404);
        expect(res.send).toHaveBeenCalledWith({
            link: 'https://http.cat/404'
        });
    });

    test('deleteUser - should delete a user and return status 200', () => {
        createUser({ body: { name: 'John Doe' } }, res);
        req.params.id = 1;
        deleteUser(req, res);
        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.send).toHaveBeenCalledWith({
            deletedUser: [{ id: 1, name: 'John Doe' }],
            link: 'https://http.cat/200'
        });
    });

    test('deleteUser - should return 404 if user not found', () => {
        req.params.id = 2;
        deleteUser(req, res);
        expect(res.status).toHaveBeenCalledWith(404);
        expect(res.send).toHaveBeenCalledWith({
            link: 'https://http.cat/404'
        });
    });
});