/**
 * Created by pdd on 2018/6/10.
 */


const orderData = [
    {
        name: "旅游1线",
        stations: [
            {
                name: "南门水陆换乘中心",
                classes: [
                    {
                        time: "9:00"
                    },
                    {
                        time: "13:20"
                    }
                ],
            },
            {
                name: "前卫村",
                classes: [
                    {
                        time: "11:00"
                    },
                    {
                        time: "15:40"
                    }
                ]
            }
        ]
    },
    {
        name: "旅游2线",
        stations: [
            {
                name: "南门水陆换乘中心",
                classes: [
                    {
                        id: "path_2,point_nanmen,9:00", // 代码按规则自动生成
                        time: "9:00"
                    },
                    {
                        time: "13:20"
                    }
                ]
            },
            {
                name: "明珠湖公园",
                classes: [
                    {
                        time: "11:00"
                    },
                    {
                        time: "15:40"
                    }
                ]
            }
        ]
    }
]


const pathData = [
    {
        id: "path_1",
        name: "旅游1线",
        stations: [
            {
                id: "point_nanmen",
                name: "南门水陆换乘中心",
                type: 'up',
                classes: [
                    {
                        id: "path_1,point_nanmen,9:00", // 代码按规则自动生成
                        time: "9:00"
                    },
                    {
                        time: "13:20"
                    }
                ]
            },
            {
                id: "point_gaojia",
                name: "高家庄园",
                type: 'up',
                classes: [
                    {
                        time: "9:00"
                    },
                    {
                        time: "13:20"
                    }
                ]
            },
            {
                id: "point_qianwei",
                name: "前卫村",
                type: 'down',
                classes: [
                    {
                        time: "11:00"
                    },
                    {
                        time: "15:40"
                    }
                ]
            }

        ]
    },

    {
        id: "path_2",
        name: "旅游2线",
        stations: [
            {
                id: "point_nanmen",
                name: "南门水陆换乘中心",
                type: 'up',
                classes: [
                    {
                        id: "path_2,point_nanmen,9:00", // 代码按规则自动生成
                        time: "9:00"
                    },
                    {
                        time: "13:20"
                    }
                ]
            },
            {
                id: "point_mingzhuhu",
                name: "明珠湖公园",
                type: 'up',
                classes: [
                    {
                        time: "9:45"
                    },
                    {
                        time: "14:05"
                    }
                ]
            },
            {
                id: "point_mingzhuhu_down",
                name: "明珠湖公园",
                type: 'down',
                classes: [
                    {
                        time: "11:00"
                    },
                    {
                        time: "15:40"
                    }
                ]
            },
            {
                id: "point_nanmen_down",
                name: "南门水陆换乘中心",
                type: 'down',
                classes: [
                    {
                        time: "11:45"
                    },
                    {
                        time: "16:25"
                    }
                ]
            }

        ]
    }

];

pathData.map(path => {
    const pathId = path.id;
    path.stations.map(station => {
        const stationId = station.id;
        station.classes.map(cls => {
            const clsTime = cls.time;
            cls.id = `${pathId}@${stationId}@${clsTime}`;
        })
    })
});

console.log(pathData);
export default {
    pathData,
    orderData
};