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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserResolver = void 0;
const argon2_1 = __importDefault(require("argon2"));
const type_graphql_1 = require("type-graphql");
const typeorm_1 = require("typeorm");
const User_1 = require("../entities/User");
const types_1 = require("../utils/types");
let UserResolver = class UserResolver {
    async updateUser(id, firstName, lastName, organization, email, phone) {
        await (0, typeorm_1.getConnection)()
            .getRepository(User_1.User)
            .createQueryBuilder()
            .update({ firstName, lastName, organization, email, phone })
            .where({ id })
            .returning("*")
            .execute();
        return true;
    }
    async readUser(id) {
        const user = await User_1.User.findOne(id);
        return user;
    }
    async readUsers() {
        const users = await User_1.User.find();
        return users;
    }
    async register(email, password, firstName, lastName, profession, organization, phone) {
        if (firstName.length === 0) {
            return {
                error: {
                    field: "First Name",
                    message: "You must enter a first name.",
                },
            };
        }
        if (lastName.length === 0) {
            return {
                error: {
                    field: "Last Name",
                    message: "You must enter a last name.",
                },
            };
        }
        if (organization.length === 0) {
            return {
                error: {
                    field: "Organization",
                    message: "You must enter an organization.",
                },
            };
        }
        if (phone.length === 0) {
            return {
                error: {
                    field: "Phone",
                    message: "You must enter a phone number.",
                },
            };
        }
        let user;
        try {
            user = await User_1.User.create({
                email,
                password: await argon2_1.default.hash(password),
                firstName,
                lastName,
                profession,
                organization,
                phone,
            }).save();
        }
        catch (e) {
            if (e.detail.includes("already exists") ||
                e.detail.includes("duplicate key")) {
                return {
                    error: {
                        field: "Email",
                        message: "Email already exists.",
                    },
                };
            }
        }
        return { user };
    }
    async login(email, password) {
        if (!email.includes("@")) {
            return {
                error: {
                    field: "Email",
                    message: "Invalid email.",
                },
            };
        }
        const user = await User_1.User.findOne({ where: { email } });
        if (!user) {
            return {
                error: { field: "Email", message: "Email does not exist." },
            };
        }
        const valid = await argon2_1.default.verify(user.password, password);
        if (!valid) {
            return {
                error: {
                    field: "Password",
                    message: "Incorrect password.",
                },
            };
        }
        return {
            user,
        };
    }
};
__decorate([
    (0, type_graphql_1.Mutation)(() => Boolean),
    __param(0, (0, type_graphql_1.Arg)("id", () => type_graphql_1.Int)),
    __param(1, (0, type_graphql_1.Arg)("firstName")),
    __param(2, (0, type_graphql_1.Arg)("lastName")),
    __param(3, (0, type_graphql_1.Arg)("organization")),
    __param(4, (0, type_graphql_1.Arg)("email")),
    __param(5, (0, type_graphql_1.Arg)("phone")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String, String, String, String, String]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "updateUser", null);
__decorate([
    (0, type_graphql_1.Query)(() => User_1.User),
    __param(0, (0, type_graphql_1.Arg)("id", () => type_graphql_1.Int)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "readUser", null);
__decorate([
    (0, type_graphql_1.Query)(() => [User_1.User]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "readUsers", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => types_1.UserResponse),
    __param(0, (0, type_graphql_1.Arg)("email")),
    __param(1, (0, type_graphql_1.Arg)("password")),
    __param(2, (0, type_graphql_1.Arg)("firstName")),
    __param(3, (0, type_graphql_1.Arg)("lastName")),
    __param(4, (0, type_graphql_1.Arg)("profession")),
    __param(5, (0, type_graphql_1.Arg)("organization")),
    __param(6, (0, type_graphql_1.Arg)("phone")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, String, String, String, String]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "register", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => types_1.UserResponse),
    __param(0, (0, type_graphql_1.Arg)("email")),
    __param(1, (0, type_graphql_1.Arg)("password")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "login", null);
UserResolver = __decorate([
    (0, type_graphql_1.Resolver)()
], UserResolver);
exports.UserResolver = UserResolver;
//# sourceMappingURL=user.js.map