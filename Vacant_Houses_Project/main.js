require([
        "esri/Map",
        "esri/views/SceneView",
        "esri/layers/FeatureLayer",
        "esri/widgets/Legend"
    ],

    function(Map, SceneView, FeatureLayer, Legend) {
        var defExp = [

            "STATE_Name = 'MARYLAND'",
        ];
  
        var renderer = {
            type: "simple",
            symbol: {
                type: "polygon-3d",
                symbolLayers: [{
                    type: "extrude"
                }]
            },

            visualVariables: [{
                    type: "size",
                    field: "VACANT",
                    legendOptions: {
                        title: "Total Number of Vacant Housing Units"
                    },

                    stops: [{
                            value: 1000,
                            size: 25000,
                            label: "1000"
                        },

                        {
                            value: 50000,
                            size: 200000,
                            label: ">50,000"
                        }
                    ]
                },
                {
                    type: "color",
                    field: "VACANT",
                    normalizationField: "HSE_UNITS",
                    legendOptions: {
                        title: "% of Vacant Housing Units "
                    },
                    stops: [{
                            value: 0.05,
                            color: "#ffffb2",
                            label: "<5%",

                        },

                        {
                            value: 0.25,
                            color: "#b30000",
                            label: ">25%"
                        }
                    ]
                }
            ]
        };

        var povLayer = new FeatureLayer({
            url: "https://services.arcgis.com/V6ZHFr6zdgNZuVG0/ArcGIS/rest/services/Enriched%20us_counties_landscape_income/FeatureServer/0",
            renderer: renderer,
            title: "Number of Vacant Housing Units per County",
            outFields: ["*"],
            popupTemplate: {
                // autocasts as new PopupTemplate()
                title: "{NAME}, {STATE_NAME}",
                content: [

                    {
                        type: "fields",
                        fieldInfos: [{
                                fieldName: "VACANT",
                                label: "Vacant Houses",
                                format: {
                                    digitSeparator: true,
                                    places: 0
                                }
                            },

                            {
                                fieldName: "OWNER_OCC",
                                label: "Owned Houses",
                                format: {
                                    digitSeparator: true,
                                    places: 0
                                }
                            },
                            {
                                fieldName: "RENTER_OCC",
                                label: "Rented Houses",
                                format: {
                                    digitSeparator: true,
                                    places: 0
                                }
                            },

                            {
                                fieldName: "HSE_UNITS",
                                label: "Total Amount of Housing Units",
                                format: {
                                    digitSeparator: true,
                                    places: 0
                                }
                            },
                            {
                                fieldName: "TOTPOP_CY",
                                label: "Total Population",
                                format: {
                                    digitSeparator: true,
                                    places: 0
                                }
                            },
                            {
                                fieldName: "PCI_CY",
                                label: "Per Capita Income ($)",
                                format: {
                                    digitSeparator: true,
                                    places: 0
                                }
                            },

                        ]
                    }
                ]
            },
            definitionExpression: defExp.join(" OR ") // only display counties from states in defExp
        });

        var map = new Map({
            basemap: "dark-gray-vector",
            layers: [povLayer]
        });

        var view = new SceneView({
            container: "viewDiv",
            map: map,
            camera: {
                position: {
                    latitude: 38,
                    longitude: -77,
                    z: 700000,
                },
                tilt: 10,
                heading: 10
            }
        });

        var legend = new Legend({
            view: view
        });

        view.ui.add(legend, "bottom-left");
    });
