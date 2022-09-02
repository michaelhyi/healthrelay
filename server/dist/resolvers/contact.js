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
exports.ContactResolver = void 0;
const type_graphql_1 = require("type-graphql");
const Contact_1 = require("../entities/Contact");
const RecentContact_1 = require("../entities/RecentContact");
const User_1 = require("../entities/User");
const types_1 = require("../utils/types");
let ContactResolver = class ContactResolver {
    async readContact(id) {
        const user = await User_1.User.findOne({ id });
        return user;
    }
    async readAllContacts() {
        const contacts = await Contact_1.Contact.find({});
        return contacts;
    }
    async readContacts(id) {
        const contacts = await Contact_1.Contact.find({
            where: { radiologistId: id },
        });
        let ret = [];
        for (let i = 0; i < contacts.length; i++) {
            const id = contacts[i].id;
            const radiologistId = contacts[i].radiologistId;
            const orderingPhysicianId = contacts[i].orderingPhysicianId;
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
    async createContact(radiologistId, orderingPhysicianId) {
        const orderingPhysician = await User_1.User.findOne({
            where: { id: orderingPhysicianId },
        });
        if (!orderingPhysician) {
            return {
                error: {
                    field: "Contact",
                    message: "User doesn't exist.",
                },
                success: false,
            };
        }
        if (orderingPhysician.profession === "Radiologist") {
            return {
                error: {
                    field: "Contact",
                    message: "Contact must be Ordering Physician!",
                },
                success: false,
            };
        }
        const contacts = await Contact_1.Contact.find({ where: { radiologistId } });
        if (contacts.filter((v) => v.orderingPhysicianId === orderingPhysicianId)
            .length > 0) {
            return {
                error: {
                    field: "Contact",
                    message: "You already have this contact added.",
                },
                success: false,
            };
        }
        await Contact_1.Contact.create({
            radiologistId,
            orderingPhysicianId,
        }).save();
        await RecentContact_1.RecentContact.create({
            radiologistId,
            orderingPhysicianId,
        }).save();
        return { success: true };
    }
};
__decorate([
    (0, type_graphql_1.Mutation)(() => User_1.User),
    __param(0, (0, type_graphql_1.Arg)("id", () => type_graphql_1.Int)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ContactResolver.prototype, "readContact", null);
__decorate([
    (0, type_graphql_1.Query)(() => [Contact_1.Contact]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ContactResolver.prototype, "readAllContacts", null);
__decorate([
    (0, type_graphql_1.Query)(() => [types_1.ContactResponse]),
    __param(0, (0, type_graphql_1.Arg)("id", () => type_graphql_1.Int)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ContactResolver.prototype, "readContacts", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => types_1.CreateContactResponse),
    __param(0, (0, type_graphql_1.Arg)("radiologistId", () => type_graphql_1.Int)),
    __param(1, (0, type_graphql_1.Arg)("orderingPhysicianId", () => type_graphql_1.Int)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], ContactResolver.prototype, "createContact", null);
ContactResolver = __decorate([
    (0, type_graphql_1.Resolver)()
], ContactResolver);
exports.ContactResolver = ContactResolver;
//# sourceMappingURL=contact.js.map