import users from '../data/users';
import roles from '../data/role_grants';

let usersView = users.map(user => {
    user.permissions = roles.find(item => item.role === user.role).modules;
    return user;
});

export function configureFakeBackend() {
    let realFetch = window.fetch;
    window.fetch = function (url, opts) {
        return new Promise((resolve, reject) => {
            // wrap in timeout to simulate server api call
            setTimeout(() => {
                if (url.endsWith('/users/login') && opts.method === 'POST') {
                    let params = JSON.parse(opts.body);

                    // find if any user matches login credentials
                    let filteredUsers = usersView.filter(user => {
                        return user.username === params.username && user.password === params.password;
                    });

                    if (filteredUsers.length) {
                        // if login details are valid return user details and fake jwt token
                        let user = filteredUsers[0];
                        let responseJson = {
                            id: user.id,
                            username: user.username,
                            role: user.role,
                            permissions: user.permissions,
                            token: 'cuhwf-18376'
                        };
                        
                        resolve({ ok: true, text: () => Promise.resolve(JSON.stringify(responseJson)) });
                    } else {
                        // else return error
                        reject('Username or password is incorrect');
                    }
                    return;
                }

                // pass through any requests not handled above
                realFetch(url, opts).then(response => resolve(response));

            }, randomServerResponse());
        });
    }
}

function randomServerResponse() { // min and max included 
    return Math.floor(Math.random() * (3000 - 500 + 1) + 500);
  }