app.component('temperature',{
    data(){
        return{
            values:[
                {id:0,color:'black',value:' 250ppm/K'},
                {id:1, color:'#A5682A',value:' 100ppm/K'},
                {id:2, color:'red', value:' 50ppm/K'},
                {id:3, color: '#ff6900', value:' 15ppm/K'},
                {id:4, color:'yellow', value:' 25ppm/K'},
                {id:5, color:'green', value:' 20ppm/K'},
                {id:6, color:'blue', value:' 10ppm/K'},
                {id:7, color:'#ed1bed', value:' 5ppm/K'},
                {id:8, color:'grey', value:' 1ppm/K'},
            ],
            color: 'red'
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
        <h2>temperature</h2>
    </div>
    `,
    methods:{
        pickColor(id){
            console.log('picked',this.values[id]);
            this.$emit("picked",this.values[id]);
        }
    },
})
