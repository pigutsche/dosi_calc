<template>
    <Page>
        <ActionBar title="Tierauswahl" />

        <StackLayout class="home-panel">
            <Label :text="this.medi_type" row="1" col="1" class="med" />
            <ListView for="animal in animals"
                @itemTap="onButtonTap" style="height:50%">
                <v-template>
                    <FlexboxLayout flexDirection="row">
                        <!-- <Image :src="imageVar" class="thumb img-circle" /> -->
                        <Label :text="animal" class="t-12"
                            style="width: 60%" />
                    </FlexboxLayout>
                </v-template>
            </ListView>
            <ListView
                for="behandlungsoption in behandlungsoptionen"
                @itemTap="setBehandlungsoption" style="height:30%">
                <v-template>
                    <FlexboxLayout flexDirection="row">
                        <!-- <Image :src="imageVar" class="thumb img-circle" /> -->
                        <Label :text="behandlungsoption" class="t-12"
                            style="width: 60%" />
                    </FlexboxLayout>
                </v-template>
            </ListView>
        </StackLayout>
    </Page>
</template>

<script>
    import Button from "./Button";
    import Page3 from "./Page3";

    export default {
        props: ["medi_type", "medikament"],

        components: {
            "v-Button": Button
        },

        created() {
            this.animals = Object.keys(this.medikament);
            if(this.animals[0] == "Besonderheiten") {
                this.animals.splice(0, 1);
            }
        },

        methods: {
            nextPage() {
                this.$navigateTo(Page3, {
                    clearHistory: false,
                    props: {
                        medikament: this.medikament,
                        medi_type: this.medi_type,
                        animal_type: this.animal_type,
                        behandlungsoption: this.behandlungsoption
                    }
                });
            },

            onButtonTap(val) {
                console.dir(val.item);
                this.animal_type = val.item;
                console.log("Successfully set animal-type to: " + this
                    .animal_type);

                this.behandlungsoptionen = Object.keys(this.medikament[this.animal_type]);

                if(this.behandlungsoptionen[0] == "umwidmung") {
                    this.behandlungsoptionen.splice(0, 1);
                }
            },

            setBehandlungsoption(val) {
                this.behandlungsoption = val.item;

                console.log("behandlungsoption gesetzt");
                console.log(this.behandlungsoption);
                this.nextPage();
            }
        },

        data() {
            return {
                animal_type: "",
                behandlungsoptionen: []
            };
        }
    };
</script>

<style scoped lang="scss">
    .home-panel {
        font-size: 20;
        margin: 15;
    }

    label.med {
        font-size: 30%;
    }
</style>