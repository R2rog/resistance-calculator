app.component('band',{
    /*props:{
        band:{
            type: Number,
            required: true
        }
    },*/
    data(){
        return{
            values:[
                {id:0,color:'black',value:'0'},
                {id:1, color:'#A5682A',value:'1'},
                {id:2, color:'red', value:'2'},
                {id:3, color: '#ff6900', value:'3'},
                {id:4, color:'yellow', value:'4'},
                {id:5, color:'green', value:'5'},
                {id:6, color:'blue', value:'6'},
                {id:7, color:'#ed1bed', value:'7'},
                {id:8, color:'grey', value:'8'},
                {id:9, color:'white', value:'9'},
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
        <h2>band</h2>  
    </div>
    `,
    methods:{
        pickColor(id){
            console.log('picked',this.values[id]);
            this.$emit("picked",this.values[id]);
        }
    },
})
