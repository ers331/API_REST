# API_REST
<h2>API contruida com Docker , Mariadb JavaScript e MySQL<h2><br>
  
  =============================================
  <p>Comando para instalar container do docker no servidor<p>
  ==============================================<br>
  sudo apt install \
    apt-transport-https \
    ca-certificates \
    curl \
    gnupg-agent \
    software-properties-common -y
  ===========================================<br>
  curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
  ===================================================<br>
  
  
  sudo add-apt-repository \
   "deb [arch=amd64] https://download.docker.com/linux/ubuntu \
   $(lsb_release -cs) \
   stable" -y
  
  ===========================================================<br>
  sudo apt install docker-ce docker-ce-cli containerd.io -y
  ===========================================================<br>
  
  CRIANDO O CONTAINER DO MARIADB
sudo docker run --restart always -d --name (aqui você coloca nome para a criação do container) -p 3306:3306 \
    -e MYSQL_ROOT_PASSWORD=SUA_SENHA_FORTE mariadb
  
  ============================================================<br>
  
  <h2>Para Rodar o API<h2>
npm i<br>
npx sequelize db:migrate<br>
npm run start<br>

API vai roda no http://127.0.0.1:3005

Para conectar no seu servidor você precisa muda o arquivo .env<br>
 Para MySQL/MariaDB as configurações são:<br>
    require('dotenv').config();<br>

module.exports = {<br>
  dialect: 'mariadb',<br>
  host: process.env.DATABASE_HOST,<br>
  port: process.env.DATABASE_PORT,<br>
  username: process.env.DATABASE_USERNAME,<br>
  password: process.env.DATABASE_PASSWORD,<br>
  database: process.env.DATABASE,<br>
  dialectOptions: {
    timezone: 'America/Sao_Paulo',
  },<br>
  timezone: 'America/Sao_Paulo',<br>

  define: {<br>
    timestamps: true,<br>
    underscored: true,<br>
    underscoredAll: true,<br>
    createdAt: 'created_at',<br>
    updatedAt: 'updated_at',<br>
  },
    
    
};

    
    

  
