<template>
    <Page>
        <ActionBar>
            <Label text="Tierauswahl" />
        </ActionBar>

        <!-- <GridLayout columns="30, *, 30"
            rows="30, *, 30, *, *, *, *, *, *, 3*, *, 3*"> -->
        <StackLayout class="home-panel">
            <Label :text="this.medi_type" row="1" col="1" class="med" />
            <ListView for="animal in Object.keys(medikament)"
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
                for="behandlungsoption in Object.keys(behandlungsoptionen)"
                @itemTap="setBehandlungsoption" style="height:30%">
                <v-template>
                    <FlexboxLayout flexDirection="row">
                        <!-- <Image :src="imageVar" class="thumb img-circle" /> -->
                        <Label :text="behandlungsoption" class="t-12"
                            style="width: 60%" />
                    </FlexboxLayout>
                </v-template>
            </ListView>
            <!-- <Button row="3" col="1" @tap="onButtonTap(0)">
                Kleiner Wiederkäuer</Button>
            <Button row="4" col="1" @tap="onButtonTap(1)">
                Kleines Haustier</Button>
            <Button row="5" col="1" @tap="onButtonTap(2)">Rind</Button> -->
            <!-- <v-Button row="10" col="1">Zurück</v-Button> -->
            <!-- </GridLayout> -->
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

                this.behandlungsoptionen = this.medikament[this.animal_type];
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
    label.med {
        font-size: 30%;
    }

    /* button.normal {
        background-color: rgb(103, 255, 103);
        color: black;
    }

    button.redadicated {
        background-color: rgb(255, 103, 103);
        color: black;
    } */
</style>