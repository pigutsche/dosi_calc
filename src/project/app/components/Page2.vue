<template>
    <Page>
        <ActionBar>
            <Label text="Tierauswahl" />
        </ActionBar>

        <GridLayout columns="30, *, 30"
            rows="30, *, 30, *, *, *, *, *, *, 3*, *, 3*">
            <Label :text="this.medi_type" row="1" col="1" class="med" />
            <Button row="3" col="1" @tap="onButtonTap(0)">
                Kleiner Wiederkäuer</Button>
            <Button row="4" col="1" @tap="onButtonTap(1)">
                Kleines Haustier</Button>
            <Button row="5" col="1" @tap="onButtonTap(2)">Rind</Button>
            <!-- <v-Button row="10" col="1">Zurück</v-Button> -->
        </GridLayout>
    </Page>
</template>

<script>
    import Button from "./Button";

    export default {
        props: ["medi_type"],

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
                med_data: {
                    Metacam: {
                        Rind: {
                            Behandlungsoptionen: [
                                "iv",
                                "im",
                                "Teleportation in die Zelle"
                            ],
                            Menge_pro_kg: [10.0, 12.0, 4.0]
                        }
                    }
                },
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