"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
exports.__esModule = true;
exports.TodosController = void 0;
var common_1 = require("@nestjs/common");
var TodosController = /** @class */ (function () {
    function TodosController(todosService) {
        this.todosService = todosService;
    }
    TodosController.prototype.create = function (createTodoDto) {
        return this.todosService.create(createTodoDto);
    };
    TodosController.prototype.findAll = function () {
        return this.todosService.findAll();
    };
    TodosController.prototype.findOne = function (id) {
        return this.todosService.findOne(id);
    };
    TodosController.prototype.update = function (id, updateTodoDto) {
        return this.todosService.update(id, updateTodoDto);
    };
    __decorate([
        common_1.Post(),
        __param(0, common_1.Body())
    ], TodosController.prototype, "create");
    __decorate([
        common_1.Get()
    ], TodosController.prototype, "findAll");
    __decorate([
        common_1.Get(':id'),
        __param(0, common_1.Param('id'))
    ], TodosController.prototype, "findOne");
    __decorate([
        common_1.Put(':id/update'),
        __param(0, common_1.Param('id')), __param(1, common_1.Body())
    ], TodosController.prototype, "update");
    __decorate([
        common_1.Delete(':id')
    ], TodosController.prototype, "delete");
    __decorate([
        common_1.Param('id')
    ], TodosController.prototype, "id");
    TodosController = __decorate([
        common_1.Controller('todos')
    ], TodosController);
    return TodosController;
}());
exports.TodosController = TodosController;
{
    return this.todosService["delete"](+id);
}
