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
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecentContactResolver = void 0;
const type_graphql_1 = require("type-graphql");
const RecentContact_1 = require("../entities/RecentContact");
const User_1 = require("../entities/User");
const types_1 = require("../utils/types");
let RecentContactResolver = class RecentContactResolver {
    async createRecentContact(radiologistId, orderingPhysicianId) {
        const recentContact = await RecentContact_1.RecentContact.findOne({
            where: { radiologistId, orderingPhysicianId },
        });
        if (recentContact) {
            await RecentContact_1.RecentContact.delete({ id: recentContact.id });
        }
        await RecentContact_1.RecentContact.create({
            radiologistId,
            orderingPhysicianId,
        }).save();
        return true;
    }
    async readRecentContacts(id, profession) {
        let recentContacts;
        if (profession === "Radiologist") {
            recentContacts = await RecentContact_1.RecentContact.find({
                take: 3,
                where: {
                    radiologistId: id,
                },
                order: {
                    createdAt: "DESC",
                },
            });
        }
        else {
            recentContacts = await RecentContact_1.RecentContact.find({
                take: 3,
                where: {
                    orderingPhysicianId: id,
                },
                order: {
                    createdAt: "DESC",
                },
            });
        }
        let ret = [];
        for (let i = 0; i < recentContacts.length; i++) {
            const id = recentContacts[i].id;
            const radiologistId = recentContacts[i].radiologistId;
            const orderingPhysicianId = recentContacts[i].orderingPhysicianId;
            const radiologist = await User_1.User.findOne({
                where: { id: radiologistId },
            });
            const orderingPhysician = await User_1.User.findOne({
                where: { id: orderingPhysicianId },
            });
            ret.push({
                id,
                radiologistId,
                orderingPhysicianId,
                radiologist,
                orderingPhysician,
            });
        }
        return ret;
    }
};
__decorate([
    (0, type_graphql_1.Mutation)(() => Boolean),
    __param(0, (0, type_graphql_1.Arg)("radiologistId", () => type_graphql_1.Int)),
    __param(1, (0, type_graphql_1.Arg)("orderingPhysicianId", () => type_graphql_1.Int)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], RecentContactResolver.prototype, "createRecentContact", null);
__decorate([
    (0, type_graphql_1.Query)(() => [types_1.ContactResponse]),
    __param(0, (0, type_graphql_1.Arg)("id", () => type_graphql_1.Int)),
    __param(1, (0, type_graphql_1.Arg)("profession")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String]),
    __metadata("design:returntype", Promise)
], RecentContactResolver.prototype, "readRecentContacts", null);
RecentContactResolver = __decorate([
    (0, type_graphql_1.Resolver)()
], RecentContactResolver);
exports.RecentContactResolver = RecentContactResolver;
//# sourceMappingURL=recentContact.js.map