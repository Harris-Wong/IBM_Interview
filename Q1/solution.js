function checked() {
  // var N = 5;
  // var NSizeInshop = ["XL", "XXXXXXXXXL", "XXS", "M", "XXS"];
  // var M = 4;
  // var MRequestedSize = ["L", "M", "L", "XXS"];

  var N = prompt("Total number of T-shirts in shop");
  var NSizeInshop = prompt("T-shirt sizes in shop");
  const NSizeInshopArray = NSizeInshop.trim().split(/\s+/);
  var M = prompt("Total number of requests");
  var MRequestedSize = prompt("Requested Sizes");
  const MRequestedSizeArray = MRequestedSize.trim().split(/\s+/);
  
  if (M > N) {
    return "No";
  }
  
  const size = ["XS", "S", "M", "L", "XL"]

  
  for (let r = 0; r < MRequestedSizeArray.length; r++) {
    // Assign index Number to each of the requested size according to smallest size to largest size with object
    if(MRequestedSizeArray[0].charAt(1)) ;

    // Assign index Number of each of the size in shops to smallest size to largest size with object

    // Create for loop to compare each items from the 2 lists, starting from smallest size in each lists
  }
  
}

checked();