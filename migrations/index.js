module.exports = {
  up: function (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.addColumn(
        'idramTransactions',
        'precheck',
        Sequelize.TINYINT
      )
    ]);
  },

  down: function (queryInterface, Sequelize) {
    // logic for reverting the changes
  }
};