import headCom from './headCom'

const cmpts={
    headCom,
}

export default {
    install(Vue){
        Object.keys(cmpts).map(key=>{
            const cpt = cmpts[key];
            Vue.component(cpt.name , cpt)
        })
    }
}