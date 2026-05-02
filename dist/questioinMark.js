"use strict";
// ? : ternary operator : decision making
// ?? : nullish coalescing operator; null or undefined
// ? : optional chaining
Object.defineProperty(exports, "__esModule", { value: true });
const userAge = 32;
const isElligble = userAge > 21 ? "Elligble" : "NotElligble";
const userTheme = undefined;
const selectTheme = userTheme ?? "Light";
const isAuthenticated = null;
const rusultwithTerbart = isAuthenticated ? isAuthenticated : "Guest";
const result = isAuthenticated ?? "Guest";
//optional chaingig
const user = {};
//# sourceMappingURL=questioinMark.js.map