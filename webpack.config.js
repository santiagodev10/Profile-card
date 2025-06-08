const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js', // Punto de entrada de la aplicación.
    output: {
        path: path.resolve(__dirname, 'dist'), // Indica donde se guardarán los archivos compilados, dist suele ser la carpeta estándar de distribución.
        filename: 'main.js'
    },
    resolve: { // Resolve indica que extensiones considerara webpack al importar módulos.
        extensions: ['.js']
    },
    module: {
        rules: [ // Las reglas de módulos permiten especificar como se deben procesar diferentes archivos.
            {
                test: /\.js$/, // Test indica que archivos deben ser procesados por esta regla, en este caso todos los archivos .js.
                exclude: /node_modules/, // Excluye la carpeta node_modules para evitar procesar dependencias externas.
                use: {
                    loader: 'babel-loader' // Babel-loader permite transpilar el código JavaScript moderno a una versión compatible con navegadores más antiguos.
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({ // Creando una instancia de HtmlWebpackPlugin para generar un archivo HTML.
        inject: true, // Indica que los scripts generados por webpack deben ser inyectados en el HTML.
        template: './public/index.html', // Indica el archivo HTML que se usará como plantilla.
        filename: 'index.html'
        })
    ]
};