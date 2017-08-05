module.exports = {
  "parserOptions": {
	"ecmaVersion": 6,
	"sourceType": "module"
  },
  "extends": [
	"eslint:recommended"
  ],
  "rules": {
	"no-with": "error",
	"one-var": ["error", "never"],
	"no-empty": "error",
	"no-console": "off",
	"no-cond-assign": ["error", "always"],
	"brace-style": "error",
	"no-mixed-spaces-and-tabs": "error",
	"no-multiple-empty-lines": "error",
	"no-multi-str": "error",
	"max-len": ["warn", {
		"code": 120,
		"ignoreComments": true,
		"ignoreTrailingComments": true,
		"ignoreUrls": true
	}],
	"yoda": ["error", "never"],
	"space-unary-ops": "error",
	"no-spaced-func": "error",
	"space-before-function-paren": ["error", "never"],
	"new-cap": "error",
	"key-spacing": ["error", {
		"beforeColon": false,
		"afterColon": true
	}],
	"space-before-blocks": ["error", "always"],
	"consistent-this": ["error", "self"],
	"array-bracket-spacing": ["error", "never"],
	"space-in-parens": ["error", "never"],
	"no-trailing-spaces": ["error", { "skipBlankLines": true }],
	"space-infix-ops": "error",
	"keyword-spacing": ["error", { "before": true, "after": true}],
	"curly": ["error", "all"],
	"operator-linebreak": ["error", "after"],
	"semi": ["error", "always"],
	"no-extra-semi": "error",
	"comma-dangle": ["error", "never"],
	"comma-spacing": ["error", {"before": false, "after": true}],
	"linebreak-style": ["off", "unix"],
	"indent": ["error", "tab", {"SwitchCase": 1}],
	"quotes": ["error", "double", {"avoidEscape": true}],
	"dot-notation": ["warn", {"allowPattern": "^[a-z]+(_[a-z]+)+$"}],
	"wrap-iife": ["error", "inside"]
  },
  "globals": {
	"Vue": true,
	"_": true
  }
};
