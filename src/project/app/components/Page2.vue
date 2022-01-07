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
                @itemTap="onButtonTap" style="height:80%">
                <v-template>
                    <FlexboxLayout flexDirection="row">
                        <!-- <Image :src="imageVar" class="thumb img-circle" /> -->
                        <Label :text="animal" class="t-12"
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

    export default {
        props: ["medi_type", "medikament"],

        components: {
            "v-Button": Button
        },

        methods: {
            onButtonTap(val) {
                // console.dir(this);
                this.animal_type = this.animal_types[val];
                console.log("Successfully set animal-type to: " + this
                    .animal_type);
            }
        },

        data() {
            return {
                animal_type: "",
                animal_types: ["Kleiner Wiederkäuer", "Kleines Haustier",
                    "Rind"
                ],
                options: []
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