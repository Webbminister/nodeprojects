import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function Media(){
    return(
      <div className="socialmedia">
         <a href="./twitter.com"><FontAwesomeIcon icon={icon({name: 'twitter', style: 'brands'})} /></a>
         <a href="./twitter.com"><FontAwesomeIcon icon={icon({name: 'twitter', style: 'brands'})} /></a>
         <a href="./twitter.com"><FontAwesomeIcon icon={icon({name: 'twitter', style: 'brands'})} /></a>
         <a href="./twitter.com"><FontAwesomeIcon icon={icon({name: 'twitter', style: 'brands'})} /></a>
         <a href="./twitter.com"><FontAwesomeIcon icon={icon({name: 'twitter', style: 'brands'})} /></a>
      </div>
    )
}