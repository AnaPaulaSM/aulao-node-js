const mongoose = require('mongoose');

const connectToDatabase = async () => {
    try {
        await mongoose.connect(
            `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cursonodejsdicasparadev.mjpe1ta.mongodb.net/?retryWrites=true&w=majority&appName=CursoNodeJSDicasparadevs`
        );
        console.log('Conexão bem-sucedida!');
    } catch (error) {
        console.log('Ocorreu um erro ao se conectar com o banco de dados: ', error);
    }
};

module.exports = connectToDatabase