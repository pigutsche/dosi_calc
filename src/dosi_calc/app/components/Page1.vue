<template>
    <Page @loaded="onPageLoad">
        <ActionBar title="Medikamentenauswahl" />

        <StackLayout class="home-panel">
            <SearchBar hint="Suche nach Medikamenten..." :text="searchPhrase"
                @submit="onSearchSubmit" />
            <ListView for="medi in filtered_medis" @itemTap="onItemTap"
                style="height:65%">
                <v-template>
                    <FlexboxLayout flexDirection="row">
                        <Label :text="medi" class="t-12" style="width: 60%" />
                        <Image class="thumb img" style="height:10%"
                            :src="bilder[bes]"
                            v-for="bes in med_data[medi].Besonderheiten" />
                    </FlexboxLayout>
                </v-template>
            </ListView>
            <Label class="legende_title" text="Legende" />
            <ListView for="bild in Object.keys(bilder)" style="height:35%">
                <v-template>
                    <FlexboxLayout flexDirection="row">
                        <Label :text="bild" class="t-12" style="width: 60%" />
                        <Image class="thumb img" style="height:10%"
                            :src="bilder[bild]" loadMode="async"
                            stretch="aspectFit"></Image>
                    </FlexboxLayout>
                </v-template>
            </ListView>
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

            // initial load
            onPageLoad(args) {
                console.log("check");
                this.med_data = require("~/data/med_data.json");
                this.filtered_medis = Object.keys(this.med_data);
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

            onItemTap: function(args) {
                this.medi_type = args.item;
                console.log("Successfully set medi-type to: " + this
                    .medi_type);
                this.medikament = this.med_data[this.medi_type];
                this.nextPage();
            }
        },

        data() {
            return {
                searchPhrase: "",
                medikament: {},
                bilder: {
                    Reserveantibiotikum: "~/images/reserveantibiotikum.png",
                    "Nicht für Lebensmittel": "~/images/nicht_fuer_lebensmittel.png",
                    Sperrzeit: "~/images/sperrzeit.png"
                },
                med_data: {},
                filtered_medis: [],
                medi_type: "none"
            };
        }
    };
</script>