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

            <ListView for="option in options" style="height:50%">
                <v-template>
                    <StackLayout orientation="horizontal">
                        <Label :text="option" :opt="option" @tap="onItemTap"
                            style="width: 80%" />
                        <Image class="thumb img-circle" height="25" width="25"
                            src="~/images/info.png" :opt="option"
                            @tap="onInfoTap" />
                    </StackLayout>
                </v-template>
            </ListView>
            <Label text="zu verabreichende Menge" />
            <Label :text="result + ' mg'" />
            <Button text="Neue Suche" @tap="neueSucheStarten" />
        </StackLayout>
    </Page>
</template>




<script>
    import Page1 from "./Page1";

    export default {
        props: ["medi_type", "medikament", "animal_type", "therapieoption"],

        methods: {
            onButtonTap() {
                console.log("Button was pressed");
            },

            onItemTap: function(args) {
                console.log(args.object.opt);

                let w = parseFloat(this.animal_weight);
                let r =
                    this.medikament[this.animal_type][this.therapieoption]
                    [
                        "Behandlungsoptionen"
                    ][args.object.opt]["Menge_pro_kg"] * w;
                console.log(r.toFixed(2));
                this.result = r.toFixed(2);
            },
            onInfoTap: function(args) {
                let info = this.medikament[this.animal_type][this
                    .therapieoption
                ][
                    "Behandlungsoptionen"
                ][args.object.opt]["Infotext"];
                alert({
                    title: "Beschreibung",
                    message: info,
                    okButtonText: "OK"
                }).then(() => {
                    console.log("Alert dialog closed");
                });
            },

            on_weight_enter() {
                console.log("weight entered");
                if (this.textFieldValue === "") return;
                this.animal_weight = this.textFieldValue;
                this.options = Object.keys(
                    this.medikament[this.animal_type][this.therapieoption]
                    [
                        "Behandlungsoptionen"
                    ]
                );
            },

            neueSucheStarten() {
                confirm({
                    title: "Neue Suche starten?",
                    message: "Sind Sie sicher das sie eine neue Suche starten wollen? Alle Ergebnisse werden gelöscht.",
                    okButtonText: "JA",
                    cancelButtonText: "ABBRECHEN"
                }).then(result => {
                    if (result)
                        this.$navigateTo(Page1, {
                            clearHistory: true
                        });
                });
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