const path = require('path');

/** @type {import("next").NextConfig} */
module.exports = {
    webpack: (config) => {
        config.resolve.alias = {
            ...config.resolve.alias,
            '@components': path.join(__dirname, 'src/ui/components'),
            '@config': path.join(__dirname, 'src/config'),
            '@hooks': path.join(__dirname, 'src/hooks'),
            '@views': path.join(__dirname, 'src/ui/views'),
            '@pages': path.join(__dirname, 'src/pages'),
            '@public': path.join(__dirname, './public'),
            '@store': path.join(__dirname, 'src/store'),
            '@styles': path.join(__dirname, 'src/ui/styles'),
            '@typings': path.join(__dirname, 'src/typings'),
            '@utils': path.join(__dirname, 'src/utils'),
        };

        return config;
    },
    reactStrictMode: true,
};