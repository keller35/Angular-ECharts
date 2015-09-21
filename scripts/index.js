angular.module('app', [])
    .controller('pieController', ['$scope', '$interval', function ($scope, $interval) {

        $scope.refresh = Math.random();
        function refreshCanvas() {
            $scope.refresh = Math.random();
        }

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
            refreshCanvas();
        }

    }]).directive('eChart', [function () {

        function link($scope, element, attrs) {

            // 基于准备好的dom，初始化echarts图表
            var myChart = echarts.init(element[0]);

            //监听options变化
            if (attrs.myOptions) {
                $scope.$watch(attrs.myOptions, function () {
                    var options = $scope.$eval(attrs.myOptions);
                    if (angular.isObject(options)) {
                        myChart.setOption(options);
                    }
                }, true);
            }

            if (attrs.myRefresh) {
                $scope.$watch(attrs.myRefresh, function () {
                    var options = $scope.$eval(attrs.myOptions);
                    if (angular.isObject(options)) {
                        myChart.setOption(options);
                    }
                });
            }

        }

        return {
            restrict: 'A',
            link: link
        };
    }]);