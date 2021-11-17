const getTea = (name = 'Black') => {
    return {
        drinkType: 'Tea',
        name,
    };
};

module.exports = {
    getTea,
};