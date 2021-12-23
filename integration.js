const axios = require('axios');
const getAcessToken = (input) => {
    return axios(
        {
            url: `https://github.com/login/oauth/access_token`,
            data: input,
            headers: {
                'Accept': 'application/json'
            }
        }
    )
}
const getRepos = (auth) => {
    console.log('auth', auth);
    return axios(
        {
            url: `https://api.github.com/user/repos`,
            headers: {
                'Accept': 'application/json',
                'Authorization': auth
            }
        }
    )
}

const getBranches = (input, auth) => {
    return axios(
        {
            url: `https://api.github.com/repos/${input.owner}/${input.repo}/branches?per_page=100`,
            headers: {
                'Accept': 'application/json',
                'Authorization': auth
            }
        }
    )
}
const compareBranches = (input, auth) => {
    console.log(`https://api.github.com/repos/${input.owner}/${input.repo}/compare/${input.basehead}?per_page=100`);
    return axios(
        {
            url: `https://api.github.com/repos/${input.owner}/${input.repo}/compare/${input.basehead}?per_page=100`,
            headers: {
                'Accept': 'application/json',
                'Authorization': auth
            }
        }
    )
}

module.exports = {
    getAcessToken,
    getRepos,
    getBranches,
    compareBranches
}