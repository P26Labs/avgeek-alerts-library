"use strict";
// avgeek_alerts_library/src/alerts.ts
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(require("./interfaces/flight"), exports);
__exportStar(require("./interfaces/auth"), exports);
const axios_1 = require("axios");
class AvgeekAlerts {
    constructor(token, environment = 'production') {
        this.axios_client = axios_1.default.create({
            baseURL: environment === 'production' ? 'https://alerts.avgeek.io/api' : 'http://localhost:3001/api',
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
    }
    handleError(error) {
        let response = error.response;
        let result = (response === null || response === void 0 ? void 0 : response.data) || (response === null || response === void 0 ? void 0 : response.statusText) || response || error;
        let status = (response === null || response === void 0 ? void 0 : response.status) || error.status || 500;
        return {
            success: false,
            result: result,
            status: status,
        };
    }
    emailAuthSignIn({ email_body, email_recipients, }) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.axios_client.post('/email/auth/sign-in', {
                    email_body,
                    email_recipients,
                });
                return {
                    success: true,
                    result: response.data,
                    status: response.status,
                };
            }
            catch (error) {
                return this.handleError(error);
            }
        });
    }
}
exports.default = AvgeekAlerts;
