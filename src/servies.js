import axios from "axios";
import {url} from './conf';

export function getCar(){
    axios.get(url).then(function(res){
     console.log(res.data);
     return(res.data)
    })
}