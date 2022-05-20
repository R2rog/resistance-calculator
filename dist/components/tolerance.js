app.component('tolerance',{
    /*props:{
        band:{
            type: Number,
            required: true
        }
    },*/
    data(){
        return{
            values:[
                {id:0, color:'#A5682A',value:' ±1%  '},
                {id:1, color:'red', value:' ±2%  '},
                {id:2, color:'#ff6900', value: ' ±0.05%  '},
                {id:3, color:'yellow', value: ' ±0.02%  '},
                {id:4, color:'green', value:' ±0.5%  '},
                {id:5, color:'blue', value:' ±0.25%  '},
                {id:6, color:'#ed1bed', value:' ±0.1%  '},
                {id:7, color:'grey', value:' ±0.01%  '},
                {id:8, color:'#E5C100', value:' ±5%  '},
                {id:9, color:'silver', value:' ±10%  '}
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
        <h2>tolerance</h2>
    </div>
    `,
    methods:{
        pickColor(id){
            console.log('picked',this.values[id]);
            this.$emit("picked",this.values[id]);
        }
    },
})
