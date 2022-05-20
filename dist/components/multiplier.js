app.component('multiplier',{
    /*props:{
        band:{
            type: Number,
            required: true
        }
    },*/
    data(){
        return{
            values:[
                {id:0,color:'black',value:''},
                {id:1, color:'#A5682A',value:'0Ω '},
                {id:2, color:'red', value:'00Ω '},
                {id:3, color: '#ff6900', value:'kΩ '},
                {id:4, color:'yellow', value:'0kΩ '},
                {id:5, color:'green', value:'00kΩ '},
                {id:6, color:'blue', value:'MΩ '},
                {id:7, color:'#ed1bed', value:'0MΩ '},
                {id:8, color:'grey', value:'00MΩ '},
                {id:9, color:'white', value:'GΩ '},
                {id:10, color:'#E5C100', value: 'x10E-1Ω'},
                {id:11, color:'silver', value:'x10E-2Ω'}
            ],
        }
    },
    template:
    /*html*/ 
    `
    <div>
        <div class="picker">
            <div v-for="value in values" 
            :key='value.color'
            id = 'value.color'
            class="circle-picker"
            :style="{'background-color': value.color}"
            @click="pickColor(value.id)">
            </div>  
        </div>  
        <h2>multiplier</h2>
    </div>

    `,
    methods:{
        pickColor(id){
            console.log('picked',this.values[id]);
            this.$emit("picked",this.values[id]);
        }
    },
})
