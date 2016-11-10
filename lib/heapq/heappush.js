'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = heappush;

var _core = require('./core');

function heappush(heap, item) {

	var x = heap.data;
	var n = x.length;

	x.push(item);

	// sift up the new leaf

	(0, _core.siftup)(heap.compare, x, 0, n + 1, n);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9oZWFwcS9oZWFwcHVzaC5qcyJdLCJuYW1lcyI6WyJoZWFwcHVzaCIsImhlYXAiLCJpdGVtIiwieCIsImRhdGEiLCJuIiwibGVuZ3RoIiwicHVzaCIsImNvbXBhcmUiXSwibWFwcGluZ3MiOiI7Ozs7O2tCQUV5QkEsUTs7QUFGekI7O0FBRWdCLFNBQVNBLFFBQVQsQ0FBb0JDLElBQXBCLEVBQTJCQyxJQUEzQixFQUFrQzs7QUFFakQsS0FBTUMsSUFBSUYsS0FBS0csSUFBZjtBQUNBLEtBQU1DLElBQUlGLEVBQUVHLE1BQVo7O0FBRUFILEdBQUVJLElBQUYsQ0FBUUwsSUFBUjs7QUFFQTs7QUFFQSxtQkFBUUQsS0FBS08sT0FBYixFQUF1QkwsQ0FBdkIsRUFBMkIsQ0FBM0IsRUFBK0JFLElBQUksQ0FBbkMsRUFBdUNBLENBQXZDO0FBRUEiLCJmaWxlIjoiaGVhcHB1c2guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBzaWZ0dXAgfSBmcm9tICcuL2NvcmUnIDtcblxuIGV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhlYXBwdXNoICggaGVhcCAsIGl0ZW0gKSB7XG5cblx0Y29uc3QgeCA9IGhlYXAuZGF0YSA7XG5cdGNvbnN0IG4gPSB4Lmxlbmd0aCA7XG5cblx0eC5wdXNoKCBpdGVtICkgO1xuXG5cdC8vIHNpZnQgdXAgdGhlIG5ldyBsZWFmXG5cblx0c2lmdHVwKCBoZWFwLmNvbXBhcmUgLCB4ICwgMCAsIG4gKyAxICwgbiApIDtcblxufVxuIl19