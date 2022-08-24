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
exports.RadiologistResolver = void 0;
const type_graphql_1 = require("type-graphql");
const typeorm_1 = require("typeorm");
const OrderingPhysician_1 = require("../entities/OrderingPhysician");
const Radiologist_1 = require("../entities/Radiologist");
const types_1 = require("../utils/types");
let RadiologistResolver = class RadiologistResolver {
    async readContacts(uuid) {
        const user = await Radiologist_1.Radiologist.findOne({ where: { uuid } });
        const contacts = user.contacts;
        return contacts;
    }
    async createContact(uuid, contactUuid) {
        const contact = await OrderingPhysician_1.OrderingPhysician.findOne({
            where: { uuid: contactUuid },
        });
        if (!contact) {
            return {
                error: {
                    field: "Contact",
                    message: "User doesn't exist.",
                },
                success: false,
            };
        }
        const radiologist = await Radiologist_1.Radiologist.findOne({ where: { uuid } });
        let contacts = radiologist === null || radiologist === void 0 ? void 0 : radiologist.contacts;
        if (!contacts)
            contacts = [contact];
        else {
            contacts.push(contact);
        }
        await (0, typeorm_1.getConnection)()
            .getRepository(Radiologist_1.Radiologist)
            .createQueryBuilder()
            .update({ contacts })
            .where({ uuid })
            .returning("*")
            .execute();
        return { success: true };
    }
};
__decorate([
    (0, type_graphql_1.Query)(() => [OrderingPhysician_1.OrderingPhysician]),
    __param(0, (0, type_graphql_1.Arg)("uuid")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], RadiologistResolver.prototype, "readContacts", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => types_1.CreateContactResponse),
    __param(0, (0, type_graphql_1.Arg)("uuid")),
    __param(1, (0, type_graphql_1.Arg)("contactUuid")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], RadiologistResolver.prototype, "createContact", null);
RadiologistResolver = __decorate([
    (0, type_graphql_1.Resolver)()
], RadiologistResolver);
exports.RadiologistResolver = RadiologistResolver;
//# sourceMappingURL=radiologist.js.map