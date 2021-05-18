"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

 class Cliente extends _sequelize.Model {
  static init(sequelize) {
    super.init({
      name: {
        type: _sequelize2.default.STRING,
        allowNull: false,
        defaulValue: '',
        validate: {
          notNull: {
            msg: 'o camp name nao pode fica vazio',
          },
        },
      },
      lastname: {
        type: _sequelize2.default.STRING,
        allowNull: false,
        defaulValue: '',
        validate: {
          notNull: {
            msg: 'o camp Lastname nao pode fica vazio',
          },
        },
      },
      nickname: {
        type: _sequelize2.default.STRING,
        defaulValue: '',
        allowNull: false,
        unique: {
          msg: 'o nickname já consta em nosso banco de dados',
        },
        validate: {
          notNull: {
            msg: 'O campo Nickname nao pode fica fazio e precisa ter de 5 a 30 caracteres ',
          },
          len: {
            args: [5, 30],
          },
        },

      },
      address: {
        type: _sequelize2.default.STRING,
        defaulValue: '',
        allowNull: false,
        validate: {
          notNull: {
            msg: 'O campo Address nao pode fica vazio',
          },
        },
      },
      bio: {
        type: _sequelize2.default.STRING,
        defaulValue: '',
        validate: {
          len: {
            max: 100,
            msg: 'o campo bio tem o limite de 100 caracteres',
          },
        },
      },
    }, {
      sequelize,
    });
    return this;
  }
} exports.default = Cliente;
