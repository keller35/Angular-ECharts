angular.module('app', []).directive('eChart', [function () {

        function link($scope, element, attrs) {

            // 基于准备好的dom，初始化echarts图表
            var myChart = echarts.init(element[0]);

            //监听options变化
            if (attrs.uiOptions) {
                attrs.$observe('uiOptions', function () {
                    var options = $scope.$eval(attrs.uiOptions);
                    if (angular.isObject(options)) {
                        myChart.setOption(options);
                    }
                }, true);
            }

        }

        return {
            restrict: 'A',
            link: link
        };
    }]).controller('pieController', ['$scope', function ($scope) {

        function initData() {
            var arr = [];
            for (var i = 0; i < 6; i++) {
                arr.push(parseInt(Math.random() * 100));
            }
            return arr;
        }

        var data = initData();
        console.log(data);
        $scope.data = data;

        $scope.changData = function () {
            var data = initData();
            console.log(data);
            $scope.data = data;
        }

    }]);