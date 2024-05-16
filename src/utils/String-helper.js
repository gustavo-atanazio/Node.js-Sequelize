module.exports = params => {
    for (let property in params) {
        if (/ID | id/.test(property)) params[property] = Number(params[property]);
    }

    return params;
};