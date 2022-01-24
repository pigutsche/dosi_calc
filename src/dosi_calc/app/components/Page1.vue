<template>
    <Page loaded="onPageLoad">
        <ActionBar title="Medikamentenauswahl" />

        <StackLayout class="home-panel">
            <Image
                src="https://de.wikipedia.org/wiki/Haushund#/media/Datei:Harzer_Fuchs_H%C3%BCndin_2.jpg" />
            <SearchBar hint="Suche nach Medikamenten..." :text="searchPhrase"
                @submit="onSearchSubmit" />
            <ListView for="medikament in filtered_medis" @itemTap="onItemTap"
                style="height:65%">
                <v-template>
                    <FlexboxLayout flexDirection="row">
                        <Image
                            src="https://de.wikipedia.org/wiki/Haushund#/media/Datei:Harzer_Fuchs_H%C3%BCndin_2.jpg" />
                        <Label :text="medikament" class="t-12"
                            style="width: 60%" />
                    </FlexboxLayout>
                </v-template>
            </ListView>
            <Label class="legende_title" text="Legende" />
            <ListView for="besonderheit in Object.keys(besonderheiten)"
                @itemTap="besonderheitTap" style="height:35%">
                <v-template>
                    <FlexboxLayout flexDirection="row">
                        <Image :src="besonderheit.picture"
                            class="thumb img-circle" />
                        <Label :text="besonderheit" class="t-12"
                            style="width: 60%" />
                    </FlexboxLayout>
                </v-template>
            </ListView>
            <!-- <Button text="Nächster Schritt" @tap="nextPage" /> -->
        </StackLayout>
    </Page>
</template>

<script>
    import Page2 from "./Page2";

    export default {
        methods: {
            nextPage() {
                this.$navigateTo(Page2, {
                    clearHistory: false,
                    props: {
                        medi_type: this.medi_type,
                        medikament: this.medikament
                    }
                });
            },

            // initial load, TODO: funktioniert noch nicht
            onPageLoad(args) {
                console.log("check");
                //this.filtered_medis = Object.keys(this.med_data);
            },

            onSearchSubmit(args) {
                let searchBar = args.object;
                // only show the items you're searching for
                this.filtered_medis = Object.keys(this.med_data).filter(
                    item => {
                        return (
                            item.toLowerCase().indexOf(searchBar.text
                                .toLowerCase()) >
                            -1
                        );
                    });
            },

            besonderheitTap: function(args) {
                this.loadPictures();
                console.log("besonderheitenTap");
            },

            onItemTap: function(args) {
                this.medi_type = args.item;
                console.log("Successfully set medi-type to: " + this
                    .medi_type);
                this.medikament = this.med_data[this.medi_type];

                // Bilder von: https://www.krankenhausinfektionen.info/ki-de/piktogramme/piktogramme-inhalt

                this.nextPage();
            },

            /*loadPictures: function(args) {
                const imageSourceModule = require(
                    "tns-core-modules/image-source");
                const fileSystemModule = require(
                    "tns-core-modules/file-system");
                const folder = fileSystemModule.knownFolders.currentApp();
                const path = fileSystemModule.path.join(
                    folder.path,
                    "images/23216-medikamentenkapsel.png"
                );
                const imageFromLocalFile = imageSourceModule.fromFile(
                    path);
                this.imageVar = imageFromLocalFile;
            }*/
        },

        data() {
            return {
                imageVar: "",
                searchPhrase: "",
                medikament: {},
                besonderheiten: {
                    Reserveantibiotikum: {
                        picture: "images/23216-medikamentenkapsel.png"
                    },
                    NichtFuerLebensmittel: {
                        picture: "images/23280-tierelebensmittel.png"
                    },
                    Sperrzeit: {
                        picture: "images/23258-risikoanalyse.png"
                    }
                },
                med_data: {
                    Metacam: {
                        Besonderheiten: [
                            "Reserveantibiotikum",
                            "NichtFuerLebensmittel"
                        ],
                        Rind: {
                            umwidmung: true,
                            Schmerztherapie: {
                                Behandlungsoptionen: [
                                    "iv",
                                    "im",
                                    "Teleportation in die Zelle"
                                ],
                                Menge_pro_kg: [10.0, 12.0, 4.0]
                            },
                            Geburtseinleitung: {
                                Behandlungsoptionen: ["iv", "im"],
                                Menge_pro_kg: [8.0, 14.0]
                            }
                        },
                        Katze: {
                            Schmerztherapie: {
                                Behandlungsoptionen: [
                                    "iv",
                                    "im",
                                    "Teleportation in die Zelle"
                                ],
                                Menge_pro_kg: [2.0, 3.0, 4.0]
                            }
                        },
                        Pferd: {
                            Schmerztherapie: {
                                Behandlungsoptionen: [
                                    "iv",
                                    "im",
                                    "Teleportation in die Zelle"
                                ],
                                Menge_pro_kg: [10.0, 12.0, 4.0]
                            },
                            Geburtseinleitung: {
                                Behandlungsoptionen: ["iv", "im"],
                                Menge_pro_kg: [11.0, 13.0]
                            }
                        }
                    },
                    Aspirin: {
                        Rind: {
                            Schmerztherapie: {
                                Behandlungsoptionen: [
                                    "iv",
                                    "im",
                                    "Teleportation in die Zelle"
                                ],
                                Menge_pro_kg: [10.0, 12.0, 4.0]
                            },
                            Geburtseinleitung: {
                                Behandlungsoptionen: ["iv", "im"],
                                Menge_pro_kg: [8.0, 14.0]
                            }
                        }
                    },
                    Benazecare: {
                        Hund: {
                            Schmerztherapie: {
                                Behandlungsoptionen: [
                                    "iv",
                                    "im",
                                    "Teleportation in die Zelle"
                                ],
                                Menge_pro_kg: [10.0, 12.0, 4.0]
                            },
                            Geburtseinleitung: {
                                Behandlungsoptionen: ["iv", "im"],
                                Menge_pro_kg: [8.0, 14.0]
                            }
                        },
                        Katze: {
                            Schmerztherapie: {
                                Behandlungsoptionen: [
                                    "iv",
                                    "im",
                                    "Teleportation in die Zelle"
                                ],
                                Menge_pro_kg: [2.0, 3.0, 4.0]
                            }
                        },
                        Schaf: {
                            Schmerztherapie: {
                                Behandlungsoptionen: [
                                    "iv",
                                    "im",
                                    "Teleportation in die Zelle"
                                ],
                                Menge_pro_kg: [10.0, 12.0, 4.0]
                            },
                            Geburtseinleitung: {
                                Behandlungsoptionen: ["iv", "im"],
                                Menge_pro_kg: [11.0, 13.0]
                            }
                        }
                    },
                    Bisolvon: {
                        Rind: {
                            Schmerztherapie: {
                                Behandlungsoptionen: [
                                    "iv",
                                    "im",
                                    "Teleportation in die Zelle"
                                ],
                                Menge_pro_kg: [10.0, 12.0, 4.0]
                            },
                            Geburtseinleitung: {
                                Behandlungsoptionen: ["iv", "im"],
                                Menge_pro_kg: [8.0, 14.0]
                            }
                        },
                        Hund: {
                            Schmerztherapie: {
                                Behandlungsoptionen: [
                                    "iv",
                                    "im",
                                    "Teleportation in die Zelle"
                                ],
                                Menge_pro_kg: [2.0, 3.0, 4.0]
                            }
                        },
                        Schaf: {
                            Schmerztherapie: {
                                Behandlungsoptionen: [
                                    "iv",
                                    "im",
                                    "Teleportation in die Zelle"
                                ],
                                Menge_pro_kg: [10.0, 12.0, 4.0]
                            },
                            Geburtseinleitung: {
                                Behandlungsoptionen: ["iv", "im"],
                                Menge_pro_kg: [11.0, 13.0]
                            }
                        }
                    },
                    Canosan: {
                        Rind: {
                            Schmerztherapie: {
                                Behandlungsoptionen: [
                                    "iv",
                                    "im",
                                    "Teleportation in die Zelle"
                                ],
                                Menge_pro_kg: [10.0, 12.0, 4.0]
                            },
                            Geburtseinleitung: {
                                Behandlungsoptionen: ["iv", "im"],
                                Menge_pro_kg: [8.0, 14.0]
                            }
                        },
                        Katze: {
                            Schmerztherapie: {
                                Behandlungsoptionen: [
                                    "iv",
                                    "im",
                                    "Teleportation in die Zelle"
                                ],
                                Menge_pro_kg: [2.0, 3.0, 4.0]
                            }
                        },
                        Pferd: {
                            Schmerztherapie: {
                                Behandlungsoptionen: [
                                    "iv",
                                    "im",
                                    "Teleportation in die Zelle "
                                ],
                                Menge_pro_kg: [10.0, 12.0, 4.0]
                            },
                            Geburtseinleitung: {
                                Behandlungsoptionen: ["iv ", "im"],
                                Menge_pro_kg: [11.0, 13.0]
                            }
                        }
                    },
                    Dimazon: {
                        Rind: {
                            Schmerztherapie: {
                                Behandlungsoptionen: [
                                    "iv",
                                    "im",
                                    "Teleportation in die Zelle"
                                ],
                                Menge_pro_kg: [10.0, 12.0, 4.0]
                            },
                            Geburtseinleitung: {
                                Behandlungsoptionen: ["iv", "im"],
                                Menge_pro_kg: [8.0, 14.0]
                            }
                        },
                        Katze: {
                            Schmerztherapie: {
                                Behandlungsoptionen: [
                                    "iv",
                                    "im",
                                    "Teleportation in die Zelle"
                                ],
                                Menge_pro_kg: [2.0, 3.0, 4.0]
                            }
                        },
                        Pferd: {
                            Schmerztherapie: {
                                Behandlungsoptionen: [
                                    "iv",
                                    "im",
                                    "Teleportation in die Zelle"
                                ],
                                Menge_pro_kg: [10.0, 12.0, 4.0]
                            },
                            Geburtseinleitung: {
                                Behandlungsoptionen: ["iv", "im"],
                                Menge_pro_kg: [11.0, 13.0]
                            }
                        }
                    },
                    Equimax: {
                        Rind: {
                            Schmerztherapie: {
                                Behandlungsoptionen: [
                                    "iv",
                                    "im",
                                    "Teleportation in die Zelle"
                                ],
                                Menge_pro_kg: [10.0, 12.0, 4.0]
                            },
                            Geburtseinleitung: {
                                Behandlungsoptionen: ["iv", "im"],
                                Menge_pro_kg: [8.0, 14.0]
                            }
                        },
                        Katze: {
                            Schmerztherapie: {
                                Behandlungsoptionen: [
                                    "iv",
                                    "im",
                                    "Teleportation in die Zelle "
                                ],
                                Menge_pro_kg: [2.0, 3.0, 4.0]
                            }
                        },
                        Pferd: {
                            Schmerztherapie: {
                                Behandlungsoptionen: [
                                    "iv",
                                    "im",
                                    "Teleportation in die Zelle"
                                ],
                                Menge_pro_kg: [10.0, 12.0, 4.0]
                            },
                            Geburtseinleitung: {
                                Behandlungsoptionen: ["iv", "im"],
                                Menge_pro_kg: [11.0, 13.0]
                            }
                        }
                    },
                    Galastop: {
                        Schaf: {
                            Schmerztherapie: {
                                Behandlungsoptionen: [
                                    "iv",
                                    "im",
                                    "Teleportation in die Zelle"
                                ],
                                Menge_pro_kg: [10.0, 12.0, 4.0]
                            },
                            Geburtseinleitung: {
                                Behandlungsoptionen: ["iv", "im"],
                                Menge_pro_kg: [8.0, 14.0]
                            }
                        },
                        Katze: {
                            Schmerztherapie: {
                                Behandlungsoptionen: [
                                    "iv",
                                    "im",
                                    "Teleportation in die Zelle"
                                ],
                                Menge_pro_kg: [2.0, 3.0, 4.0]
                            }
                        },
                        Pferd: {
                            Schmerztherapie: {
                                Behandlungsoptionen: [
                                    "iv",
                                    "im",
                                    "Teleportation in die Zelle"
                                ],
                                Menge_pro_kg: [10.0, 12.0, 4.0]
                            },
                            Geburtseinleitung: {
                                Behandlungsoptionen: ["iv", "im"],
                                Menge_pro_kg: [11.0, 13.0]
                            }
                        }
                    },
                    Loxicom: {
                        Rind: {
                            Schmerztherapie: {
                                Behandlungsoptionen: [
                                    "iv",
                                    "im",
                                    "Teleportation in die Zelle"
                                ],
                                Menge_pro_kg: [10.0, 12.0, 4.0]
                            },
                            Geburtseinleitung: {
                                Behandlungsoptionen: ["iv", "im"],
                                Menge_pro_kg: [8.0, 14.0]
                            }
                        },
                        Katze: {
                            Schmerztherapie: {
                                Behandlungsoptionen: [
                                    "iv",
                                    "im",
                                    "Teleportation in die Zelle"
                                ],
                                Menge_pro_kg: [2.0, 3.0, 4.0]
                            }
                        },
                        Pferd: {
                            Schmerztherapie: {
                                Behandlungsoptionen: [
                                    "iv",
                                    "im",
                                    "Teleportation in die Zelle"
                                ],
                                Menge_pro_kg: [10.0, 12.0, 4.0]
                            },
                            Geburtseinleitung: {
                                Behandlungsoptionen: ["iv", "im"],
                                Menge_pro_kg: [11.0, 13.0]
                            }
                        }
                    },
                    Panacur: {
                        Rind: {
                            Schmerztherapie: {
                                Behandlungsoptionen: [
                                    "iv",
                                    "im",
                                    "Teleportation in die Zelle"
                                ],
                                Menge_pro_kg: [10.0, 12.0, 4.0]
                            },
                            Geburtseinleitung: {
                                Behandlungsoptionen: ["iv", "im"],
                                Menge_pro_kg: [8.0, 14.0]
                            }
                        },
                        Katze: {
                            Schmerztherapie: {
                                Behandlungsoptionen: [
                                    "iv",
                                    "im",
                                    "Teleportation in die Zelle"
                                ],
                                Menge_pro_kg: [2.0, 3.0, 4.0]
                            }
                        },
                        Pferd: {
                            Schmerztherapie: {
                                Behandlungsoptionen: [
                                    "iv",
                                    "im",
                                    "Teleportation in die Zelle"
                                ],
                                Menge_pro_kg: [10.0, 12.0, 4.0]
                            },
                            Geburtseinleitung: {
                                Behandlungsoptionen: ["iv", "im"],
                                Menge_pro_kg: [11.0, 13.0]
                            }
                        }
                    },
                    Prilium: {
                        Rind: {
                            Schmerztherapie: {
                                Behandlungsoptionen: [
                                    "iv",
                                    "im",
                                    "Teleportation in die Zelle"
                                ],
                                Menge_pro_kg: [10.0, 12.0, 4.0]
                            },
                            Geburtseinleitung: {
                                Behandlungsoptionen: ["iv", "im"],
                                Menge_pro_kg: [8.0, 14.0]
                            }
                        },
                        Katze: {
                            Schmerztherapie: {
                                Behandlungsoptionen: [
                                    "iv",
                                    "im",
                                    "Teleportation in die Zelle"
                                ],
                                Menge_pro_kg: [2.0, 3.0, 4.0]
                            }
                        },
                        Pferd: {
                            Schmerztherapie: {
                                Behandlungsoptionen: [
                                    "iv",
                                    "im",
                                    "Teleportation in die Zelle"
                                ],
                                Menge_pro_kg: [10.0, 12.0, 4.0]
                            },
                            Geburtseinleitung: {
                                Behandlungsoptionen: ["iv", "im"],
                                Menge_pro_kg: [11.0, 13.0]
                            }
                        }
                    },
                    Ronaxan: {
                        Rind: {
                            Schmerztherapie: {
                                Behandlungsoptionen: [
                                    "iv",
                                    "im",
                                    "Teleportation in die Zelle"
                                ],
                                Menge_pro_kg: [10.0, 12.0, 4.0]
                            },
                            Geburtseinleitung: {
                                Behandlungsoptionen: ["iv", "im"],
                                Menge_pro_kg: [8.0, 14.0]
                            }
                        }
                    }
                },
                filtered_medis: [],
                medi_type: "none"
            };
        }
    };
</script>

<style scoped>
    .home-panel {

        font-size: 20;
        margin: 15;
    }

    .legende_title {
        horizontal-align: center;
    }

    .legende {
        font-size: 18;
        color: blue;
        horizontal-align: left;
    }

    .test {
        height: 80;
        width: 80;
    }
</style>