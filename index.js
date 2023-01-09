

function distanceFromHqInBlocks(myBlock){ 
    //I want to return the distance from HQ in blocks
    // where located on 42nd street
 if(myBlock>42){
    return myBlock - 42
 } else{
return 42 - myBlock
 }
} 
console.log(distanceFromHqInBlocks(38))

function distanceFromHqInFeet(myBlock){
    return distanceFromHqInBlocks(myBlock) * 264
}

function distanceTravelledInFeet (beginning, destination) {
    if (beginning < destination) {
      return (destination - beginning) * 264
    } else {
      return (beginning - destination) * 264
    }
  }
   
  function calculatesFarePrice (beginning, destination) {
    
    
    const distance = distanceTravelledInFeet(beginning, destination)
    
    if (distance <= 400) {
        
        return 0
      }
      else if (distance > 400 && distance <= 2000) {
        
        return .02 * (distance - 400)
      } 
      else if (distance > 2000 && distance < 2500) {
        
        return 25
      } 
      else {
        return 'cannot travel that far'
        
      }
    }



   
        
      