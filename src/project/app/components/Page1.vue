<template>
    <Page loaded="onPageLoad">
        <ActionBar title="Medikamentenauswahl" />

        <StackLayout class="home-panel">
            <SearchBar hint="Suche nach Medikamenten..." :text="searchPhrase"
                @submit="onSearchSubmit" />
            <ListView for="medikament in filtered_medis" @itemTap="onItemTap"
                style="height:80%">
                <v-template>
                    <FlexboxLayout flexDirection="row">
                        <Image :src="imageVar" class="thumb img-circle" />
                        <Label :text="medikament" class="t-12"
                            style="width: 60%" />
                    </FlexboxLayout>
                </v-template>
            </ListView>
            <Label class="legende_title" text="Legende" />
            <Button text="Nächster Schritt" @tap="onButtonTap" />
        </StackLayout>
    </Page>
</template>

<script>
    import Page1 from "./Page1";
    import Page2 from "./Page2";
    import Page3 from "./Page3";

    export default {
        methods: {
            onButtonTap() {
                this.$navigateTo(Page2, {
                    clearHistory: false,
                    props: {
                        medi_type: this.medi_type
                    }
                });
            },

            // initial load, TODO: funktioniert noch nicht
            onPageLoad(args) {
                console.log("check");
                this.filtered_medis = this.med_data;
            },

            onSearchSubmit(args) {
                let searchBar = args.object;
                // only show the items you're searching for
                this.filtered_medis = this.med_data.filter(item => {
                    return (
                        item.toLowerCase().indexOf(searchBar.text
                            .toLowerCase()) >
                        -1
                    );
                });
            },

            onItemTap: function(args) {
                this.medi_type = args.item;
                console.log("Successfully set medi-type to: " + this
                    .medi_type);

                const imageSourceModule = require(
                    "tns-core-modules/image-source");
                const fileSystemModule = require(
                    "tns-core-modules/file-system");
                const folder = fileSystemModule.knownFolders.currentApp();
                const path = fileSystemModule.path.join(
                    folder.path,
                    "components/logo.jpg"
                );
                const imageFromLocalFile = imageSourceModule.fromFile(
                    path);
                console.log(imageFromLocalFile);
                this.imageVar = imageFromLocalFile;
                console.log(this.imageVar);
            }
        },

        data() {
            return {
                imageVar: "",
                searchPhrase: "",

                /*                med_data: {
                                                            Metacam: {
                                                                name: "Metacam2",
                                                                Rind: {
                                                                    Behandlungsoptionen: [
                                                                        "iv",
                                                                        "im",
                                                                        "Teleportation in die Zelle"
                                                                    ],
                                                                    Menge_pro_kg: [10.0, 12.0, 4.0]
                                                                },
                                                                imageSrc: "https://play.nativescript.org/dist/assets/img/flags/au.png"
                                                            }
                                                        },
                                                        textFieldValue: "",
                                                        animal_weight: "",
                                                        result: "",
                                                        animal_type: "Rind", //wird von den Screens vorher gesetzt
                                                        medi_type: "Metacam" //wird von den Screens vorher gesetzt options: []
                                                                                                                                */
                med_data: [
                    "Enteroconpulver",
                    "Pantevit",
                    "Metacam",
                    "Medikament2",
                    "Medikament3",
                    "Enteroconpulver4",
                    "Pantevit4",
                    "Metacam4",
                    "Medikament24",
                    "Medikament34",
                    "Enteroconpulver5",
                    "Pantevit5",
                    "Metacam5",
                    "Medikament25",
                    "Medikament35",
                    "Enteroconpulver6",
                    "Pantevit6",
                    "Metacam6",
                    "Medikament26",
                    "Medikament36",
                    "Enteroconpulver7",
                    "Pantevit7",
                    "Metacam7",
                    "Medikament27",
                    "Medikament37"
                ],
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
        width: 80:
    }
</style>