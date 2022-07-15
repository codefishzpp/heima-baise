// 立即执行函数
// 为了防止变量污染，减少命名冲突，我们可以采取立即执行函数的写法。因为里面的变量都是局部变量
// 柱状图模块1 
(function () {
    // 1.初始化实例化对象
    // var myChart = echarts.init(document.querySelector(".bar .chart"));
    var myCharts = echarts.init(document.querySelector(".bar .chart"));
    // 2.指定配置项和数据
    var option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                axisTick: {
                    alignWithLabel: true
                }
            }
        ],
        yAxis: [
            {
                type: 'value'
            }
        ],
        series: [
            {
                name: 'Direct',
                type: 'bar',
                barWidth: '60%',
                data: [10, 52, 200, 334, 390, 330, 220]
            }
        ]
    };
    // 3.把配置项给实例对象
    myCharts.setOption(option);

})();