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
exports.Radiologist = void 0;
const type_graphql_1 = require("type-graphql");
const typeorm_1 = require("typeorm");
const Notification_1 = require("./Notification");
const Order_1 = require("./Order");
let Radiologist = class Radiologist extends typeorm_1.BaseEntity {
};
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Radiologist.prototype, "id", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.Column)({ unique: true }),
    __metadata("design:type", String)
], Radiologist.prototype, "uuid", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Radiologist.prototype, "firstName", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Radiologist.prototype, "lastName", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Radiologist.prototype, "organization", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Radiologist.prototype, "profession", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Radiologist.prototype, "phone", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => [Order_1.Order]),
    (0, typeorm_1.OneToMany)(() => Order_1.Order, (order) => order.radiologist, { lazy: true }),
    __metadata("design:type", Array)
], Radiologist.prototype, "orders", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => [Notification_1.Notification]),
    (0, typeorm_1.OneToMany)(() => Notification_1.Notification, (notification) => notification.radiologist, {
        lazy: true,
    }),
    __metadata("design:type", Array)
], Radiologist.prototype, "notifications", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => String),
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Radiologist.prototype, "createdAt", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => String),
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Radiologist.prototype, "updatedAt", void 0);
Radiologist = __decorate([
    (0, type_graphql_1.ObjectType)(),
    (0, typeorm_1.Entity)()
], Radiologist);
exports.Radiologist = Radiologist;
//# sourceMappingURL=Radiologist.js.map