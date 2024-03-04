const app = Vue.createApp({
    data(){
        return {
            courseGoal: "Finish the course and learn Vue!",
            vueLink : "https://naver.com"
        };
    },
    methods:{
        onCourseGoal(){
            const num = Math.random();
            if(num > 0.5){
                return "Hello Vue";
            }else{
                return "Bye Vue";
            }
        }
    }
});

app.mount('#user-goal');