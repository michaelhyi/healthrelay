"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateContactResponse = exports.UserQuery = exports.UserResponse = exports.Error = void 0;
const type_graphql_1 = require("type-graphql");
const Radiologist_1 = require("../entities/Radiologist");
const User_1 = require("../entities/User");
let Error = class Error {
};
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], Error.prototype, "field", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], Error.prototype, "message", void 0);
Error = __decorate([
    (0, type_graphql_1.ObjectType)()
], Error);
exports.Error = Error;
let UserResponse = class UserResponse {
};
__decorate([
    (0, type_graphql_1.Field)(() => User_1.User, { nullable: true }),
    __metadata("design:type", User_1.User)
], UserResponse.prototype, "user", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => Error, { nullable: true }),
    __metadata("design:type", Error)
], UserResponse.prototype, "error", void 0);
UserResponse = __decorate([
    (0, type_graphql_1.ObjectType)()
], UserResponse);
exports.UserResponse = UserResponse;
let UserQuery = class UserQuery {
};
__decorate([
    (0, type_graphql_1.Field)(() => User_1.User),
    __metadata("design:type", User_1.User)
], UserQuery.prototype, "user", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => Radiologist_1.Radiologist, { nullable: true }),
    __metadata("design:type", Object)
], UserQuery.prototype, "doctor", void 0);
UserQuery = __decorate([
    (0, type_graphql_1.ObjectType)()
], UserQuery);
exports.UserQuery = UserQuery;
let CreateContactResponse = class CreateContactResponse {
};
__decorate([
    (0, type_graphql_1.Field)(() => Error, { nullable: true }),
    __metadata("design:type", Error)
], CreateContactResponse.prototype, "error", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => Boolean),
    __metadata("design:type", Boolean)
], CreateContactResponse.prototype, "success", void 0);
CreateContactResponse = __decorate([
    (0, type_graphql_1.ObjectType)()
], CreateContactResponse);
exports.CreateContactResponse = CreateContactResponse;
//# sourceMappingURL=types.js.map