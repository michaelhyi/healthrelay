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
const Notification_1 = require("../entities/Notification");
const crypto_1 = require("../utils/crypto");
let OrderResolver = class OrderResolver {
    async updateOrderStatus(id, status) {
        const order = await Order_1.Order.findOne({ id });
        const doctor = await User_1.User.findOne({
            where: { id: order === null || order === void 0 ? void 0 : order.orderingPhysicianId },
        });
        let statusValue;
        if (status === "Pending")
            statusValue = 0;
        else if (status === "Opened")
            statusValue = 1;
        else
            statusValue = 2;
        await (0, typeorm_1.getConnection)()
            .getRepository(Order_1.Order)
            .createQueryBuilder()
            .update({ status: statusValue })
            .where({ id })
            .returning("*")
            .execute();
        if (status === "Opened" || status === "Completed") {
            await Notification_1.Notification.create({
                date: (0, date_fns_1.format)(new Date(), "MMMM do, yyyy p"),
                message: `Dr. ${doctor === null || doctor === void 0 ? void 0 : doctor.firstName} ${doctor === null || doctor === void 0 ? void 0 : doctor.lastName} has ${status.toLowerCase()} Order #${id}.`,
                recipientId: order === null || order === void 0 ? void 0 : order.radiologistId,
                orderId: id,
            }).save();
        }
        return true;
    }
    async deleteOrder(id) {
        const order = await Order_1.Order.findOne({ id });
        const doctor = await User_1.User.findOne({ where: { id: order === null || order === void 0 ? void 0 : order.radiologistId } });
        await Order_1.Order.delete({ id });
        await Notification_1.Notification.create({
            date: (0, date_fns_1.format)(new Date(), "MMMM do, yyyy p"),
            message: `Dr. ${doctor === null || doctor === void 0 ? void 0 : doctor.firstName} ${doctor === null || doctor === void 0 ? void 0 : doctor.lastName} has cancelled Order #${id}.`,
            recipientId: order === null || order === void 0 ? void 0 : order.orderingPhysicianId,
            orderId: id,
        }).save();
        return true;
    }
    async updateOrder(id, mrn, priority, message, orderingPhysicianId) {
        let priorityValue;
        if (priority === "Low")
            priorityValue = 0;
        else if (priority == "Medium")
            priorityValue = 1;
        else
            priorityValue = 2;
        await (0, typeorm_1.getConnection)()
            .getRepository(Order_1.Order)
            .createQueryBuilder()
            .update({
            mrn: (0, crypto_1.encrypt)(mrn, "MRN"),
            priority: priorityValue,
            message: (0, crypto_1.encrypt)(message, "MESSAGE"),
            orderingPhysicianId,
        })
            .where({ id })
            .returning("*")
            .execute();
        const order = await Order_1.Order.findOne({ id });
        const doctor = await User_1.User.findOne({ where: { id: order === null || order === void 0 ? void 0 : order.radiologistId } });
        await Notification_1.Notification.create({
            date: (0, date_fns_1.format)(new Date(), "MMMM do, yyyy p"),
            message: `Dr. ${doctor === null || doctor === void 0 ? void 0 : doctor.firstName} ${doctor === null || doctor === void 0 ? void 0 : doctor.lastName} has updated Order #${id}.`,
            recipientId: orderingPhysicianId,
            orderId: id,
        }).save();
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
        return {
            id: order === null || order === void 0 ? void 0 : order.id,
            mrn: (0, crypto_1.decrypt)(order === null || order === void 0 ? void 0 : order.mrn, "MRN"),
            date: order === null || order === void 0 ? void 0 : order.date,
            priority: order === null || order === void 0 ? void 0 : order.priority,
            status: order === null || order === void 0 ? void 0 : order.status,
            message: (0, crypto_1.decrypt)(order === null || order === void 0 ? void 0 : order.message, "MESSASGE"),
            orderingPhysicianId: order === null || order === void 0 ? void 0 : order.orderingPhysicianId,
            radiologistId: order === null || order === void 0 ? void 0 : order.radiologistId,
            radiologist,
            orderingPhysician,
        };
    }
    async createOrder(mrn, priority, message, radiologistId, orderingPhysicianId) {
        let priorityValue;
        if (priority === "Low")
            priorityValue = 0;
        else if (priority == "Medium")
            priorityValue = 1;
        else
            priorityValue = 2;
        const order = await Order_1.Order.create({
            mrn: (0, crypto_1.encrypt)(mrn, "MRN"),
            date: (0, date_fns_1.format)(new Date(), "MMMM do, yyyy p"),
            priority: priorityValue,
            status: 0,
            message: (0, crypto_1.encrypt)(message, "MESSAGE"),
            radiologistId,
            orderingPhysicianId,
        }).save();
        const doctor = await User_1.User.findOne({ where: { id: radiologistId } });
        await Notification_1.Notification.create({
            date: (0, date_fns_1.format)(new Date(), "MMMM do, yyyy p"),
            message: `Dr. ${doctor === null || doctor === void 0 ? void 0 : doctor.firstName} ${doctor === null || doctor === void 0 ? void 0 : doctor.lastName} has requested a review of Order #${order.id}.`,
            recipientId: orderingPhysicianId,
            orderId: order.id,
        }).save();
        return order;
    }
    async readOrders(id, profession) {
        let orders;
        if (profession === "Radiologist") {
            orders = await Order_1.Order.find({ where: { radiologistId: id } });
        }
        else {
            orders = await Order_1.Order.find({
                where: { orderingPhysicianId: id },
            });
        }
        return orders;
    }
};
__decorate([
    (0, type_graphql_1.Mutation)(() => Boolean),
    __param(0, (0, type_graphql_1.Arg)("id", () => type_graphql_1.Int)),
    __param(1, (0, type_graphql_1.Arg)("status")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String]),
    __metadata("design:returntype", Promise)
], OrderResolver.prototype, "updateOrderStatus", null);
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
    (0, type_graphql_1.Mutation)(() => types_1.OrderResponse),
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
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String]),
    __metadata("design:returntype", Promise)
], OrderResolver.prototype, "readOrders", null);
OrderResolver = __decorate([
    (0, type_graphql_1.Resolver)()
], OrderResolver);
exports.OrderResolver = OrderResolver;
//# sourceMappingURL=order.js.map