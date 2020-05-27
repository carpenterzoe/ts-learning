var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// case 1 联合类型 声明类型
var Animal = /** @class */ (function () {
    function Animal() {
    }
    return Animal;
}());
var Bee = /** @class */ (function (_super) {
    __extends(Bee, _super);
    function Bee() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Bee;
}(Animal));
var Lion = /** @class */ (function (_super) {
    __extends(Lion, _super);
    function Lion() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Lion;
}(Animal));
// 如果想要zoo被推断为Animal的数组类型
// 右边的赋值中，没有明确为Animal类型的实例，因此推断不出这样的结果
var zoo = [new Bee(), new Lion()];
// 解决方式：明确声明为Animal数组类型
// 如果没有声明，zoo会被推断为 右侧2个实例的联合数组类型
var zoo1 = [new Bee(), new Lion()];
// 上下文类型
window.onmousedown = function (mouseEvent) {
    console.log(mouseEvent.clickTime);
};
