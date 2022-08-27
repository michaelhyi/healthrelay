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
const User_1 = require("../entities/User");
const types_1 = require("../utils/types");
const typeorm_1 = require("typeorm");
let OrderResolver = class OrderResolver {
    async deleteOrder(id) {
        await Order_1.Order.delete({ id });
        return true;
    }
    async updateOrder(id, mrn, priority, message, orderingPhysicianId) {
        await (0, typeorm_1.getConnection)()
            .getRepository(Order_1.Order)
            .createQueryBuilder()
            .update({ mrn, priority, message, orderingPhysicianId })
            .where({ id })
            .returning("*")
            .execute();
        return true;
    }
    async readAllOrders() {
        const orders = await Order_1.Order.find({});
        return orders;
    }
    async readOrder(id) {
        const order = await Order_1.Order.findOne(id);
        const radiologist = await User_1.User.findOne({
            where: { id: order === null || order === void 0 ? void 0 : order.radiologistId },
        });
        const orderingPhysician = await User_1.User.findOne({
            where: { id: order === null || order === void 0 ? void 0 : order.orderingPhysicianId },
        });
        return Object.assign(Object.assign({}, order), { radiologist, orderingPhysician });
    }
    async createOrder(mrn, priority, message, radiologistId, orderingPhysicianId) {
        const order = await Order_1.Order.create({
            mrn,
            date: (0, date_fns_1.format)(new Date(), "MMMM do, yyyy"),
            priority,
            status: "Pending",
            message,
            radiologistId,
            orderingPhysicianId,
        }).save();
        return order;
    }
    async readOrders(id, profession, take) {
        let orders;
        if (take) {
            if (profession === "Radiologist") {
                orders = await Order_1.Order.find({
                    where: { radiologistId: id },
                    take,
                    order: {
                        createdAt: "DESC",
                    },
                });
            }
            else {
                orders = await Order_1.Order.find({
                    where: { orderingPhysicianId: id },
                    order: {
                        createdAt: "DESC",
                    },
                });
            }
        }
        else {
            if (profession === "Radiologist") {
                orders = await Order_1.Order.find({ where: { radiologistId: id } });
            }
            else {
                orders = await Order_1.Order.find({
                    where: { orderingPhysicianId: id },
                });
            }
        }
        return orders;
    }
};
__decorate([
    (0, type_graphql_1.Mutation)(() => Boolean),
    __param(0, (0, type_graphql_1.Arg)("id", () => type_graphql_1.Int)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], OrderResolver.prototype, "deleteOrder", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => Boolean),
    __param(0, (0, type_graphql_1.Arg)("id", () => type_graphql_1.Int)),
    __param(1, (0, type_graphql_1.Arg)("mrn")),
    __param(2, (0, type_graphql_1.Arg)("priority")),
    __param(3, (0, type_graphql_1.Arg)("message")),
    __param(4, (0, type_graphql_1.Arg)("orderingPhysicianId", () => type_graphql_1.Int)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String, String, String, Number]),
    __metadata("design:returntype", Promise)
], OrderResolver.prototype, "updateOrder", null);
__decorate([
    (0, type_graphql_1.Query)(() => [Order_1.Order]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], OrderResolver.prototype, "readAllOrders", null);
__decorate([
    (0, type_graphql_1.Query)(() => types_1.OrderResponse),
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
    __param(3, (0, type_graphql_1.Arg)("radiologistId", () => type_graphql_1.Int)),
    __param(4, (0, type_graphql_1.Arg)("orderingPhysicianId", () => type_graphql_1.Int)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, Number, Number]),
    __metadata("design:returntype", Promise)
], OrderResolver.prototype, "createOrder", null);
__decorate([
    (0, type_graphql_1.Query)(() => [Order_1.Order]),
    __param(0, (0, type_graphql_1.Arg)("id", () => type_graphql_1.Int)),
    __param(1, (0, type_graphql_1.Arg)("profession")),
    __param(2, (0, type_graphql_1.Arg)("take", () => type_graphql_1.Int, { nullable: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String, Object]),
    __metadata("design:returntype", Promise)
], OrderResolver.prototype, "readOrders", null);
OrderResolver = __decorate([
    (0, type_graphql_1.Resolver)()
], OrderResolver);
exports.OrderResolver = OrderResolver;
//# sourceMappingURL=order.js.map