<template>
    <Page>
        <ActionBar title="Ergebnis" />

        <StackLayout class="home-panel">
            <Label :text="this.medi_type" row="1" col="1" class="med" />
            <Label :text="animal_type" height="50"
                horizontalAlignment="center" />
            <TextField class="weigth_entry" width="70%" keyboardType="number"
                v-model="textFieldValue" hint="Gewicht in kg eingeben"
                @returnPress="on_weight_enter" />
            <Button text="Eingabe" @tap="on_weight_enter" />

            <ListView for="option in options" @itemTap="onItemTap"
                style="height:50%">
                <v-template>
                    <Label :text="option" style="width: 90%"
                        backgroundColor="lightgrey" />
                </v-template>
            </ListView>
            <Label text="zu verabreichende Menge" />
            <Label :text="result + ' mg'" />

        </StackLayout>

    </Page>
</template>




<script>
    export default {
        props: ["medi_type", "medikament", "animal_type", "behandlungsoption"],

        methods: {
            onItemTap: function(args) {
                console.log("Item with index: " + args.index + " tapped");
                //auslagern in extrafunktion
                let w = parseFloat(this.animal_weight);
                let r =
                    this.medikament[this.animal_type][this.behandlungsoption][
                        "Menge_pro_kg"
                    ][args.index] * w;
                console.log(r.toFixed(2));
                this.result = r.toFixed(2);
                //TODO change backgroundcolor of item
            },

            on_weight_enter() {
                console.log("weight entered");
                if (this.textFieldValue === "") return;
                this.animal_weight = this.textFieldValue;
                this.options = this.medikament[this.animal_type][
                    this.behandlungsoption
                ][
                    "Behandlungsoptionen"
                ];
                console.log(
                    this.medikament[this.animal_type][this.behandlungsoption][
                        "Behandlungsoptionen"
                    ][0]
                );
            }
        },

        data() {
            return {
                textFieldValue: "",
                animal_weight: "",
                result: "",
                options: []
            };
        }
    };
</script>

<style scoped>
    .home-panel {
        font-size: 20;
        margin: 15;
    }

    label.med {
        font-size: 30%;
    }
</style>