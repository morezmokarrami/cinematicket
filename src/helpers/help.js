import {languages} from "../languages/languages";

export const help = (lang) => {
   return(key) => {
       return languages[key][lang]
   }
}