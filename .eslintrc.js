module.exports = {
    "extends": "airbnb",
    "parser": "babel-eslint",
    "env": {
        "browser": true,
        "node": true
    },
    "settings": {
        "import/core-modules": ["prop-types"],
    },
    "rules": {
        "jsx-a11y/anchor-is-valid": "off"
    }
};