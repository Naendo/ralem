var overviewerConfig = {
    "CONST": {
        "tileSize": 384,
        "image": {
            "defaultMarker": "signpost.png",
            "signMarker": "signpost_icon.png",
            "bedMarker": "bed.png",
            "spawnMarker": "markers/marker_home.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "queryMarker": "markers/marker_location.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "3": "compass_lower-left.png",
                "2": "compass_lower-right.png"
            }
        },
        "mapDivId": "mcmap",
        "UPPERLEFT": 0,
        "UPPERRIGHT": 1,
        "LOWERLEFT": 3,
        "LOWERRIGHT": 2
    },
    "worlds": [
        "Ralem"
    ],
    "map": {
        "debug": false,
        "cacheTag": "1660487996",
        "north_direction": "lower-left",
        "controls": {
            "pan": true,
            "zoom": true,
            "spawn": true,
            "compass": true,
            "mapType": true,
            "overlays": true,
            "coordsBox": true
        }
    },
    "tilesets": [
        {
            "name": "Day",
            "zoomLevels": 7,
            "defaultZoom": 1,
            "maxZoom": 7,
            "path": "normal",
            "base": "",
            "bgcolor": "#1a1a1a",
            "world": "Ralem",
            "last_rendertime": 1660398440,
            "imgextension": "png",
            "isOverlay": false,
            "poititle": "Markers",
            "showlocationmarker": true,
            "center": [
                -256,
                86,
                128
            ],
            "lastrenderversion": 2,
            "minZoom": 0,
            "spawn": [
                -256,
                86,
                128
            ],
            "north_direction": 2
        },
        {
            "name": "Night",
            "zoomLevels": 7,
            "defaultZoom": 1,
            "maxZoom": 7,
            "path": "night",
            "base": "",
            "bgcolor": "#1a1a1a",
            "world": "Ralem",
            "last_rendertime": 1660398440,
            "imgextension": "png",
            "isOverlay": false,
            "poititle": "Markers",
            "showlocationmarker": true,
            "center": [
                -256,
                86,
                128
            ],
            "lastrenderversion": 2,
            "minZoom": 0,
            "spawn": [
                -256,
                86,
                128
            ],
            "north_direction": 2
        }
    ]
};
