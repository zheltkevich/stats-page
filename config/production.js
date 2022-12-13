// Modules/Plugins
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');

// Configs
const devtoolConfig = false;
const devServerConfig = {
    client: {
        logging: 'none',
    },
    historyApiFallback: true,
};
const pluginsConfig = [
    new HtmlWebpackPlugin({
        template: path.resolve(__dirname, '../public/index.html'),
        title: 'Итоги 2022 года',
        alwaysWriteToDisk: true,
    }),
    new VueLoaderPlugin(),
    new CopyPlugin({
        patterns: [
            {
                from: './public/favicon.ico',
                to: '.',
            },
            {
                from: './public/preview.png',
                to: 'assets/',
            },
        ],
    }),
    new MiniCssExtractPlugin({
        filename: 'styles/[name].css',
        chunkFilename: 'styles/[name].css',
    }),
];
const moduleConfig = {
    rules: [
        {
            test: /\.vue$/i,
            loader: 'vue-loader',
        },
        {
            test: /\.(sa|sc|c)ss$/i,
            use: [
                MiniCssExtractPlugin.loader,
                'css-loader',
                'postcss-loader',
                {
                    loader: 'sass-loader',
                    options: {
                        additionalData: '@import "~@scss/variables/variables.scss";',
                    },
                },
            ],
            generator: {
                filename: 'styles/[name][ext]',
            },
        },
        {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
            generator: {
                filename: 'assets/images/[name][ext]',
            },
        },
        {
            test: /\.(ttf|otf|eot|woff|woff2)$/i,
            type: 'asset/resource',
            generator: {
                filename: 'assets/fonts/[name][ext]',
            },
        },
    ],
};
const optimizationConfig = {
    runtimeChunk: 'multiple',
    minimizer: [
        '...',
        new CssMinimizerPlugin(),
    ],
};
const outputConfig = {
    publicPath: 'auto',
    path: path.resolve(__dirname, '../dist'),
    filename: 'js/[name].js',
    sourceMapFilename: '[id][name].map',
    chunkFilename: '[id][name].js',
    clean: true,
};

module.exports = ({
    devtoolConfig,
    devServerConfig,
    pluginsConfig,
    moduleConfig,
    optimizationConfig,
    outputConfig,
});
