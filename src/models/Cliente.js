import Sequelize, { Model } from 'sequelize';

export default class Cliente extends Model {
  static init(sequelize) {
    super.init({
      name: {
        type: Sequelize.STRING,
        allowNull: false,
        defaulValue: '',
        validate: {
          notNull: {
            msg: 'o camp name nao pode fica vazio',
          },
        },
      },
      lastname: {
        type: Sequelize.STRING,
        allowNull: false,
        defaulValue: '',
        validate: {
          notNull: {
            msg: 'o camp Lastname nao pode fica vazio',
          },
        },
      },
      nickname: {
        type: Sequelize.STRING,
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
        type: Sequelize.STRING,
        defaulValue: '',
        allowNull: false,
        validate: {
          notNull: {
            msg: 'O campo Address nao pode fica vazio',
          },
        },
      },
      bio: {
        type: Sequelize.STRING,
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
}
