app.component('container',{
    data(){
        return{
            bands: 3,
            selectedBand:-1,
            bandValues: ['','','','','','']
        }
    },
    template:
    /*html*/
    `
    <div id="bands">
        <label>
        Bands:
            <input 
            type="number" 
            min="3"
            max="6"
            name="bands-number" 
            id="bands-number"
            @click = "resetValues" 
            v-model="bands"
            tabindex="0">
        </label>
    </div>
    <div class="container">
        <div v-for = "n in this.bands"
        ref = 'bands'
        v-bind:key ="n"
        @mouseover = 'appendPicker(n)'
        @mouseleave = 'removePicker'
        class = stripe>
            <div v-if="n== 3 && this.bands<=4">
                <multiplier  v-if="n == selectedBand" @picked="pickedColor"></multiplier>
            </div>
            <div v-else-if="n == 3 && this.bands>= 5" >
                <band v-if="n == selectedBand" @picked="pickedColor"></band> 
            </div>
            <div v-else-if = "n == 4 && this.bands== 4">
                <tolerance v-if="n == selectedBand" @picked="pickedColor"></tolerance>
            </div>
            <div v-else-if="n == 4 && this.bands>= 5">
                <multiplier v-if="n == selectedBand" @picked="pickedColor"></multiplier>
            </div>
            <div v-else-if = "n == 5">
                <tolerance v-if="n == selectedBand" @picked="pickedColor"></tolerance>
            </div>
            <div v-else-if = "n == 6">
                <temperature v-if="n == selectedBand" @picked="pickedColor"></temperature>
            </div>
            <div v-else>
                <band  v-if="n == selectedBand" @picked="pickedColor"></band>
            </div>
        </div>
    </div>
    <div>
        <h1 id="result">value: {{this.result}}</h1>
    </div>
    `,
    methods:{
        appendPicker(n){this.selectedBand = n;},
        removePicker(){this.selectedBand = -1;},
        pickedColor(values){
            this.$refs.bands[this.selectedBand-1].style.backgroundColor = values.color;
            this.bandValues[this.selectedBand-1] = values.value;
            this.selectedBand = -1;
        },
        resetValues(){
            this.bandValues = ['','','','','',''];
            this.$refs.bands.forEach(element => {
                element.style.backgroundColor = '#2C394B';
            });
        }
    },
    computed:{
        result(){
            let res = '';
            this.bandValues.forEach(element => {
                res += element;
            });
            return res;
        }
    }
})