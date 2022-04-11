// // 抓取儀錶板DOM並初始化
// var gauge1 = echarts.init(
//     document.getElementById("gauge1")
// );
// var gauge2 = echarts.init(
//     document.getElementById("gauge2")
// );
// var gauge3 = echarts.init(
//     document.getElementById("gauge3")
// );
// var gauge4 = echarts.init(
//     document.getElementById("gauge4")
// );

// 儀錶板參數
var option = {
    series: [
        // 刻度/指針/數值
        {
            type: "gauge",
            // 定位 X,Y
            center: ["50%", "55%"],
            startAngle: 220,
            endAngle: -40,
            // 最大/最小值
            min: 0,
            max: 60,
            radius: "82%",
            itemStyle: {
                color: " rgb(98, 158, 81)",
            },
            // 指針
            pointer: {
                show: false,
            },
            // 中心點
            anchor: {
                show: false,
                showAbove: true,
                size: 10,
                itemStyle: {
                    borderColor: "#fd7347",
                    borderWidth: 5,
                },
            },
            // 外圈進度條
            progress: {
                show: true,
                width: 30,
            },
            // 外圈底色
            axisLine: {
                lineStyle: {
                    width: 15,
                    color: [
                        [1, "rgba(0, 0, 0, 0)"], 
                    ],
                },
            },
            // 小刻度
            axisTick: {
                distance: -15,
                splitNumber: 5,
                lineStyle: {
                    width: 1,
                    color: "#999",
                },
            },
            // 大刻度數量(不含0)
            splitNumber: 6,
            // 大刻度樣式
            splitLine: {
                distance: -15,
                length: 10,
                lineStyle: {
                    width: 2,
                    color: "#999",
                },
            },
            // 刻度數值
            axisLabel: {
                distance: -15,
                color: "#ffffff",
                fontSize: 8,
            },
            title: {
                show: false,
            },
            // 內部數值
            detail: {
                valueAnimation: true,
                width: "60%",
                lineHeight: 40,
                borderRadius: 8,
                offsetCenter: [0, "80%"],
                fontSize: 20,
                fontWeight: "bolder",
                formatter: "{value} °C",
                color: "auto",
            },
            data: [
                {
                    value: 20,
                },
            ],
        },
        // ===================================================== 裝飾圈 =====================================================
        {
            type: "gauge",
            center: ["50%", "55%"],
            startAngle: 220,
            endAngle: -40,
            min: 0,
            max: 60,
            radius: "90%",
            itemStyle: {
                color: "#FD7347",
            },
            progress: {
                show: false,
                width: 4,
            },
            pointer: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            splitLine: {
                show: false,
            },
            axisLabel: {
                show: false,
            },
            // 外圈底色
            axisLine: {
                lineStyle: {
                    width: 4,
                    color: [
                        [0.6, "rgb(98, 158, 81)"],
                        [0.8, "orange"],
                        [1, "red"],
                    ],
                },
            },
            detail: {
                show: false,
            },
            data: [
                {
                    value: 20,
                },
            ],
        },
    ],
};




// // 儀錶板更新數值函式(依照數值變換顏色)
// function updateValue(gauge, value) {
//     let color 
//     let color2 
//     if (value <=35 ) {
//         color = 'rgb(86, 166, 75)'
//         color2 = 'rgb(86, 166, 75, 1)'
//     } else if (value > 35 && value <= 50 ) {
//         color = 'rgb(255,120,10)'
//         color2 = 'rgb(255,120, 10, 1)'
//     } else {
//         color = 'rgb(242,73,92)'
//         color2 = 'rgb(242,73,92,1)'
//     }
//     gauge.setOption({
//         series: [ {itemStyle: {color: color2},data: [{ value }] }, { itemStyle: {color},data: [{ value }] }]
//     });
// }

// // 儀錶板定時更新
// setInterval(function () {
//     const random1 = +(Math.random() * 60).toFixed(2);
//     const random2 = +(Math.random() * 60).toFixed(2);
//     const random3 = +(Math.random() * 60).toFixed(2);
//     updateValue(gauge1, random1)
//     updateValue(gauge2, random2)
//     updateValue(gauge3, random3)
//     updateValue(gauge4, random3)
// }, 2000);

// window.onresize = function () {
//     gauge1.resize();
//     gauge2.resize();
//     gauge3.resize();
//     gauge4.resize();
//     line1.resize();
//     line2.resize();
//     line3.resize();
// };