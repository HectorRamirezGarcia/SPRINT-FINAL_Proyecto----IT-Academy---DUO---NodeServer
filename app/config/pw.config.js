const bcrypt = require("bcrypt");

const crypt = {
    async encryptpw(password) {
        const pw = await bcrypt.hash(password, 10).then(hash => {
            return hash;
        })
            .catch(err => console.error(err.message));
        return pw;
    },

    async comparepw(password, hash) {
        const resq = await bcrypt.compare(password, hash).then(res => {
            return res;         
        })
            .catch(err => console.error(err.message));
        return resq;
    }

};

module.exports = crypt;
