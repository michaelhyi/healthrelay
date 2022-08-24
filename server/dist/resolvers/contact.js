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
const OrderingPhysician_1 = require("../entities/OrderingPhysician");
const Radiologist_1 = require("../entities/Radiologist");
const types_1 = require("../utils/types");
let ContactResolver = class ContactResolver {
    async readAllContacts() {
        const contacts = await Contact_1.Contact.find({});
        return contacts;
    }
    async readContacts(uuid) {
        const contacts = await Contact_1.Contact.find({
            where: { primaryUuid: uuid },
        });
        return contacts;
    }
    async createContact(uuid, contactUuid) {
        const primary = await Radiologist_1.Radiologist.findOne({ where: { uuid } });
        const secondary = await OrderingPhysician_1.OrderingPhysician.findOne({
            where: { uuid: contactUuid },
        });
        if (!secondary) {
            return {
                error: {
                    field: "Contact",
                    message: "User doesn't exist.",
                },
                success: false,
            };
        }
        await Contact_1.Contact.create({
            primaryUuid: uuid,
            secondaryUuid: contactUuid,
            firstName: secondary.firstName,
            lastName: secondary.lastName,
            organization: secondary.organization,
            profession: secondary.profession,
        }).save();
        await Contact_1.Contact.create({
            primaryUuid: contactUuid,
            secondaryUuid: uuid,
            firstName: primary.firstName,
            lastName: primary.lastName,
            organization: primary.organization,
            profession: primary.profession,
        }).save();
        return { success: true };
    }
};
__decorate([
    (0, type_graphql_1.Query)(() => [Contact_1.Contact]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ContactResolver.prototype, "readAllContacts", null);
__decorate([
    (0, type_graphql_1.Query)(() => [Contact_1.Contact]),
    __param(0, (0, type_graphql_1.Arg)("uuid")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ContactResolver.prototype, "readContacts", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => types_1.CreateContactResponse),
    __param(0, (0, type_graphql_1.Arg)("uuid")),
    __param(1, (0, type_graphql_1.Arg)("contactUuid")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], ContactResolver.prototype, "createContact", null);
ContactResolver = __decorate([
    (0, type_graphql_1.Resolver)()
], ContactResolver);
exports.ContactResolver = ContactResolver;
//# sourceMappingURL=contact.js.map