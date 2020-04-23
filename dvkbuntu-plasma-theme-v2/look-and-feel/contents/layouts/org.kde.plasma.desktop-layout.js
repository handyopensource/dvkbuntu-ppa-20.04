var plasma = getApiVersion(1);

var layout = {
    "desktops": [
        {
            "applets": [
            ],
            "config": {
                "/": {
                    "formfactor": "0",
                    "immutability": "1",
                    "lastScreen": "0",
                    "wallpaperplugin": "org.kde.image"
                },
                "/ConfigDialog": {
                    "DialogHeight": "687",
                    "DialogWidth": "1200"
                },
                "/Configuration": {
                    "PreloadWeight": "0"
                },
                "/General": {
                    "pressToMoveHelp": "false"
                },
                "/Wallpaper/org.kde.image/General": {
                    "Image": "file:///usr/share/wallpapers/DVKBUNTU-Neon/contents/images/1920x1080.png"
                }
            },
            "wallpaperPlugin": "org.kde.image"
        }
    ],
    "panels": [
        {
            "alignment": "left",
            "applets": [
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "PreloadWeight": "0",
                            "immutability": "1"
                        },
                        "/Configuration/ConfigDialog": {
                            "DialogHeight": "680",
                            "DialogWidth": "1360"
                        },
                        "/Configuration/Configuration": {
                            "PreloadWeight": "34",
                            "immutability": "1"
                        },
                        "/Configuration/Configuration/Configuration": {
                            "PreloadWeight": "42",
                            "immutability": "1"
                        },
                        "/Configuration/Configuration/Configuration/Configuration": {
                            "immutability": "1"
                        },
                        "/Configuration/Configuration/Configuration/Configuration/Configuration/General": {
                            "launcherUrls": "file:///usr/share/applications/DVKBuntuMenuAcceuil.desktop"
                        },
                        "/Configuration/Configuration/Configuration/Configuration/General": {
                            "launcherUrls": "file:///usr/share/applications/DVKBuntuMenuAcceuil.desktop"
                        },
                        "/Configuration/Configuration/Configuration/General": {
                            "launcherUrls": "file:///usr/share/applications/DVKBuntuMenuAcceuil.desktop"
                        },
                        "/Configuration/Configuration/General": {
                            "launcherUrls": "file:///usr/share/applications/DVKBuntuMenuAcceuil.desktop"
                        },
                        "/Configuration/General": {
                            "launcherUrls": "file:///usr/share/applications/DVKBuntuMenuAcceuil.desktop"
                        }
                    },
                    "plugin": "org.kde.plasma.quicklaunch"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "PreloadWeight": "0",
                            "immutability": "1"
                        },
                        "/Configuration/Configuration": {
                            "PreloadWeight": "34",
                            "immutability": "1"
                        },
                        "/Configuration/Configuration/Configuration": {
                            "PreloadWeight": "42",
                            "immutability": "1"
                        },
                        "/Configuration/Configuration/Configuration/Configuration": {
                            "immutability": "1"
                        }
                    },
                    "plugin": "org.kde.plasma.pager"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "PreloadWeight": "0",
                            "immutability": "1"
                        },
                        "/Configuration/Configuration": {
                            "PreloadWeight": "34",
                            "immutability": "1"
                        },
                        "/Configuration/Configuration/Configuration": {
                            "PreloadWeight": "42",
                            "immutability": "1"
                        },
                        "/Configuration/Configuration/Configuration/Configuration": {
                            "immutability": "1"
                        }
                    },
                    "plugin": "org.kde.plasma.taskmanager"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "PreloadWeight": "0",
                            "immutability": "1"
                        },
                        "/Configuration/Configuration/ConfigDialog": {
                            "DialogHeight": "680",
                            "DialogWidth": "1360"
                        },
                        "/Configuration/Configuration/General": {
                            "show_lockScreen": "false"
                        },
                        "/Configuration/General": {
                            "show_lockScreen": "false"
                        }
                    },
                    "plugin": "org.kde.plasma.lock_logout"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "PreloadWeight": "0",
                            "immutability": "1"
                        },
                        "/Configuration/Configuration": {
                            "PreloadWeight": "34",
                            "immutability": "1"
                        },
                        "/Configuration/Configuration/Configuration": {
                            "PreloadWeight": "42",
                            "immutability": "1"
                        },
                        "/Configuration/Configuration/Configuration/Configuration": {
                            "immutability": "1"
                        }
                    },
                    "plugin": "org.kde.plasma.systemtray"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "PreloadWeight": "0",
                            "immutability": "1"
                        },
                        "/Configuration/Configuration": {
                            "PreloadWeight": "34",
                            "immutability": "1"
                        },
                        "/Configuration/Configuration/Configuration": {
                            "PreloadWeight": "42",
                            "immutability": "1"
                        },
                        "/Configuration/Configuration/Configuration/Configuration": {
                            "immutability": "1"
                        }
                    },
                    "plugin": "org.kde.plasma.digitalclock"
                }
            ],
            "config": {
                "/": {
                    "formfactor": "2",
                    "immutability": "1",
                    "lastScreen": "0",
                    "wallpaperplugin": "org.kde.image"
                },
                "/ConfigDialog": {
                    "DialogHeight": "109",
                    "DialogWidth": "1600"
                },
                "/Configuration": {
                    "PreloadWeight": "0"
                }
            },
            "height": 3.3333333333333335,
            "hiding": "normal",
            "location": "top",
            "maximumLength": 88.88888888888889,
            "minimumLength": 88.88888888888889,
            "offset": 0
        }
    ],
    "plugin": "org.kde.latte.shell",
    "serializationFormatVersion": "1"
}
;

plasma.loadSerializedLayout(layout);
