<template>
    <Page>
        <ActionBar title="Tierauswahl" />

        <StackLayout class="home-panel">
            <Label :text="this.medi_type" class="med" />
            <ListView for="animal in animals" @itemTap="onButtonTap"
                style="height:65%">
                <v-template>
                    <FlexboxLayout flexDirection="row">
                        <Label :text="animal" class="t-12"
                            style="width:60%" />
                        <Image class="thumb img" height="5em"
                            stretch="aspectFit" :src="bilder[animal]" />
                        <Image class="thumb img-circle" height="5em"
                            src="~/images/umwidmung.jpg"
                            v-if="medikament[animal].Umwidmung"
                            stretch="none" />
                    </FlexboxLayout>
                </v-template>
            </ListView>
            <ListView for="therapieoption in therapieoptionen"
                @itemTap="setTherapieoption" style="height:30%">
                <v-template>
                    <FlexboxLayout flexDirection="row">
                        <Label :text="therapieoption" class="t-12"
                            style="width: 60%" />
                    </FlexboxLayout>
                </v-template>
            </ListView>
        </StackLayout>
    </Page>
</template>

<script>
    import Page3 from "./Page3";

    export default {
        props: ["medi_type", "medikament"],

        created() {
            this.animals = Object.keys(this.medikament);
            if (this.animals[0] == "Besonderheiten") {
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
                        therapieoption: this.therapieoption
                    }
                });
            },

            onButtonTap(val) {
                console.dir(val.item);
                this.animal_type = val.item;
                console.log("Successfully set animal-type to: " + this
                    .animal_type);

                this.therapieoptionen = Object.keys(
                    this.medikament[this.animal_type]
                );

                if (this.therapieoptionen[0] == "Umwidmung") {
                    this.therapieoptionen.splice(0, 1);
                }
            },

            setTherapieoption(val) {
                this.therapieoption = val.item;

                console.log("therapieoption gesetzt");
                console.log(this.therapieoption);
                this.nextPage();
            }
        },

        data() {
            return {
                bilder: {
                    Rind: "~/images/Rind.png",
                    Katze: "~/images/Katze.png",
                    Pferd: "~/images/Pferd.png"
                },
                animal_type: "",
                therapieoptionen: []
            };
        }
    };
</script>