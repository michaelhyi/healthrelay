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
const date_fns_1 = require("date-fns");
const OrderingPhysician_1 = require("../entities/OrderingPhysician");
const Radiologist_1 = require("../entities/Radiologist");
let OrderResolver = class OrderResolver {
    async deleteAllOrders() {
        await Order_1.Order.delete({});
        return true;
    }
    async readAllOrders() {
        const orders = await Order_1.Order.find({});
        return orders;
    }
    async readOrder(id) {
        const order = await Order_1.Order.findOne({ where: { id } });
        return order;
    }
    async createOrder(mrn, priority, message, radiologistUuid, orderingPhysicianUuid) {
        const radiologist = await Radiologist_1.Radiologist.findOne({
            where: { uuid: radiologistUuid },
        });
        const orderingPhysician = await OrderingPhysician_1.OrderingPhysician.findOne({
            where: { uuid: orderingPhysicianUuid },
        });
        const order = await Order_1.Order.create({
            mrn,
            date: (0, date_fns_1.format)(new Date(), "MMMM do, yyyy"),
            priority,
            status: "Pending",
            message,
            radiologistUuid,
            orderingPhysicianUuid,
            radiologist,
            orderingPhysician,
        }).save();
        return order;
    }
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
    (0, type_graphql_1.Mutation)(() => Boolean),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], OrderResolver.prototype, "deleteAllOrders", null);
__decorate([
    (0, type_graphql_1.Query)(() => [Order_1.Order]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], OrderResolver.prototype, "readAllOrders", null);
__decorate([
    (0, type_graphql_1.Query)(() => Order_1.Order),
    __param(0, (0, type_graphql_1.Arg)("id", () => type_graphql_1.Int)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], OrderResolver.prototype, "readOrder", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => Order_1.Order),
    __param(0, (0, type_graphql_1.Arg)("mrn")),
    __param(1, (0, type_graphql_1.Arg)("priority")),
    __param(2, (0, type_graphql_1.Arg)("message")),
    __param(3, (0, type_graphql_1.Arg)("radiologistUuid")),
    __param(4, (0, type_graphql_1.Arg)("orderingPhysicianUuid")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, String, String]),
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