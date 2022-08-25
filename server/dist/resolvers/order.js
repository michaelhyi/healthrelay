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
exports.OrderResolver = void 0;
const type_graphql_1 = require("type-graphql");
const Order_1 = require("../entities/Order");
let OrderResolver = class OrderResolver {
    async createOrder() { }
    async readOrders(uuid, profession) {
        let orders;
        if (profession === "Radiologist") {
            orders = await Order_1.Order.find({ where: { radiologistUuid: uuid } });
        }
        else {
            orders = await Order_1.Order.find({ where: { orderingPhysicianUuid: uuid } });
        }
        return orders;
    }
};
__decorate([
    (0, type_graphql_1.Mutation)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], OrderResolver.prototype, "createOrder", null);
__decorate([
    (0, type_graphql_1.Query)(() => [Order_1.Order]),
    __param(0, (0, type_graphql_1.Arg)("uuid")),
    __param(1, (0, type_graphql_1.Arg)("profession")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], OrderResolver.prototype, "readOrders", null);
OrderResolver = __decorate([
    (0, type_graphql_1.Resolver)()
], OrderResolver);
exports.OrderResolver = OrderResolver;
//# sourceMappingURL=order.js.map