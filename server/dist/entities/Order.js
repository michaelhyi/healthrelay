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
exports.Order = void 0;
const type_graphql_1 = require("type-graphql");
const typeorm_1 = require("typeorm");
const OrderingPhysician_1 = require("./OrderingPhysician");
const Radiologist_1 = require("./Radiologist");
let Order = class Order extends typeorm_1.BaseEntity {
};
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Order.prototype, "id", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Order.prototype, "mrn", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Order.prototype, "date", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Order.prototype, "priority", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Order.prototype, "status", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Order.prototype, "message", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Order.prototype, "radiologistUuid", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => Radiologist_1.Radiologist),
    (0, typeorm_1.ManyToOne)(() => Radiologist_1.Radiologist, (radiologist) => radiologist.orders, {
        lazy: true,
    }),
    __metadata("design:type", Radiologist_1.Radiologist)
], Order.prototype, "radiologist", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Order.prototype, "orderingPhysicianUuid", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => OrderingPhysician_1.OrderingPhysician),
    (0, typeorm_1.ManyToOne)(() => OrderingPhysician_1.OrderingPhysician, (orderingPhysician) => orderingPhysician.orders, { lazy: true }),
    __metadata("design:type", OrderingPhysician_1.OrderingPhysician)
], Order.prototype, "orderingPhysician", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => String),
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Order.prototype, "createdAt", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => String),
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Order.prototype, "updatedAt", void 0);
Order = __decorate([
    (0, type_graphql_1.ObjectType)(),
    (0, typeorm_1.Entity)()
], Order);
exports.Order = Order;
//# sourceMappingURL=Order.js.map