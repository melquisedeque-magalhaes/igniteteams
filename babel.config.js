module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        "module-resolver", 
        {
          "root": ["./src"],
          "alias": {
            "@screens": "./src/screens",
            "@components": "./src/components",
            "@assets": "./src/assets",
            "@routes": "./src/routes",
            "@utils": "./src/utils",
            "@storage": "./src/storage",
            "@hooks": "./src/hooks",
            "@constants": "./src/constants",
            "@typings": "./src/typings"
          }
        }
      ]
    ]
  };
};
